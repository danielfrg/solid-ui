import { mergeDefaultProps } from "../utils"
import { type ValidComponent, splitProps } from "solid-js"

import * as Separator from "../separator"
import { type ElementOf, type PolymorphicProps } from "../polymorphic"
import { useToolbarContext } from "./toolbar-context"

export interface ToolbarSeparatorOptions extends Separator.SeparatorRootOptions {}

export interface ToolbarSeparatorCommonProps<
  T extends HTMLElement = HTMLElement,
> extends Separator.SeparatorRootCommonProps<T> {}

export interface ToolbarSeparatorRenderProps extends Separator.SeparatorRootRenderProps {}

export type ToolbarSeparatorProps<T extends ValidComponent | HTMLElement = HTMLElement> = ToolbarSeparatorOptions &
  Partial<ToolbarSeparatorCommonProps<ElementOf<T>>>

/**
 * A visual separator between toolbar items.
 */
export function ToolbarSeparator<T extends ValidComponent = "hr">(
  props: PolymorphicProps<T, ToolbarSeparatorProps<T>>,
) {
  const context = useToolbarContext()

  const mergedProps = mergeDefaultProps(
    {
      orientation: context.orientation() === "horizontal" ? "vertical" : "horizontal",
    },
    props as ToolbarSeparatorProps,
  )

  const [local, others] = splitProps(mergedProps, ["orientation"])

  return <Separator.Root orientation={local.orientation} {...others} />
}
