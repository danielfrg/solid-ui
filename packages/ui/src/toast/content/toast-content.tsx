import { onCleanup, onMount, type JSX, type ValidComponent } from "solid-js"
import { type ElementOf, Polymorphic, type PolymorphicProps } from "../../polymorphic"
import { useToastRootContext } from "../root/toast-root-context"

export interface ToastContentOptions {}

export interface ToastContentCommonProps<T extends HTMLElement = HTMLElement> {
  ref?: T | ((el: T) => void)
  style?: JSX.CSSProperties | string
}

export interface ToastContentRenderProps extends ToastContentCommonProps {
  "data-expanded": string | undefined
  "data-behind": string | undefined
}

export type ToastContentProps<T extends ValidComponent | HTMLElement = HTMLElement> = ToastContentOptions &
  Partial<ToastContentCommonProps<ElementOf<T>>>

/**
 * A container for the contents of a toast.
 * Hosts a ResizeObserver that keeps the stack height tracking accurate.
 * Renders a `<div>` element.
 */
export function ToastContent<T extends ValidComponent = "div">(props: PolymorphicProps<T, ToastContentProps<T>>) {
  const ctx = useToastRootContext()
  let contentEl: HTMLElement | undefined

  onMount(() => {
    ctx.recalculateHeight()

    if (typeof ResizeObserver !== "function" || typeof MutationObserver !== "function") return

    const ro = new ResizeObserver(() => ctx.recalculateHeight())
    // Only observe child content changes (childList + characterData), NOT attributes
    // on this element — attribute changes like data-expanded would cause an infinite
    // loop: MutationObserver → recalculateHeight → update → expanded → data-expanded → MutationObserver
    const mo = new MutationObserver(() => ctx.recalculateHeight())

    if (contentEl) {
      ro.observe(contentEl)
      mo.observe(contentEl, { childList: true, subtree: true, characterData: true, attributes: false })
    }

    onCleanup(() => {
      ro.disconnect()
      mo.disconnect()
    })
  })

  const behind = () => ctx.visibleIndex() > 0

  return (
    <Polymorphic
      as="div"
      ref={(el: HTMLElement) => {
        contentEl = el
      }}
      data-expanded={ctx.expanded() ? "" : undefined}
      data-behind={behind() && !ctx.expanded() ? "" : undefined}
      {...(props as Record<string, unknown>)}
    />
  )
}
