import { createEffect, createMemo, For, onCleanup, type JSX, type ValidComponent } from "solid-js"
import { contains, getActiveElement, getDocument, getWindow } from "../../utils"
import { isFocusVisible } from "../utils/focus-visible"
import { useToastProviderContext } from "../provider/toast-provider-context"
import { type ElementOf, Polymorphic, type PolymorphicProps } from "../../polymorphic"
import { ToastViewportContext } from "./toast-viewport-context"
import { visuallyHiddenStyles } from "../../utils/styles"

export interface ToastViewportOptions {}

export interface ToastViewportCommonProps<T extends HTMLElement = HTMLElement> {
  ref?: T | ((el: T) => void)
  style?: JSX.CSSProperties | string
}

export interface ToastViewportRenderProps extends ToastViewportCommonProps {
  role: "region"
  tabIndex: -1
  "aria-live": "polite"
  "aria-atomic": boolean
  "aria-label": string
  "data-expanded": string | undefined
}

export type ToastViewportProps<T extends ValidComponent | HTMLElement = HTMLElement> = ToastViewportOptions &
  Partial<ToastViewportCommonProps<ElementOf<T>>>

/**
 * A container viewport for toasts. Renders a `<div>` element.
 *
 * - Provides `data-expanded` when hovered/focused.
 * - Tracks F6 keyboard shortcut to move focus into the viewport.
 * - Pauses toast timers on mouse enter / focus and resumes on leave / blur.
 * - Exposes a visually-hidden live region for high-priority toast announcements.
 */
