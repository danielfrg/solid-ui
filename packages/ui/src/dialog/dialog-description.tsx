import { mergeDefaultProps } from "../utils"
import { type ValidComponent, createEffect, onCleanup, splitProps } from "solid-js"

import { Polymorphic, type PolymorphicProps } from "../polymorphic"
import { useDialogContext } from "./dialog-context"

export interface DialogDescriptionOptions {}

export interface DialogDescriptionCommonProps {
  id: string
}

export interface DialogDescriptionRenderProps extends DialogDescriptionCommonProps {}

export type DialogDescriptionProps<T extends ValidComponent | HTMLElement = HTMLElement> = DialogDescriptionOptions &
  Partial<DialogDescriptionCommonProps>

/**
 * An optional accessible description to be announced when the dialog is open.
 */
export function DialogDescription<T extends ValidComponent = "p">(
  props: PolymorphicProps<T, DialogDescriptionProps<T>>,
) {
  const context = useDialogContext()

  const mergedProps = mergeDefaultProps(
    {
      id: context.generateId("description"),
    },
    props as DialogDescriptionProps,
  )

  const [local, others] = splitProps(mergedProps, ["id"])

  createEffect(() => onCleanup(context.registerDescriptionId(local.id!)))

  return <Polymorphic<DialogDescriptionRenderProps> as="p" id={local.id} {...others} />
}
