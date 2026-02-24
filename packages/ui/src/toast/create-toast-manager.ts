import { createUniqueId } from "solid-js"
import type { ToastManagerAddOptions, ToastManagerPromiseOptions, ToastManagerUpdateOptions } from "./types"

export interface ToastManagerEvent {
  action: "add" | "close" | "update" | "promise"
  options: Record<string, unknown>
}

export interface ToastManager {
  /** @private — Used by ToastProvider to receive events. */
  " subscribe": (listener: (data: ToastManagerEvent) => void) => () => void
  add: <Data extends object>(options: ToastManagerAddOptions<Data>) => string
  close: (id: string) => void
  update: <Data extends object>(id: string, updates: ToastManagerUpdateOptions<Data>) => void
  promise: <Value, Data extends object>(
    promiseValue: Promise<Value>,
    options: ToastManagerPromiseOptions<Value, Data>,
  ) => Promise<Value>
}

/**
 * Creates a new out-of-component toast manager. Pass the returned object to
 * `<Toast.Provider toastManager={manager}>` to bridge events from outside the
 * Solid component tree (e.g. server actions, route loaders).
 */
export function createToastManager(): ToastManager {
  const listeners: ((data: ToastManagerEvent) => void)[] = []

  function emit(data: ToastManagerEvent) {
    for (const listener of listeners) {
      listener(data)
    }
  }

  return {
    // This should be private aside from ToastProvider needing to access it.
    // https://x.com/drosenwasser/status/1816947740032872664
    " subscribe"(listener: (data: ToastManagerEvent) => void) {
      listeners.push(listener)
      return () => {
        const index = listeners.indexOf(listener)
        if (index !== -1) {
          listeners.splice(index, 1)
        }
      }
    },

    add<Data extends object>(options: ToastManagerAddOptions<Data>): string {
      const id = options.id || `toast-${createUniqueId()}`
      emit({ action: "add", options: { ...options, id, transitionStatus: "starting" } })
      return id
    },

    close(id: string) {
      emit({ action: "close", options: { id } })
    },

    update<Data extends object>(id: string, updates: ToastManagerUpdateOptions<Data>) {
      emit({ action: "update", options: { ...updates, id } })
    },

    promise<Value, Data extends object>(
      promiseValue: Promise<Value>,
      options: ToastManagerPromiseOptions<Value, Data>,
    ): Promise<Value> {
      let handledPromise = promiseValue

      emit({
        action: "promise",
        options: {
          ...options,
          promise: promiseValue,
          setPromise(p: Promise<Value>) {
            handledPromise = p
          },
        },
      })

      return handledPromise
    },
  }
}
