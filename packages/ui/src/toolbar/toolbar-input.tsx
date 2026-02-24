import { mergeDefaultProps, mergeRefs } from "../utils"
import { type JSX, type ValidComponent, createUniqueId, splitProps } from "solid-js"

import { CompositeItem } from "../composite/composite-item"
import { type ElementOf, type PolymorphicProps } from "../polymorphic"
import { useToolbarContext } from "./toolbar-context"

export interface ToolbarInputOptions {
  /** Whether the input is disabled. */
  disabled?: boolean

  /** The input type. */
  type?: string

  /** A unique identifier for the component. */
  id?: string
}

export interface ToolbarInputCommonProps<T extends HTMLElement = HTMLElement> {
  ref: T | ((el: T) => void)
  onInput: JSX.EventHandlerUnion<T, InputEvent>
}

export interface ToolbarInputRenderProps extends ToolbarInputCommonProps {
  "data-orientation": "horizontal" | "vertical" | undefined
}

export type ToolbarInputProps<T extends ValidComponent | HTMLElement = HTMLElement> = ToolbarInputOptions &
  Partial<ToolbarInputCommonProps<ElementOf<T>>>

/**
 * A toolbar input item.
 */
export function ToolbarInput<T extends ValidComponent = "input">(props: PolymorphicProps<T, ToolbarInputProps<T>>) {
  let ref: HTMLElement | undefined

  const context = useToolbarContext()

  const defaultId = context.generateId(`input-${createUniqueId()}`)

  const mergedProps = mergeDefaultProps(
    {
      id: defaultId,
      type: "text",
    },
    props as ToolbarInputProps,
  )

  const [local, others] = splitProps(mergedProps, ["ref", "disabled", "type"])

  const isDisabled = () => context.isDisabled() || local.disabled

  return (
    <CompositeItem
      as="input"
      ref={mergeRefs((el) => (ref = el), local.ref)}
      disabled={isDisabled()}
      type={local.type}
      data-orientation={context.orientation()}
      {...others}
    />
  )
}
