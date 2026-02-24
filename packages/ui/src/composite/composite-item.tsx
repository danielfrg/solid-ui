/*
 * Adapted from Base UI's Composite component.
 * MIT Licensed, Copyright (c) MUI.
 *
 * An item within a Composite widget. Registers itself with the composite list
 * and handles focus management via roving tabindex.
 */

import { mergeRefs } from "../utils"
import { type JSX, type ValidComponent, createMemo, onCleanup, onMount, splitProps } from "solid-js"

import { type ElementOf, Polymorphic, type PolymorphicProps } from "../polymorphic"
import { useCompositeContext } from "./composite-context"
import { useCompositeListContext } from "./composite-list"

export interface CompositeItemOptions {
  /** Whether the item is disabled. */
  disabled?: boolean
}

export interface CompositeItemCommonProps<T extends HTMLElement = HTMLElement> {
  ref: T | ((el: T) => void)
  disabled: boolean | undefined
  tabIndex: number | undefined
  onFocus: JSX.EventHandlerUnion<T, FocusEvent>
  onPointerEnter: JSX.EventHandlerUnion<T, PointerEvent>
}

export interface CompositeItemRenderProps extends CompositeItemCommonProps {
  "data-disabled": string | undefined
  "data-highlighted": string | undefined
}

export type CompositeItemProps<T extends ValidComponent | HTMLElement = HTMLElement> = CompositeItemOptions &
  Partial<CompositeItemCommonProps<ElementOf<T>>>

/**
 * An individual item within a composite widget.
 * Handles roving tabindex and focus management.
 *
 * @example
 * ```tsx
 * <Composite.Root>
 *   <Composite.Item>Item 1</Composite.Item>
 *   <Composite.Item disabled>Item 2 (disabled)</Composite.Item>
 * </Composite.Root>
 * ```
 */
export function CompositeItem<T extends ValidComponent = "div">(props: PolymorphicProps<T, CompositeItemProps<T>>) {
  let ref: HTMLElement | undefined
  let itemIndex = -1

  const context = useCompositeContext()
  const listContext = useCompositeListContext()

  const [local, others] = splitProps(props as CompositeItemProps, [
    "ref",
    "disabled",
    "tabIndex",
    "onFocus",
    "onPointerEnter",
  ])

  onMount(() => {
    if (!ref) return

    itemIndex = listContext.getNextIndex()
    listContext.register(ref, itemIndex)

    // Re-sort items by DOM position after all items have registered
    queueMicrotask(() => {
      const elements = listContext.elements()
      const connected = elements.filter((el): el is HTMLElement => el !== null && el.isConnected)

      // Sort by DOM position and update indices
      const sorted = connected.slice().sort((a, b) => {
        const position = a.compareDocumentPosition(b)
        if (position & Node.DOCUMENT_POSITION_FOLLOWING || position & Node.DOCUMENT_POSITION_CONTAINED_BY) return -1
        if (position & Node.DOCUMENT_POSITION_PRECEDING || position & Node.DOCUMENT_POSITION_CONTAINS) return 1
        return 0
      })

      sorted.forEach((el, i) => {
        listContext.register(el, i)
      })

      // Update this item's index
      if (ref) {
        itemIndex = sorted.indexOf(ref)
      }
    })
  })

  onCleanup(() => {
    if (ref) {
      listContext.unregister(ref)
    }
  })

  const isHighlighted = createMemo(() => {
    return context.highlightedIndex() === itemIndex
  })

  const onFocus: JSX.EventHandlerUnion<HTMLElement, FocusEvent> = (e) => {
    if (typeof local.onFocus === "function") {
      local.onFocus(e as FocusEvent & { currentTarget: HTMLElement; target: Element })
    }

    if (!local.disabled) {
      // Update index from DOM position when focused (in case of re-ordering)
      const elements = listContext.elements()
      const idx = elements.indexOf(ref ?? null)
      if (idx !== -1) {
        itemIndex = idx
        context.onHighlightedIndexChange(idx)
      }
    }
  }

  const onPointerEnter: JSX.EventHandlerUnion<HTMLElement, PointerEvent> = (e) => {
    if (typeof local.onPointerEnter === "function") {
      local.onPointerEnter(e as PointerEvent & { currentTarget: HTMLElement; target: Element })
    }

    if (context.highlightItemOnHover() && !local.disabled) {
      const elements = listContext.elements()
      const idx = elements.indexOf(ref ?? null)
      if (idx !== -1) {
        itemIndex = idx
        context.onHighlightedIndexChange(idx)
        ref?.focus()
      }
    }
  }

  return (
    <Polymorphic<CompositeItemRenderProps>
      as="div"
      ref={mergeRefs((el) => (ref = el), local.ref)}
      disabled={local.disabled}
      tabIndex={local.disabled ? undefined : isHighlighted() ? 0 : -1}
      data-disabled={local.disabled ? "" : undefined}
      data-highlighted={isHighlighted() ? "" : undefined}
      onFocus={onFocus}
      onPointerEnter={onPointerEnter}
      {...others}
    />
  )
}
