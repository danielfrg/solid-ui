import {
  createEffect,
  createMemo,
  createSignal,
  onCleanup,
  onMount,
  Show,
  untrack,
  type JSX,
  type ValidComponent,
} from "solid-js"
import { contains, getActiveElement, mergeProps } from "../../utils"
import { type ElementOf, Polymorphic, type PolymorphicProps } from "../../polymorphic"
import { isFocusVisible } from "../utils/focus-visible"
import { useToastProviderContext } from "../provider/toast-provider-context"
import type { ToastObject } from "../types"
import { ToastRootContext, type ToastRootContextValue } from "./toast-root-context"
import { ToastRootCssVars } from "./toast-root-css-vars"

// ---- Swipe constants ----
const SWIPE_THRESHOLD = 40
const REVERSE_CANCEL_THRESHOLD = 10
const OPPOSITE_DIRECTION_DAMPING_FACTOR = 0.5
const MIN_DRAG_THRESHOLD = 1

// ---- Helpers ----
function getDisplacement(direction: "up" | "down" | "left" | "right", deltaX: number, deltaY: number) {
  switch (direction) {
    case "up":
      return -deltaY
    case "down":
      return deltaY
    case "left":
      return -deltaX
    case "right":
      return deltaX
    default:
      return 0
  }
}

function getElementTransform(element: HTMLElement) {
  const transform = window.getComputedStyle(element).transform
  if (!transform || transform === "none") {
    return { x: 0, y: 0, scale: 1 }
  }

  const matrix = transform.match(/matrix(?:3d)?\(([^)]+)\)/)
  if (!matrix?.[1]) return { x: 0, y: 0, scale: 1 }

  const values = matrix[1].split(", ").map(parseFloat)

  if (values.length === 6) {
    const a = values[0] ?? 0
    const b = values[1] ?? 0
    return {
      x: values[4] ?? 0,
      y: values[5] ?? 0,
      scale: Math.sqrt(a * a + b * b),
    }
  }

  if (values.length === 16) {
    return { x: values[12] ?? 0, y: values[13] ?? 0, scale: values[0] ?? 0 }
  }

  return { x: 0, y: 0, scale: 1 }
}

// ---- Component interfaces ----
export interface ToastRootOptions {
  /** The toast object from `useToastManager().toasts()`. */
  toast: ToastObject<Record<string, unknown>>
  /**
   * Direction(s) in which the toast can be swiped to dismiss.
   * @default ['down', 'right']
   */
  swipeDirection?: "up" | "down" | "left" | "right" | ("up" | "down" | "left" | "right")[]
}

export interface ToastRootCommonProps<T extends HTMLElement = HTMLElement> {
  ref?: T | ((el: T) => void)
  style?: JSX.CSSProperties | string
}

export type ToastRootProps<T extends ValidComponent | HTMLElement = HTMLElement> = ToastRootOptions &
  Partial<ToastRootCommonProps<ElementOf<T>>>

/**
 * Groups all parts of an individual toast.
 * Renders a `<div>` element with stack CSS vars, swipe handling, and animation data attributes.
 */
