import { createContext, useContext, type Accessor } from "solid-js"
import type { ToastObject } from "../types"

export interface ToastRootContextValue {
  toast: Accessor<ToastObject<Record<string, unknown>>>
  refs: {
    rootRef: HTMLElement | null | undefined
  }
  titleId: Accessor<string | undefined>
  setTitleId: (id: string | undefined) => void
  descriptionId: Accessor<string | undefined>
  setDescriptionId: (id: string | undefined) => void
  swiping: Accessor<boolean>
  swipeDirection: Accessor<"up" | "down" | "left" | "right" | undefined>
  index: Accessor<number>
  visibleIndex: Accessor<number>
  expanded: Accessor<boolean>
  recalculateHeight: (flushSync?: boolean) => void
}

export const ToastRootContext = createContext<ToastRootContextValue | undefined>(undefined)

export function useToastRootContext(): ToastRootContextValue {
  const context = useContext(ToastRootContext)
  if (!context) {
    throw new Error("[solid-ui]: Toast sub-parts must be used within <Toast.Root>.")
  }
  return context
}
