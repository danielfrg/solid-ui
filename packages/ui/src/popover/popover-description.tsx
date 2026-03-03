import { mergeDefaultProps } from "../utils"
import { type ValidComponent, createEffect, onCleanup, splitProps } from "solid-js"

import { Polymorphic, type PolymorphicProps } from "../polymorphic"
import { type PopoverDataSet, usePopoverContext } from "./popover-context"

export interface PopoverDescriptionOptions {}

export interface PopoverDescriptionCommonProps {
  id: string
}

export interface PopoverDescriptionRenderProps extends PopoverDescriptionCommonProps, PopoverDataSet {}

export type PopoverDescriptionProps = PopoverDescriptionOptions & Partial<PopoverDescriptionCommonProps>

export function PopoverDescription<T extends ValidComponent = "p">(
  props: PolymorphicProps<T, PopoverDescriptionProps>,
) {
  const context = usePopoverContext()

  const mergedProps = mergeDefaultProps(
    {
      id: context.generateId("description"),
    },
    props as PopoverDescriptionProps,
  )

  const [local, others] = splitProps(mergedProps, ["id"])

  createEffect(() => onCleanup(context.registerDescriptionId(local.id)))

  return <Polymorphic<PopoverDescriptionRenderProps> as="p" id={local.id} {...context.dataset()} {...others} />
}
