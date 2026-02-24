import { createContext, useContext, type ParentProps } from "solid-js"

export interface CompositeListContextValue {
  /** Register an item element at a given index. */
  register: (node: HTMLElement, index: number) => void

  /** Unregister an item element. */
  unregister: (node: HTMLElement) => void

  /** Get the current list of registered elements. */
  elements: () => Array<HTMLElement | null>

  /** Get the next available index for a new item. */
  getNextIndex: () => number
}

export const CompositeListContext = createContext<CompositeListContextValue>()

export function useCompositeListContext() {
  const context = useContext(CompositeListContext)

  if (context === undefined) {
    throw new Error("[solid-ui]: `useCompositeListContext` must be used within a `Composite.Root` component")
  }

  return context
}

/**
 * Internal provider for the composite list context.
 */
export function CompositeListProvider(props: ParentProps<{ value: CompositeListContextValue }>) {
  return <CompositeListContext.Provider value={props.value}>{props.children}</CompositeListContext.Provider>
}