export function ToastRoot<T extends ValidComponent = "div">(props: PolymorphicProps<T, ToastRootProps<T>>) {
  const local = props as ToastRootProps

  const isAnchored = false // positioner support reserved for future
  const swipeDirections = () => {
    if (isAnchored) return [] as ("up" | "down" | "left" | "right")[]
    const d = local.swipeDirection ?? ["down", "right"]
    return Array.isArray(d) ? d : [d]
  }
  const swipeEnabled = () => swipeDirections().length > 0

  const ctx = useToastProviderContext()
  const { toasts, close, remove, focused, expanded } = ctx

  const toast = () => local.toast as ToastObject<Record<string, unknown>>

  // ---- Signals ----
  const [currentSwipeDir, setCurrentSwipeDir] = createSignal<"up" | "down" | "left" | "right" | undefined>(undefined)
  const [isSwiping, setIsSwiping] = createSignal(false)
  const [isRealSwipe, setIsRealSwipe] = createSignal(false)
  const [dragDismissed, setDragDismissed] = createSignal(false)
  const [dragOffset, setDragOffset] = createSignal({ x: 0, y: 0 })
  const [initialTransform, setInitialTransform] = createSignal({ x: 0, y: 0, scale: 1 })
  const [lockedDir, setLockedDir] = createSignal<"horizontal" | "vertical" | null>(null)
  const [titleId, setTitleId] = createSignal<string | undefined>(undefined)
  const [descriptionId, setDescriptionId] = createSignal<string | undefined>(undefined)

  // ---- Mutable refs (not reactive — don't need to trigger renders) ----
  const refs: ToastRootContextValue["refs"] = { rootRef: null }
  let dragStartPos = { x: 0, y: 0 }
  let initialTransformRef = { x: 0, y: 0, scale: 1 }
  let intendedSwipeDir: "up" | "down" | "left" | "right" | undefined = undefined
  let maxSwipeDisplacement = 0
  let cancelledSwipe = false
  let swipeCancelBaseline = { x: 0, y: 0 }
  let isFirstPointerMove = false

  // ---- Stack position memos ----
  const domIndex = createMemo(() => toasts().indexOf(local.toast))
  const visibleIndex = createMemo(() =>
    toasts()
      .filter((t) => t.transitionStatus !== "ending")
      .indexOf(local.toast),
  )
  const offsetY = createMemo(() =>
    toasts()
      .slice(0, toasts().indexOf(local.toast))
      .reduce((acc, t) => acc + (t.height ?? 0), 0),
  )

  // ---- Animation lifecycle ----
  // Watch for transitionStatus === 'ending' and remove after CSS transitions complete
  createEffect(() => {
    if (local.toast.transitionStatus !== "ending") return
    const el = refs.rootRef
    if (!el) {
      remove(local.toast.id)
      return
    }

    function onTransitionEnd(ev: TransitionEvent) {
      // Only respond to events on the element itself, not bubbling from children
      if (ev.target !== el || !el) return
      el.removeEventListener("transitionend", onTransitionEnd)
      el.removeEventListener("animationend", onAnimationEnd)
      remove(local.toast.id)
    }

    function onAnimationEnd(ev: AnimationEvent) {
      if (ev.target !== el || !el) return
      el.removeEventListener("transitionend", onTransitionEnd)
      el.removeEventListener("animationend", onAnimationEnd)
      remove(local.toast.id)
    }

    el.addEventListener("transitionend", onTransitionEnd)
    el.addEventListener("animationend", onAnimationEnd)

    // Fallback: if no transitions/animations are running, remove immediately
    const style = window.getComputedStyle(el)
    const hasTransition = style.transitionDuration !== "0s" && style.transitionDuration !== ""
    const hasAnimation = style.animationName !== "none" && style.animationName !== ""

    if (!hasTransition && !hasAnimation) {
      el?.removeEventListener("transitionend", onTransitionEnd)
      el?.removeEventListener("animationend", onAnimationEnd)
      remove(local.toast.id)
    }

    onCleanup(() => {
      el?.removeEventListener("transitionend", onTransitionEnd)
      el?.removeEventListener("animationend", onAnimationEnd)
    })
  })

  // ---- Height measurement ----
  let lastMeasuredHeight = 0
  let recalcScheduled = false

  function recalculateHeight() {
    const el = refs.rootRef
    if (!el) return

    const prev = el.style.height
    el.style.height = "auto"
    const height = el.offsetHeight
    el.style.height = prev

    // Use untrack to avoid creating reactive dependencies — this runs from
    // ResizeObserver / MutationObserver callbacks and must not subscribe to the store.
    const { gone, isStarting } = untrack(() => ({
      gone: toasts().findIndex((t) => t.id === local.toast.id) === -1,
      isStarting: local.toast.transitionStatus === "starting",
    }))
    if (gone) return

    // Only update the store if height actually changed or we need to clear starting status
    if (height === lastMeasuredHeight && !isStarting) return

    lastMeasuredHeight = height

    // Defer the store write to a microtask to break the synchronous reactive cycle:
    // recalculateHeight → update(store) → hasDifferingHeights → expanded → data-expanded attr →
    // ResizeObserver/MutationObserver → recalculateHeight
    if (recalcScheduled) return
    recalcScheduled = true

    queueMicrotask(() => {
      recalcScheduled = false
      // Don't overwrite transitionStatus if the toast has started closing between
      // the measurement and this microtask.
      const currentStatus = untrack(() => local.toast.transitionStatus)
      if (currentStatus === "ending") {
        // Still update height/ref so the exit animation has correct dimensions
        ctx.update(local.toast.id, { ref: el, height: lastMeasuredHeight } as Partial<
          ToastObject<Record<string, unknown>>
        >)
        return
      }
      ctx.update(local.toast.id, {
        ref: el,
        height: lastMeasuredHeight,
        transitionStatus: undefined,
      } as Partial<ToastObject<Record<string, unknown>>>)
    })
  }

  onMount(() => {
    if (typeof ResizeObserver === "function" && refs.rootRef) {
      const ro = new ResizeObserver(recalculateHeight)
      ro.observe(refs.rootRef)
      onCleanup(() => ro.disconnect())
      return
    }
    recalculateHeight()
  })

  // ---- Swipe ----
  function applyDirectionalDamping(deltaX: number, deltaY: number) {
    const dirs = swipeDirections()
    let nx = deltaX
    let ny = deltaY

    if (!dirs.includes("left") && !dirs.includes("right")) {
      nx =
        deltaX > 0
          ? deltaX ** OPPOSITE_DIRECTION_DAMPING_FACTOR
          : -(Math.abs(deltaX) ** OPPOSITE_DIRECTION_DAMPING_FACTOR)
    } else {
      if (!dirs.includes("right") && deltaX > 0) nx = deltaX ** OPPOSITE_DIRECTION_DAMPING_FACTOR
      if (!dirs.includes("left") && deltaX < 0) nx = -(Math.abs(deltaX) ** OPPOSITE_DIRECTION_DAMPING_FACTOR)
    }

    if (!dirs.includes("up") && !dirs.includes("down")) {
      ny =
        deltaY > 0
          ? deltaY ** OPPOSITE_DIRECTION_DAMPING_FACTOR
          : -(Math.abs(deltaY) ** OPPOSITE_DIRECTION_DAMPING_FACTOR)
    } else {
      if (!dirs.includes("down") && deltaY > 0) ny = deltaY ** OPPOSITE_DIRECTION_DAMPING_FACTOR
      if (!dirs.includes("up") && deltaY < 0) ny = -(Math.abs(deltaY) ** OPPOSITE_DIRECTION_DAMPING_FACTOR)
    }

    return { x: nx, y: ny }
  }

  function handlePointerDown(event: PointerEvent) {
    if (event.button !== 0) return

    if (event.pointerType === "touch") {
      ctx.pauseTimers()
    }

    const target = event.target as HTMLElement | null
    const isInteractive = target?.closest('button,a,input,textarea,[role="button"],[data-swipe-ignore]')
    if (isInteractive) return

    cancelledSwipe = false
    intendedSwipeDir = undefined
    maxSwipeDisplacement = 0
    dragStartPos = { x: event.clientX, y: event.clientY }
    swipeCancelBaseline = { ...dragStartPos }

    if (refs.rootRef) {
      const t = getElementTransform(refs.rootRef)
      initialTransformRef = t
      setInitialTransform(t)
      setDragOffset({ x: t.x, y: t.y })
    }

    ctx.setHovering(true)
    setIsSwiping(true)
    setIsRealSwipe(false)
    setLockedDir(null)
    isFirstPointerMove = true

    refs.rootRef?.setPointerCapture(event.pointerId)
  }

  function handlePointerMove(event: PointerEvent) {
    if (!isSwiping()) return
    event.preventDefault()

    if (isFirstPointerMove) {
      dragStartPos = { x: event.clientX, y: event.clientY }
      isFirstPointerMove = false
    }

    const { clientX, clientY, movementX, movementY } = event

    // Update swipe cancel baseline — tracks reversal
    if ((movementY < 0 && clientY > swipeCancelBaseline.y) || (movementY > 0 && clientY < swipeCancelBaseline.y)) {
      swipeCancelBaseline = { x: swipeCancelBaseline.x, y: clientY }
    }
    if ((movementX < 0 && clientX > swipeCancelBaseline.x) || (movementX > 0 && clientX < swipeCancelBaseline.x)) {
      swipeCancelBaseline = { x: clientX, y: swipeCancelBaseline.y }
    }

    const deltaX = clientX - dragStartPos.x
    const deltaY = clientY - dragStartPos.y
    const cancelDeltaX = clientX - swipeCancelBaseline.x
    const cancelDeltaY = clientY - swipeCancelBaseline.y
    const dirs = swipeDirections()

    if (!isRealSwipe()) {
      const dist = Math.sqrt(deltaX * deltaX + deltaY * deltaY)
      if (dist >= MIN_DRAG_THRESHOLD) {
        setIsRealSwipe(true)
        if (lockedDir() === null) {
          const hasH = dirs.includes("left") || dirs.includes("right")
          const hasV = dirs.includes("up") || dirs.includes("down")
          if (hasH && hasV) {
            setLockedDir(Math.abs(deltaX) > Math.abs(deltaY) ? "horizontal" : "vertical")
          }
        }
      }
    }

    if (!intendedSwipeDir) {
      let candidate: "up" | "down" | "left" | "right" | undefined
      const ld = lockedDir()

      if (ld === "vertical") {
        candidate = deltaY > 0 ? "down" : deltaY < 0 ? "up" : undefined
      } else if (ld === "horizontal") {
        candidate = deltaX > 0 ? "right" : deltaX < 0 ? "left" : undefined
      } else if (Math.abs(deltaX) >= Math.abs(deltaY)) {
        candidate = deltaX > 0 ? "right" : "left"
      } else {
        candidate = deltaY > 0 ? "down" : "up"
      }

      if (candidate && dirs.includes(candidate)) {
        intendedSwipeDir = candidate
        maxSwipeDisplacement = getDisplacement(candidate, deltaX, deltaY)
        setCurrentSwipeDir(candidate)
      }
    } else {
      const currentDisp = getDisplacement(intendedSwipeDir, cancelDeltaX, cancelDeltaY)
      if (currentDisp > SWIPE_THRESHOLD) {
        cancelledSwipe = false
        setCurrentSwipeDir(intendedSwipeDir)
      } else if (
        !(dirs.includes("left") && dirs.includes("right")) &&
        !(dirs.includes("up") && dirs.includes("down")) &&
        maxSwipeDisplacement - currentDisp >= REVERSE_CANCEL_THRESHOLD
      ) {
        cancelledSwipe = true
      }
      if (currentDisp > maxSwipeDisplacement) {
        maxSwipeDisplacement = currentDisp
      }
    }

    const damped = applyDirectionalDamping(deltaX, deltaY)
    const ld = lockedDir()
    let nx = initialTransformRef.x
    let ny = initialTransformRef.y

    if (ld === "horizontal") {
      if (dirs.includes("left") || dirs.includes("right")) nx += damped.x
    } else if (ld === "vertical") {
      if (dirs.includes("up") || dirs.includes("down")) ny += damped.y
    } else {
      if (dirs.includes("left") || dirs.includes("right")) nx += damped.x
      if (dirs.includes("up") || dirs.includes("down")) ny += damped.y
    }

    setDragOffset({ x: nx, y: ny })
  }

  function handlePointerUp(event: PointerEvent) {
    if (!isSwiping()) return

    setIsSwiping(false)
    setIsRealSwipe(false)
    setLockedDir(null)
    refs.rootRef?.releasePointerCapture(event.pointerId)

    if (cancelledSwipe) {
      setDragOffset({ x: initialTransform().x, y: initialTransform().y })
      setCurrentSwipeDir(undefined)
      return
    }

    const deltaX = dragOffset().x - initialTransform().x
    const deltaY = dragOffset().y - initialTransform().y
    const dirs = swipeDirections()
    let shouldClose = false
    let dismissDir: "up" | "down" | "left" | "right" | undefined

    for (const dir of dirs) {
      if (dir === "right" && deltaX > SWIPE_THRESHOLD) {
        shouldClose = true
        dismissDir = "right"
        break
      }
      if (dir === "left" && deltaX < -SWIPE_THRESHOLD) {
        shouldClose = true
        dismissDir = "left"
        break
      }
      if (dir === "down" && deltaY > SWIPE_THRESHOLD) {
        shouldClose = true
        dismissDir = "down"
        break
      }
      if (dir === "up" && deltaY < -SWIPE_THRESHOLD) {
        shouldClose = true
        dismissDir = "up"
        break
      }
    }

    if (shouldClose) {
      setCurrentSwipeDir(dismissDir)
      setDragDismissed(true)
      close(local.toast.id)
    } else {
      setDragOffset({ x: initialTransform().x, y: initialTransform().y })
      setCurrentSwipeDir(undefined)
    }
  }

  function handleKeyDown(event: KeyboardEvent) {
    if (event.key !== "Escape") return
    const el = refs.rootRef
    if (!el || !contains(el, getActiveElement(el))) return
    close(local.toast.id)
  }

  // Prevent iOS scroll during swipe
  createEffect(() => {
    if (!swipeEnabled() || !refs.rootRef) return
    const el = refs.rootRef

    function preventTouchMove(event: TouchEvent) {
      if (contains(el, event.target as HTMLElement | null)) {
        event.preventDefault()
      }
    }

    el.addEventListener("touchmove", preventTouchMove, { passive: false })
    onCleanup(() => el.removeEventListener("touchmove", preventTouchMove))
  })

  // ---- Drag inline styles ----
  function getDragStyles(): JSX.CSSProperties {
    const it = initialTransform()
    const off = dragOffset()
    const noMovement = !isSwiping() && off.x === it.x && off.y === it.y && !dragDismissed()

    if (noMovement) {
      return {
        [ToastRootCssVars.swipeMovementX]: "0px",
        [ToastRootCssVars.swipeMovementY]: "0px",
      }
    }

    const deltaX = off.x - it.x
    const deltaY = off.y - it.y

    return {
      transition: isSwiping() ? "none" : undefined,
      transform: isSwiping() ? `translateX(${off.x}px) translateY(${off.y}px) scale(${it.scale})` : undefined,
      [ToastRootCssVars.swipeMovementX]: `${deltaX}px`,
      [ToastRootCssVars.swipeMovementY]: `${deltaY}px`,
    }
  }

  // ---- Context value ----
  const rootContext: ToastRootContextValue = {
    toast,
    refs,
    titleId,
    setTitleId,
    descriptionId,
    setDescriptionId,
    swiping: isSwiping,
    swipeDirection: currentSwipeDir,
    index: domIndex,
    visibleIndex,
    expanded,
    recalculateHeight,
  }

  // ---- Render ----
  const isHighPriority = () => toast().priority === "high"
  const transitionStatus = () => toast().transitionStatus

  const rootStyle = (): JSX.CSSProperties => ({
    ...getDragStyles(),
    [ToastRootCssVars.index]: transitionStatus() === "ending" ? domIndex() : visibleIndex(),
    [ToastRootCssVars.offsetY]: `${offsetY()}px`,
    [ToastRootCssVars.height]: toast().height ? `${toast().height}px` : undefined,
  })

  const rootProps = mergeProps(
    {
      ref: (el: HTMLElement) => {
        refs.rootRef = el
      },
      role: isHighPriority() ? "alertdialog" : "dialog",
      tabIndex: 0,
      "aria-modal": false,
      "aria-labelledby": titleId(),
      "aria-describedby": descriptionId(),
      "aria-hidden": isHighPriority() && !focused() ? true : undefined,
      inert: toast().limited ? true : undefined,
      "data-expanded": expanded() ? "" : undefined,
      "data-limited": toast().limited ? "" : undefined,
      "data-type": toast().type,
      "data-swiping": isSwiping() ? "" : undefined,
      "data-swipe-direction": currentSwipeDir(),
      "data-starting-style": transitionStatus() === "starting" ? "" : undefined,
      "data-ending-style": transitionStatus() === "ending" ? "" : undefined,
      style: rootStyle(),
      onPointerDown: swipeEnabled() ? (e: PointerEvent) => handlePointerDown(e) : undefined,
      onPointerMove: swipeEnabled() ? (e: PointerEvent) => handlePointerMove(e) : undefined,
      onPointerUp: swipeEnabled() ? (e: PointerEvent) => handlePointerUp(e) : undefined,
      onKeyDown: (e: KeyboardEvent) => handleKeyDown(e),
    },
    props as Record<string, unknown>,
  ) as unknown as ToastRootProps & Record<string, unknown>

  return (
    <ToastRootContext.Provider value={rootContext}>
      <Polymorphic as="div" {...rootProps} />
    </ToastRootContext.Provider>
  )
}
