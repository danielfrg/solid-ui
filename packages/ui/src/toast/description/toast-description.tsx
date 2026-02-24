import { createEffect, createUniqueId, onCleanup, type JSX, type ValidComponent } from "solid-js"
import { type ElementOf, Polymorphic, type PolymorphicProps } from "../../polymorphic"
import { useToastRootContext } from "../root/toast-root-context"

export interface ToastDescriptionOptions {
  id?: string
}

export interface ToastDescriptionCommonProps<T extends HTMLElement = HTMLElement> {
  id?: string
  style?: JSX.CSSProperties | string
}

export interface ToastDescriptionRenderProps extends ToastDescriptionCommonProps {
  "data-type": string | undefined
}

export type ToastDescriptionProps<T extends ValidComponent | HTMLElement = HTMLElement> = ToastDescriptionOptions &
  Partial<ToastDescriptionCommonProps<ElementOf<T>>>

/**
 * A description that describes the toast. Registers its `id` for `aria-describedby` on `Toast.Root`.
 * Falls back to `toast.description` when no children are provided.
 * Renders a `<p>` element.
 */
export function ToastDescription<T extends ValidComponent = "p">(props: PolymorphicProps<T, ToastDescriptionProps<T>>) {
  const ctx = useToastRootContext()
  const localProps = props as ToastDescriptionProps

  const id = localProps.id ?? `toast-desc-${createUniqueId()}`

  const children = () => (localProps as Record<string, unknown>).children ?? ctx.toast().description
  const shouldRender = () => Boolean(children())

  createEffect(() => {
    if (!shouldRender()) return
    ctx.setDescriptionId(id)
    onCleanup(() => ctx.setDescriptionId(undefined))
  })

  if (!shouldRender()) return null

  return (
    <Polymorphic as="p" id={id} data-type={ctx.toast().type} {...(props as Record<string, unknown>)}>
      {children()}
    </Polymorphic>
  )
}
