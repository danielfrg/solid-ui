import { type JSX, Show, type ValidComponent } from "solid-js"
import { type ElementOf, Polymorphic, type PolymorphicProps } from "../../polymorphic"
import { useToastRootContext } from "../root/toast-root-context"

export interface ToastActionOptions {}

export interface ToastActionCommonProps<T extends HTMLElement = HTMLElement> {
  onClick?: JSX.EventHandlerUnion<T, MouseEvent>
  disabled?: boolean
  style?: JSX.CSSProperties | string
}

export interface ToastActionRenderProps extends ToastActionCommonProps {
  "data-type": string | undefined
}

export type ToastActionProps<T extends ValidComponent | HTMLElement = HTMLElement> = ToastActionOptions &
  Partial<ToastActionCommonProps<ElementOf<T>>>

/**
 * Performs an action when clicked.
 * Reads `actionProps` from the toast object and merges with user-passed props.
 * Returns `null` when there is nothing to render.
 * Renders a `<button>` element.
 */
export function ToastAction<T extends ValidComponent = "button">(props: PolymorphicProps<T, ToastActionProps<T>>) {
  const ctx = useToastRootContext()
  const local = props as ToastActionProps

  const toastActionProps = () => ctx.toast().actionProps as JSX.HTMLAttributes<HTMLButtonElement> | undefined

  const computedChildren = () => (local as Record<string, unknown>).children ?? toastActionProps()?.children

  const shouldRender = () => Boolean(computedChildren())

  return (
    <Show when={shouldRender()}>
      <Polymorphic
        as="button"
        type="button"
        data-type={ctx.toast().type}
        disabled={local.disabled}
        {...(toastActionProps() as Record<string, unknown>)}
        {...(props as Record<string, unknown>)}
      >
        {computedChildren()}
      </Polymorphic>
    </Show>
  )
}
