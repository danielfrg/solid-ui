import { createEffect, createUniqueId, onCleanup, type JSX, type ValidComponent } from "solid-js"
import { type ElementOf, Polymorphic, type PolymorphicProps } from "../../polymorphic"
import { useToastRootContext } from "../root/toast-root-context"

export interface ToastTitleOptions {
  id?: string
}

export interface ToastTitleCommonProps<T extends HTMLElement = HTMLElement> {
  id?: string
  style?: JSX.CSSProperties | string
}

export interface ToastTitleRenderProps extends ToastTitleCommonProps {
  "data-type": string | undefined
}

export type ToastTitleProps<T extends ValidComponent | HTMLElement = HTMLElement> = ToastTitleOptions &
  Partial<ToastTitleCommonProps<ElementOf<T>>>

/**
 * A title that labels the toast. Registers its `id` for `aria-labelledby` on `Toast.Root`.
 * Falls back to `toast.title` when no children are provided.
 * Renders an `<h2>` element.
 */
export function ToastTitle<T extends ValidComponent = "h2">(props: PolymorphicProps<T, ToastTitleProps<T>>) {
  const ctx = useToastRootContext()
  const localProps = props as ToastTitleProps

  const id = localProps.id ?? `toast-title-${createUniqueId()}`

  const children = () => (localProps as Record<string, unknown>).children ?? ctx.toast().title
  const shouldRender = () => Boolean(children())

  createEffect(() => {
    if (!shouldRender()) return
    ctx.setTitleId(id)
    onCleanup(() => ctx.setTitleId(undefined))
  })

  if (!shouldRender()) return null

  return (
    <Polymorphic as="h2" id={id} data-type={ctx.toast().type} {...(props as Record<string, unknown>)}>
      {children()}
    </Polymorphic>
  )
}
