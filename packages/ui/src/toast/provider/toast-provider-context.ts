import { createContext, useContext, type Accessor } from "solid-js"
import type {
  ToastManagerAddOptions,
  ToastManagerPromiseOptions,
  ToastManagerUpdateOptions,
  ToastObject,
} from "../types"

export interface ToastProviderContextValue {
  toasts: Accessor<ToastObject<Record<string, unknown>>[]>
  hovering: Accessor<boolean>
  setHovering: (value: boolean) => void
  focused: Accessor<boolean>
  setFocused: (value: boolean) => void
  expanded: Accessor<boolean>
  add: <Data extends object>(options: ToastManagerAddOptions<Data>) => string
  update: <Data extends object>(id: string, options: ToastManagerUpdateOptions<Data>) => void
  promise: <Value, Data extends object>(
    value: Promise<Value>,
    options: ToastManagerPromiseOptions<Value, Data>,
  ) => Promise<Value>
  close: (id: string) => void
  pauseTimers: () => void
  resumeTimers: () => void
  remove: (id: string) => void
  prevFocusElement: Accessor<HTMLElement | null | undefined>
  setPrevFocusElement: (el: HTMLElement | null | undefined) => void
  scheduleTimer: (id: string, delay: number, callback: () => void) => void
  hasDifferingHeights: Accessor<boolean>
  refs: {
    viewportRef: HTMLElement | null | undefined
    windowFocusedRef: boolean
  }
}

export const ToastProviderContext = createContext<ToastProviderContextValue | undefined>(undefined)

export function useToastProviderContext(): ToastProviderContextValue {
  const context = useContext(ToastProviderContext)
  if (!context) {
    throw new Error("[solid-ui]: Toast parts must be used within <Toast.Provider>.")
  }
  return context
}
