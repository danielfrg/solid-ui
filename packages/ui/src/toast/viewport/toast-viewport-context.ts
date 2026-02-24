import { createContext, useContext } from "solid-js"

export interface ToastViewportContextValue {
  refs: {
    viewportRef: HTMLElement | null | undefined
  }
}

export const ToastViewportContext = createContext<ToastViewportContextValue | undefined>(undefined)

export function useToastViewportContext(): ToastViewportContextValue {
  const context = useContext(ToastViewportContext)
  if (!context) {
    throw new Error("[solid-ui]: Toast parts must be placed within <Toast.Viewport>.")
  }
  return context
}