export function ToastViewport<T extends ValidComponent = "div">(props: PolymorphicProps<T, ToastViewportProps<T>>) {
  const context = useToastProviderContext()

  let viewportEl: HTMLElement | undefined
  let handlingFocusGuard = false
  let markedReadyForMouseLeave = false

  const numToasts = () => context.toasts().length
  const frontmostHeight = () => context.toasts()[0]?.height ?? 0

  const hasTransitioningToasts = createMemo(() => context.toasts().some((t) => t.transitionStatus === "ending"))

  const highPriorityToasts = createMemo(() => context.toasts().filter((t) => t.priority === "high"))

  // F6 to focus the viewport
  createEffect(() => {
    if (!viewportEl) return

    function handleGlobalKeyDown(event: KeyboardEvent) {
      if (numToasts() === 0) return
      if (event.key === "F6" && event.target !== viewportEl) {
        event.preventDefault()
        context.setPrevFocusElement(getActiveElement(viewportEl) as HTMLElement | null)
        viewportEl?.focus({ preventScroll: true })
        context.pauseTimers()
        context.setFocused(true)
      }
    }

    const win = getWindow(viewportEl)
    win.addEventListener("keydown", handleGlobalKeyDown)
    onCleanup(() => win.removeEventListener("keydown", handleGlobalKeyDown))
  })

  // Window blur/focus — pause when tab is hidden
  createEffect(() => {
    if (!viewportEl || !numToasts()) return

    const win = getWindow(viewportEl)

    function handleWindowBlur(event: FocusEvent) {
      if (event.target !== win) return
      context.refs.windowFocusedRef = false
      context.pauseTimers()
    }

    function handleWindowFocus(event: FocusEvent) {
      if (event.relatedTarget || event.target === win) return

      const activeEl = getActiveElement(viewportEl)
      if (!contains(viewportEl, event.target as HTMLElement | null) || !isFocusVisible(activeEl)) {
        context.resumeTimers()
      }

      // Defer so handleFocus can fire first
      setTimeout(() => {
        context.refs.windowFocusedRef = true
      })
    }

    win.addEventListener("blur", handleWindowBlur, true)
    win.addEventListener("focus", handleWindowFocus, true)
    onCleanup(() => {
      win.removeEventListener("blur", handleWindowBlur, true)
      win.removeEventListener("focus", handleWindowFocus, true)
    })
  })

  // Pointer-outside-on-touch: resume when touching outside viewport
  createEffect(() => {
    if (!viewportEl || numToasts() === 0) return

    const doc = getDocument(viewportEl)

    function handlePointerDown(event: PointerEvent) {
      if (event.pointerType !== "touch") return
      if (contains(viewportEl, event.target as HTMLElement | null)) return
      context.resumeTimers()
      context.setHovering(false)
      context.setFocused(false)
    }

    doc.addEventListener("pointerdown", handlePointerDown, true)
    onCleanup(() => doc.removeEventListener("pointerdown", handlePointerDown, true))
  })

  // When transitioning toasts finish, check if mouse-leave was deferred
  createEffect(() => {
    if (!context.refs.windowFocusedRef || hasTransitioningToasts() || !markedReadyForMouseLeave) {
      return
    }
    context.resumeTimers()
    context.setHovering(false)
    markedReadyForMouseLeave = false
  })

  function handleMouseEnter() {
    context.pauseTimers()
    context.setHovering(true)
    markedReadyForMouseLeave = false
  }

  function handleMouseLeave() {
    if (hasTransitioningToasts()) {
      markedReadyForMouseLeave = true
    } else {
      context.resumeTimers()
      context.setHovering(false)
    }
  }

  function handleFocus() {
    if (handlingFocusGuard) {
      handlingFocusGuard = false
      return
    }

    if (context.focused()) return

    const activeEl = getActiveElement(viewportEl)
    if (!context.refs.windowFocusedRef && !isFocusVisible(activeEl)) return

    if (isFocusVisible(getDocument(viewportEl).activeElement)) {
      context.setFocused(true)
      context.pauseTimers()
    }
  }

  function handleBlur(event: FocusEvent) {
    if (!context.focused() || contains(viewportEl, event.relatedTarget as HTMLElement | null)) {
      return
    }
    context.setFocused(false)
    context.resumeTimers()
  }

  function handleKeyDown(event: KeyboardEvent) {
    if (event.key === "Tab" && event.shiftKey && event.target === viewportEl) {
      event.preventDefault()
      context.prevFocusElement()?.focus({ preventScroll: true })
      context.resumeTimers()
    }
  }

  function handleFocusGuard(event: FocusEvent) {
    if (!viewportEl) return
    handlingFocusGuard = true
    // If coming off the viewport container itself, go to first toast
    if (event.relatedTarget === viewportEl) {
      context.toasts()[0]?.ref?.focus()
    } else {
      context.prevFocusElement()?.focus({ preventScroll: true })
    }
  }

  // --toast-frontmost-height CSS var
  const viewportStyle = () => ({
    "--toast-frontmost-height": frontmostHeight() ? `${frontmostHeight()}px` : undefined,
  })

  return (
    <ToastViewportContext.Provider value={{ refs: context.refs }}>
      {numToasts() > 0 && context.prevFocusElement() && <FocusGuard onFocus={handleFocusGuard} />}
      <Polymorphic
        as="div"
        ref={(el: HTMLElement) => {
          viewportEl = el
          context.refs.viewportRef = el
        }}
        role="region"
        tabIndex={-1}
        aria-live="polite"
        aria-atomic={false}
        aria-label={`${numToasts()} notification${numToasts() !== 1 ? "s" : ""} (F6)`}
        data-expanded={context.expanded() ? "" : undefined}
        style={viewportStyle()}
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        onClick={handleFocus}
        {...(props as Record<string, unknown>)}
      />
      {numToasts() > 0 && context.prevFocusElement() && <FocusGuard onFocus={handleFocusGuard} />}
      {/* Visually hidden live region for high-priority (assertive) announcements */}
      {!context.focused() && highPriorityToasts().length > 0 && (
        <div style={visuallyHiddenStyles}>
          <For each={highPriorityToasts()}>
            {(toast) => (
              <div role="alert" aria-atomic="true">
                <div>{toast.title}</div>
                <div>{toast.description}</div>
              </div>
            )}
          </For>
        </div>
      )}
    </ToastViewportContext.Provider>
  )
}

/* ---- FocusGuard ---- */
/** A zero-size focusable sentinel that redirects focus at the viewport boundaries. */
function FocusGuard(focusGuardProps: { onFocus: (e: FocusEvent) => void }) {
  return (
    <span
      // biome-ignore lint/a11y/noNoninteractiveTabindex: sentinel for focus management
      tabIndex={0}
      aria-hidden="true"
      onFocus={focusGuardProps.onFocus}
      style={{
        outline: "none",
        opacity: "0",
        position: "fixed",
        "pointer-events": "none",
      }}
    />
  )
}
