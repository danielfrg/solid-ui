import { useContext, type Accessor } from "solid-js"
import { ToastProviderContext } from "./provider/toast-provider-context"
import type {
  ToastManagerAddOptions,
  ToastManagerPromiseOptions,
  ToastManagerUpdateOptions,
  ToastObject,
} from "./types"

export interface UseToastManagerReturnValue {
  toasts: Accessor<ToastObject<Record<string, unknown>>[]>
  add: <Data extends object>(options: ToastManagerAddOptions<Data>) => string
  close: (toastId: string) => void
  update: <Data extends object>(toastId: string, options: ToastManagerUpdateOptions<Data>) => void
  promise: <Value, Data extends object>(
    promise: Promise<Value>,
    options: ToastManagerPromiseOptions<Value, Data>,
  ) => Promise<Value>
}

/**
 * Returns the array of toasts and methods to manage them.
 * Must be used inside `<Toast.Provider>`.
 */
export function useToastManager(): UseToastManagerReturnValue {
  const context = useContext(ToastProviderContext)

  if (!context) {
    throw new Error("Base UI: useToastManager must be used within <Toast.Provider>.")
  }

  const { toasts, add, close, update, promise } = context

  return {
    toasts,
    add,
    close,
    update,
    promise,
  }
}
