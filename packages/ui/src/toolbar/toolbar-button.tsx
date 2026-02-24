import { mergeDefaultProps, mergeRefs } from "../utils"
import { type ValidComponent, createUniqueId, splitProps } from "solid-js"

import * as Button from "../button"
import { CompositeItem } from "../composite/composite-item"
import { type ElementOf, type PolymorphicProps } from "../polymorphic"
import { useToolbarContext } from "./toolbar-context"

export interface ToolbarButtonOptions extends Button.ButtonRootOptions {
  /** Whether the button is disabled. */
  disabled?: boolean

  /** A unique identifier for the component. */
  id?: string
}

export interface ToolbarButtonCommonProps<T extends HTMLElement = HTMLElement> {
  ref: T | ((el: T) => void)
}

export interface ToolbarButtonRenderProps extends ToolbarButtonCommonProps, Button.ButtonRootRenderProps {
  "data-orientation": "horizontal" | "vertical" | undefined
}

export type ToolbarButtonProps<T extends ValidComponent | HTMLElement = HTMLElement> = ToolbarButtonOptions &
  Partial<ToolbarButtonCommonProps<ElementOf<T>>>

/**
 * A toolbar button item.
 */
export function ToolbarButton<T extends ValidComponent = "button">(props: PolymorphicProps<T, ToolbarButtonProps<T>>) {
  let ref: HTMLElement | undefined

  const context = useToolbarContext()

  const defaultId = context.generateId(`button-${createUniqueId()}`)

  const mergedProps = mergeDefaultProps(
    {
      id: defaultId,
    },
    props as ToolbarButtonProps,
  )

  const [local, others] = splitProps(mergedProps, ["ref", "disabled"])

  const isDisabled = () => context.isDisabled() || local.disabled

  return (
    <CompositeItem
      as={Button.Root as ValidComponent}
      ref={mergeRefs((el) => (ref = el), local.ref)}
      disabled={isDisabled()}
      data-orientation={context.orientation()}
      {...others}
    />
  )
}
