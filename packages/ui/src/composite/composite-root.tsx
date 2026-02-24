/*
 * Adapted from Base UI's Composite component.
 * MIT Licensed, Copyright (c) MUI.
 *
 * A keyboard-navigable composite widget that manages focus across its items.
 * Supports horizontal, vertical, and grid navigation with loop focus, RTL,
 * and disabled item skipping.
 */

import { composeEventHandlers, mergeDefaultProps, mergeProps, mergeRefs } from "../utils"
import { type JSX, type ValidComponent, createSignal, splitProps } from "solid-js"

import { useLocale } from "../i18n"
import { type ElementOf, Polymorphic, type PolymorphicProps } from "../polymorphic"
import { CompositeContext, type CompositeContextValue } from "./composite-context"
import { CompositeListProvider, type CompositeListContextValue } from "./composite-list"

export interface CompositeRootOptions {
  /**
   * The orientation of the composite for keyboard navigation.
   * @default "both"
   */
  orientation?: "horizontal" | "vertical" | "both"

  /** Whether to loop focus from the last item back to the first (and vice versa). */
  loopFocus?: boolean

  /**
   * The controlled highlighted index.
   * When provided, the component is controlled.
   */
  highlightedIndex?: number

  /** Event handler called when the highlighted index changes. */
  onHighlightedIndexChange?: (index: number) => void

  /** Whether the composite is disabled. */
  disabled?: boolean

  /** Whether items should be highlighted on hover. */
  highlightItemOnHover?: boolean
}

export interface CompositeRootCommonProps<T extends HTMLElement = HTMLElement> {
  ref: T | ((el: T) => void)
  onKeyDown: JSX.EventHandlerUnion<T, KeyboardEvent>
}

export interface CompositeRootRenderProps extends CompositeRootCommonProps {
  role: "group" | "toolbar" | undefined
  "aria-orientation": "horizontal" | "vertical" | undefined
  "data-orientation": "horizontal" | "vertical" | undefined
  "data-disabled": string | undefined
}

export type CompositeRootProps<T extends ValidComponent | HTMLElement = HTMLElement> = CompositeRootOptions &
  Partial<CompositeRootCommonProps<ElementOf<T>>>

const ARROW_UP = "ArrowUp"
const ARROW_DOWN = "ArrowDown"
const ARROW_LEFT = "ArrowLeft"
const ARROW_RIGHT = "ArrowRight"
const HOME = "Home"
const END = "End"

function findNonDisabledIndex(
  elements: Array<HTMLElement | null>,
  startIndex: number,
  decrement: boolean,
  loop: boolean,
): number {
  const length = elements.length
  if (length === 0) return -1

  const step = decrement ? -1 : 1
  const iterations = loop ? length : decrement ? startIndex + 1 : length - startIndex

  for (let i = 0; i < iterations; i++) {
    const rawIndex = startIndex + step * i
    const index = ((rawIndex % length) + length) % length
    const el = elements[index]
    if (el && !el.hasAttribute("data-disabled") && !el.matches("[disabled]") && !el.getAttribute("aria-disabled")) {
      return index
    }
  }

  return -1
}

function getMinIndex(elements: Array<HTMLElement | null>): number {
  return findNonDisabledIndex(elements, 0, false, false)
}

function getMaxIndex(elements: Array<HTMLElement | null>): number {
  return findNonDisabledIndex(elements, elements.length - 1, true, false)
}

/**
 * A composite widget that provides keyboard navigation across its items.
 * Implements the WAI-ARIA composite pattern with roving tabindex.
 *
 * @example
 * ```tsx
 * <Composite.Root orientation="horizontal">
 *   <Composite.Item>Item 1</Composite.Item>
 *   <Composite.Item>Item 2</Composite.Item>
 *   <Composite.Item>Item 3</Composite.Item>
 * </Composite.Root>
 * ```
 */
