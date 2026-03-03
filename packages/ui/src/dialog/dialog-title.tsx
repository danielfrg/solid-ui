import { mergeDefaultProps } from "../utils"
import { type ValidComponent, createEffect, onCleanup, splitProps } from "solid-js"

import { Polymorphic, type PolymorphicProps } from "../polymorphic"
import { useDialogContext } from "./dialog-context"

export interface DialogTitleOptions {}

export interface DialogTitleCommonProps {
  id: string
}

export interface DialogTitleRenderProps extends DialogTitleCommonProps {}

export type DialogTitleProps<T extends ValidComponent | HTMLElement = HTMLElement> = DialogTitleOptions &
  Partial<DialogTitleCommonProps>

/**
 * An accessible title to be announced when the dialog is open.
 */
export function DialogTitle<T extends ValidComponent = "h2">(props: PolymorphicProps<T, DialogTitleProps<T>>) {
  const context = useDialogContext()

  const mergedProps = mergeDefaultProps(
    {
      id: context.generateId("title"),
    },
    props as DialogTitleProps,
  )

  const [local, others] = splitProps(mergedProps, ["id"])

  createEffect(() => onCleanup(context.registerTitleId(local.id)))

  return <Polymorphic<DialogTitleRenderProps> as="h2" id={local.id} {...others} />
}
