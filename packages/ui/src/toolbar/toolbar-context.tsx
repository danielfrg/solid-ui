import { type Accessor, createContext, useContext } from "solid-js"

import type { Orientation } from "../utils"

export interface ToolbarContextValue {
  isDisabled: Accessor<boolean>
  orientation: Accessor<Orientation>
  generateId: (part: string) => string
}

export const ToolbarContext = createContext<ToolbarContextValue>()

export function useToolbarContext() {
  const context = useContext(ToolbarContext)

  if (context === undefined) {
    throw new Error("[solid-ui]: `useToolbarContext` must be used within a `Toolbar` component")
  }

  return context
}
