import { mergeDefaultProps, mergeRefs } from "../utils"
import { type ValidComponent, splitProps } from "solid-js"

import { type ElementOf, Polymorphic, type PolymorphicProps } from "../polymorphic"
import { useToolbarContext } from "./toolbar-context"

export interface ToolbarGroupOptions {
  /** Whether the toolbar group is disabled. */
  disabled?: boolean
}

export interface ToolbarGroupCommonProps<T extends HTMLElement = HTMLElement> {
  ref: T | ((el: T) => void)
}

export interface ToolbarGroupRenderProps extends ToolbarGroupCommonProps {
  role: "group"
  "data-orientation": "horizontal" | "vertical" | undefined
  "data-disabled": string | undefined
}

export type ToolbarGroupProps<T extends ValidComponent | HTMLElement = HTMLElement> = ToolbarGroupOptions &
  Partial<ToolbarGroupCommonProps<ElementOf<T>>>

/**
 * Groups related toolbar items.
 */
export function ToolbarGroup<T extends ValidComponent = "div">(props: PolymorphicProps<T, ToolbarGroupProps<T>>) {
  let ref: HTMLElement | undefined

  const context = useToolbarContext()

  const mergedProps = mergeDefaultProps({}, props as ToolbarGroupProps)

  const [local, others] = splitProps(mergedProps, ["ref", "disabled"])

  const isDisabled = () => context.isDisabled() || local.disabled

  return (
    <Polymorphic<ToolbarGroupRenderProps>
      as="div"
      ref={mergeRefs((el) => (ref = el), local.ref)}
      role="group"
      data-orientation={context.orientation()}
      data-disabled={isDisabled() ? "" : undefined}
      {...others}
    />
  )
}