export function CompositeRoot<T extends ValidComponent = "div">(props: PolymorphicProps<T, CompositeRootProps<T>>) {
  let ref: HTMLElement | undefined

  const mergedProps = mergeDefaultProps(
    {
      orientation: "both" as CompositeRootOptions["orientation"],
      loopFocus: true,
      highlightItemOnHover: false,
    },
    props as CompositeRootProps,
  )

  const [local, others] = splitProps(mergedProps, [
    "ref",
    "orientation",
    "loopFocus",
    "highlightedIndex",
    "onHighlightedIndexChange",
    "disabled",
    "highlightItemOnHover",
    "onKeyDown",
  ])

  const { direction } = useLocale()

  const [internalIndex, setInternalIndex] = createSignal(0)

  const highlightedIndex = () => local.highlightedIndex ?? internalIndex()
  const onHighlightedIndexChange = (index: number) => {
    if (local.onHighlightedIndexChange) {
      local.onHighlightedIndexChange(index)
    }
    setInternalIndex(index)
  }

  // The list context manages DOM-order tracking of items
  const elements: Array<HTMLElement | null> = []
  const listContext: CompositeListContextValue = {
    register: (node: HTMLElement, index: number) => {
      const existing = elements.indexOf(node)
      if (existing !== -1 && existing !== index) {
        elements[existing] = null
      }
      elements[index] = node
    },
    unregister: (node: HTMLElement) => {
      for (let i = 0; i < elements.length; i++) {
        if (elements[i] === node) {
          elements[i] = null
        }
      }
    },
    elements: () => elements,
    getNextIndex: () => elements.length,
  }

  const onKeyDown: JSX.EventHandlerUnion<HTMLElement, KeyboardEvent> = (e) => {
    const isRtl = direction() === "rtl"
    const orientation = local.orientation!
    const loop = local.loopFocus!

    const horizontalForwardKey = isRtl ? ARROW_LEFT : ARROW_RIGHT
    const horizontalBackwardKey = isRtl ? ARROW_RIGHT : ARROW_LEFT

    const forwardKeys: string[] =
      orientation === "horizontal"
        ? [horizontalForwardKey]
        : orientation === "vertical"
          ? [ARROW_DOWN]
          : [horizontalForwardKey, ARROW_DOWN]

    const backwardKeys: string[] =
      orientation === "horizontal"
        ? [horizontalBackwardKey]
        : orientation === "vertical"
          ? [ARROW_UP]
          : [horizontalBackwardKey, ARROW_UP]

    const allNavigationKeys = [...forwardKeys, ...backwardKeys, HOME, END]

    if (!allNavigationKeys.includes(e.key)) return

    // Don't navigate if a modifier key is held (except Shift for range selection)
    if (e.ctrlKey || e.altKey || e.metaKey) return

    const current = highlightedIndex()
    const minIndex = getMinIndex(elements)
    const maxIndex = getMaxIndex(elements)

    if (minIndex === -1) return

    let nextIndex = current

    if (e.key === HOME) {
      nextIndex = minIndex
    }

    if (e.key === END) {
      nextIndex = maxIndex
    }

    if (forwardKeys.includes(e.key)) {
      if (current >= maxIndex) {
        nextIndex = loop ? minIndex : current
      } else {
        nextIndex = findNonDisabledIndex(elements, current + 1, false, loop)
      }
    }

    if (backwardKeys.includes(e.key)) {
      if (current <= minIndex) {
        nextIndex = loop ? maxIndex : current
      } else {
        nextIndex = findNonDisabledIndex(elements, current - 1, true, loop)
      }
    }

    if (nextIndex !== current && nextIndex !== -1) {
      e.preventDefault()
      onHighlightedIndexChange(nextIndex)

      // Focus the new element
      queueMicrotask(() => {
        elements[nextIndex]?.focus()
      })
    }
  }

  const context: CompositeContextValue = {
    highlightedIndex,
    onHighlightedIndexChange,
    highlightItemOnHover: () => local.highlightItemOnHover!,
    orientation: () => local.orientation!,
    isDisabled: () => local.disabled ?? false,
  }

  const rootProps = mergeProps(
    {
      ref: mergeRefs((el) => (ref = el), local.ref),
      role: undefined,
      "aria-orientation": local.orientation === "both" ? undefined : local.orientation,
      "data-orientation": local.orientation === "both" ? undefined : local.orientation,
      "data-disabled": local.disabled ? "" : undefined,
      onKeyDown: composeEventHandlers([local.onKeyDown, onKeyDown]),
    },
    others,
  ) as unknown as CompositeRootRenderProps & typeof others

  return (
    <CompositeContext.Provider value={context}>
      <CompositeListProvider value={listContext}>
        <Polymorphic<CompositeRootRenderProps> as="div" {...rootProps} />
      </CompositeListProvider>
    </CompositeContext.Provider>
  )
}
