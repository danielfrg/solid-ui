import { type Accessor, createContext, useContext } from "solid-js"

export interface CompositeContextValue {
  /** The index of the currently highlighted item. */
  highlightedIndex: Accessor<number>

  /** Callback to change the highlighted index. */
  onHighlightedIndexChange: (index: number) => void

  /** Whether items should be highlighted on hover. */
  highlightItemOnHover: Accessor<boolean>

  /** The orientation of the composite. */
  orientation: Accessor<"horizontal" | "vertical" | "both">

  /** Whether the composite is disabled. */
  isDisabled: Accessor<boolean>
}

export const CompositeContext = createContext<CompositeContextValue>()

export function useCompositeContext() {
  const context = useContext(CompositeContext)

  if (context === undefined) {
    throw new Error("[solid-ui]: `useCompositeContext` must be used within a `Composite` component")
  }

  return context
}
