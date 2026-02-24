import { mergeDefaultProps, mergeRefs } from "../utils"
import { type ValidComponent, createUniqueId, splitProps } from "solid-js"

import * as Link from "../link"
import { CompositeItem } from "../composite/composite-item"
import { type ElementOf, type PolymorphicProps } from "../polymorphic"
import { useToolbarContext } from "./toolbar-context"

export interface ToolbarLinkOptions extends Link.LinkRootOptions {
  /** Whether the link is disabled. */
  disabled?: boolean

  /** A unique identifier for the component. */
  id?: string
}

export interface ToolbarLinkCommonProps<T extends HTMLElement = HTMLElement> {
  ref: T | ((el: T) => void)
}

export interface ToolbarLinkRenderProps extends ToolbarLinkCommonProps, Link.LinkRootRenderProps {
  "data-orientation": "horizontal" | "vertical" | undefined
}

export type ToolbarLinkProps<T extends ValidComponent | HTMLElement = HTMLElement> = ToolbarLinkOptions &
  Partial<ToolbarLinkCommonProps<ElementOf<T>>>

/**
 * A toolbar link item.
 */
export function ToolbarLink<T extends ValidComponent = "a">(props: PolymorphicProps<T, ToolbarLinkProps<T>>) {
  let ref: HTMLElement | undefined

  const context = useToolbarContext()

  const defaultId = context.generateId(`link-${createUniqueId()}`)

  const mergedProps = mergeDefaultProps(
    {
      id: defaultId,
    },
    props as ToolbarLinkProps,
  )

  const [local, others] = splitProps(mergedProps, ["ref", "disabled"])

  const isDisabled = () => context.isDisabled() || local.disabled

  return (
    <CompositeItem
      as={Link.Root as ValidComponent}
      ref={mergeRefs((el) => (ref = el), local.ref)}
      disabled={isDisabled()}
      data-orientation={context.orientation()}
      {...others}
    />
  )
}
