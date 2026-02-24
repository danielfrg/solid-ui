import { type Orientation, createGenerateId, mergeDefaultProps, mergeRefs } from "../utils"
import { type JSX, type ValidComponent, createUniqueId, splitProps } from "solid-js"

import { CompositeRoot } from "../composite/composite-root"
import { type ElementOf, type PolymorphicProps } from "../polymorphic"
import { ToolbarContext, type ToolbarContextValue } from "./toolbar-context"

export interface ToolbarRootOptions {
  /**
   * A unique identifier for the component.
   * The id is used to generate id attributes for nested components.
   */
  id?: string

  /** The orientation of the toolbar. */
  orientation?: Orientation

  /** Whether the toolbar should loop focus from last to first. */
  loopFocus?: boolean

  /** The controlled highlighted index of the toolbar items. */
  highlightedIndex?: number

  /** Event handler called when the highlighted index changes. */
  onHighlightedIndexChange?: (index: number) => void

  /** Whether items should be highlighted on hover. */
  highlightItemOnHover?: boolean

  /** Whether the toolbar is disabled. */
  disabled?: boolean
}

export interface ToolbarRootCommonProps<T extends HTMLElement = HTMLElement> {
  id: string
  ref: T | ((el: T) => void)
  onKeyDown: JSX.EventHandlerUnion<T, KeyboardEvent>
}

export interface ToolbarRootRenderProps extends ToolbarRootCommonProps {
  role: "toolbar"
  "data-orientation": Orientation | undefined
  "data-disabled": string | undefined
}

export type ToolbarRootProps<T extends ValidComponent | HTMLElement = HTMLElement> = ToolbarRootOptions &
  Partial<ToolbarRootCommonProps<ElementOf<T>>>

/**
 * A toolbar is a grouping container for related controls with roving focus.
 */
export function ToolbarRoot<T extends ValidComponent = "div">(props: PolymorphicProps<T, ToolbarRootProps<T>>) {
  let ref: HTMLElement | undefined

  const defaultId = `toolbar-${createUniqueId()}`

  const mergedProps = mergeDefaultProps(
    {
      id: defaultId,
      orientation: "horizontal" as Orientation,
      loopFocus: true,
      highlightItemOnHover: false,
    },
    props as ToolbarRootProps,
  )

  const [local, others] = splitProps(mergedProps, [
    "id",
    "ref",
    "orientation",
    "loopFocus",
    "highlightedIndex",
    "onHighlightedIndexChange",
    "highlightItemOnHover",
    "disabled",
    "onKeyDown",
  ])

  const context: ToolbarContextValue = {
    isDisabled: () => local.disabled ?? false,
    orientation: () => local.orientation!,
    generateId: createGenerateId(() => local.id!),
  }

  return (
    <ToolbarContext.Provider value={context}>
      <CompositeRoot
        ref={mergeRefs((el) => (ref = el), local.ref)}
        role="toolbar"
        orientation={local.orientation === "horizontal" ? "horizontal" : "vertical"}
        loopFocus={local.loopFocus}
        highlightedIndex={local.highlightedIndex}
        onHighlightedIndexChange={local.onHighlightedIndexChange}
        highlightItemOnHover={local.highlightItemOnHover}
        disabled={local.disabled}
        onKeyDown={local.onKeyDown}
        data-orientation={local.orientation}
        data-disabled={local.disabled ? "" : undefined}
        {...(others as { id: string })}
      />
    </ToolbarContext.Provider>
  )
}
