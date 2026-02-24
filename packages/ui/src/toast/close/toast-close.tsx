import { createSignal, type JSX, type ValidComponent } from "solid-js"
import { type ElementOf, Polymorphic, type PolymorphicProps } from "../../polymorphic"
import { useToastProviderContext } from "../provider/toast-provider-context"
import { useToastRootContext } from "../root/toast-root-context"

export interface ToastCloseOptions {}

export interface ToastCloseCommonProps<T extends HTMLElement = HTMLElement> {
  onClick?: JSX.EventHandlerUnion<T, MouseEvent>
  disabled?: boolean
  style?: JSX.CSSProperties | string
}

export interface ToastCloseRenderProps extends ToastCloseCommonProps {
  "data-type": string | undefined
  "aria-hidden": boolean | undefined
}

export type ToastCloseProps<T extends ValidComponent | HTMLElement = HTMLElement> = ToastCloseOptions &
  Partial<ToastCloseCommonProps<ElementOf<T>>>

/**
 * Closes the toast when clicked.
 * Renders a `<button>` element.
 *
 * `aria-hidden` is set when the viewport is collapsed AND the button is not focused,
 * matching the base-ui behaviour that hides close buttons from screen readers in the stacked view.
 */
export function ToastClose<T extends ValidComponent = "button">(props: PolymorphicProps<T, ToastCloseProps<T>>) {
  const providerCtx = useToastProviderContext()
  const rootCtx = useToastRootContext()
  const local = props as ToastCloseProps

  const [hasFocus, setHasFocus] = createSignal(false)

  function handleClick(e: MouseEvent) {
    const handler = local.onClick as JSX.EventHandlerUnion<HTMLButtonElement, MouseEvent> | undefined
    if (typeof handler === "function") handler(e as Parameters<typeof handler>[0])
    providerCtx.close(rootCtx.toast().id)
  }

  const isHidden = () => !providerCtx.expanded() && !hasFocus()

  return (
    <Polymorphic
      as="button"
      type="button"
      data-type={rootCtx.toast().type}
      aria-hidden={isHidden() ? true : undefined}
      disabled={local.disabled}
      onClick={handleClick}
      onFocus={() => setHasFocus(true)}
      onBlur={() => setHasFocus(false)}
      {...(props as Record<string, unknown>)}
    />
  )
}
