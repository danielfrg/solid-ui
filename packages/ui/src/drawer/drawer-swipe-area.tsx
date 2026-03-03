import { mergeDefaultProps, mergeRefs } from "../utils"
import { type JSX, type ValidComponent, onCleanup, splitProps } from "solid-js"

import { type ElementOf, Polymorphic, type PolymorphicProps } from "../polymorphic"
import { useDialogContext } from "../dialog/dialog-context"
import { useDrawerContext } from "./drawer-context"
import type { DrawerSide } from "./drawer-context"

export interface DrawerSwipeAreaOptions {
  /** Whether the swipe area is disabled. */
  disabled?: boolean

  /** Swipe distance (px) required to open the drawer. */
  swipeThreshold?: number
}

export interface DrawerSwipeAreaCommonProps<T extends HTMLElement = HTMLElement> {
  ref: T | ((el: T) => void)
  onPointerDown: JSX.EventHandlerUnion<T, PointerEvent>
}

export interface DrawerSwipeAreaRenderProps extends DrawerSwipeAreaCommonProps {
  "data-side": DrawerSide
  "data-disabled": string | undefined
}

export type DrawerSwipeAreaProps<T extends ValidComponent | HTMLElement = HTMLElement> = DrawerSwipeAreaOptions &
  Partial<DrawerSwipeAreaCommonProps<ElementOf<T>>>

function isOpenDirection(side: DrawerSide, deltaX: number, deltaY: number): boolean {
  if (side === "right") return deltaX < 0
  if (side === "left") return deltaX > 0
  if (side === "bottom") return deltaY < 0
  return deltaY > 0
}

/**
 * A swipe area that listens for edge swipes to open the drawer.
 */
export function DrawerSwipeArea<T extends ValidComponent = "div">(props: PolymorphicProps<T, DrawerSwipeAreaProps<T>>) {
  const dialogContext = useDialogContext()
  const drawerContext = useDrawerContext()

  const mergedProps = mergeDefaultProps(
    {
      swipeThreshold: 30,
    },
    props as DrawerSwipeAreaProps,
  )

  const [local, others] = splitProps(mergedProps, ["ref", "disabled", "swipeThreshold", "onPointerDown"])

  let startX = 0
  let startY = 0
  let pointerId: number | null = null

  const cleanup = () => {
    document.removeEventListener("pointermove", onPointerMove)
    document.removeEventListener("pointerup", onPointerUp)
    document.removeEventListener("pointercancel", onPointerUp)
    pointerId = null
  }

  const onPointerMove = (event: PointerEvent) => {
    if (event.pointerId !== pointerId) return

    const deltaX = event.clientX - startX
    const deltaY = event.clientY - startY
    const side = drawerContext.side()

    const threshold = local.swipeThreshold ?? 0

    if (!isOpenDirection(side, deltaX, deltaY)) return

    const distance = Math.max(Math.abs(deltaX), Math.abs(deltaY))

    if (distance < threshold) return

    cleanup()

    if (!dialogContext.isOpen()) {
      dialogContext.toggle()
    }
  }

  const onPointerUp = (event: PointerEvent) => {
    if (event.pointerId !== pointerId) return
    cleanup()
  }

  const onPointerDown: JSX.EventHandlerUnion<HTMLElement, PointerEvent> = (event) => {
    if (typeof local.onPointerDown === "function") {
      local.onPointerDown(event as PointerEvent & { currentTarget: HTMLElement; target: Element })
    }

    if (local.disabled || dialogContext.isOpen()) return
    if (event.pointerType !== "touch") return

    startX = event.clientX
    startY = event.clientY
    pointerId = event.pointerId

    document.addEventListener("pointermove", onPointerMove)
    document.addEventListener("pointerup", onPointerUp)
    document.addEventListener("pointercancel", onPointerUp)
  }

  onCleanup(() => {
    cleanup()
  })

  return (
    <Polymorphic<DrawerSwipeAreaRenderProps>
      as="div"
      ref={mergeRefs(local.ref)}
      data-side={drawerContext.side()}
      data-disabled={local.disabled ? "" : undefined}
      onPointerDown={onPointerDown}
      {...others}
    />
  )
}
