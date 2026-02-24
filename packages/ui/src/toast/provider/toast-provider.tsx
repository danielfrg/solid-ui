import { batch, createEffect, createMemo, createSignal, createUniqueId, onCleanup, type JSX } from "solid-js"
import { createStore, produce } from "solid-js/store"
import { contains, getActiveElement } from "../../utils"
import { isFocusVisible } from "../utils/focus-visible"
import { resolvePromiseOptions } from "../utils/resolve-promise-options"
import type { ToastManager, ToastManagerEvent } from "../create-toast-manager"
import type {
  ToastManagerAddOptions,
  ToastManagerPromiseOptions,
  ToastManagerUpdateOptions,
  ToastObject,
} from "../types"
import { ToastProviderContext, type ToastProviderContextValue } from "./toast-provider-context"

interface TimerInfo {
  timeoutId?: ReturnType<typeof setTimeout>
  start: number
  delay: number
  remaining: number
  callback: () => void
}

export interface ToastProviderProps {
  children?: JSX.Element
  /**
   * The default amount of time (in ms) before a toast is auto dismissed.
   * A value of `0` will prevent the toast from being dismissed automatically.
   * @default 5000
   */
  timeout?: number
  /**
   * The maximum number of toasts that can be displayed at once.
   * When the limit is reached, the oldest toast will be hidden with `data-limited`.
   * @default 3
   */
  limit?: number
  /**
   * A global manager for toasts created outside of the Solid component tree.
   */
  toastManager?: ToastManager
}

/**
 * Provides a context for creating and managing toasts.
 */
export function ToastProvider(props: ToastProviderProps) {
  const timeout = () => props.timeout ?? 5000
  const limit = () => props.limit ?? 3

  const [toastList, setToastList] = createStore<{ list: ToastObject<Record<string, unknown>>[] }>({ list: [] })
  const [hovering, setHovering] = createSignal(false)
  const [focused, setFocused] = createSignal(false)
  const [prevFocusElement, setPrevFocusElement] = createSignal<HTMLElement | null | undefined>(null)

  const hasDifferingHeights = createMemo(() => {
    const heights = toastList.list.map((t) => t.height).filter((h): h is number => h !== undefined && h !== 0)
    return heights.length > 0 && new Set(heights).size > 1
  })

  const refs: ToastProviderContextValue["refs"] = {
    viewportRef: null,
    windowFocusedRef: true,
  }

  const timers = new Map<string, TimerInfo>()
  let isPaused = false

  createEffect(() => {
    if (toastList.list.length === 0) {
      batch(() => {
        if (hovering()) setHovering(false)
        if (focused()) setFocused(false)
      })
    }
  })

  function handleFocusManagement(toastId: string) {
    const activeEl = getActiveElement(refs.viewportRef)
    if (!refs.viewportRef || !contains(refs.viewportRef, activeEl) || !isFocusVisible(activeEl)) {
      return
    }

    const currentIndex = toastList.list.findIndex((t) => t.id === toastId)
    let next: ToastObject<Record<string, unknown>> | null = null

    let idx = currentIndex + 1
    while (idx < toastList.list.length) {
      const candidate = toastList.list[idx]
      if (candidate && candidate.transitionStatus !== "ending") {
        next = candidate
        break
      }
      idx += 1
    }

    if (!next) {
      idx = currentIndex - 1
      while (idx >= 0) {
        const candidate = toastList.list[idx]
        if (candidate && candidate.transitionStatus !== "ending") {
          next = candidate
          break
        }
        idx -= 1
      }
    }

    if (next?.ref) {
      next.ref.focus()
    } else {
      prevFocusElement()?.focus({ preventScroll: true })
    }
  }

  function pauseTimers() {
    if (isPaused) return
    isPaused = true
    timers.forEach((timer) => {
      if (timer.timeoutId !== undefined) {
        clearTimeout(timer.timeoutId)
        const elapsed = Date.now() - timer.start
        const remaining = timer.delay - elapsed
        timer.remaining = remaining > 0 ? remaining : 0
        timer.timeoutId = undefined
      }
    })
  }

  function resumeTimers() {
    if (!isPaused) return
    isPaused = false
    timers.forEach((timer, id) => {
      const remaining = timer.remaining > 0 ? timer.remaining : timer.delay
      timer.remaining = remaining
      timer.timeoutId = setTimeout(() => {
        timers.delete(id)
        timer.callback()
      }, remaining)
      timer.start = Date.now()
    })
  }

  function scheduleTimer(id: string, delay: number, callback: () => void) {
    const shouldStart = refs.windowFocusedRef && !hovering() && !focused()
    const timeoutId = shouldStart
      ? setTimeout(() => {
          timers.delete(id)
          callback()
        }, delay)
      : undefined

    timers.set(id, {
      timeoutId,
      start: shouldStart ? Date.now() : 0,
      delay,
      remaining: delay,
      callback,
    })
  }

  function close(toastId: string) {
    batch(() => {
      setToastList(
        "list",
        produce((prev) => {
          for (const toast of prev) {
            if (toast.id === toastId) {
              toast.transitionStatus = "ending"
              toast.height = 0
            }
          }

          const active = prev.filter((t) => t.transitionStatus !== "ending")

          for (const toast of prev) {
            if (toast.transitionStatus !== "ending") {
              toast.limited = active.indexOf(toast) >= limit()
            }
          }
        }),
      )

      const timer = timers.get(toastId)
      if (timer?.timeoutId !== undefined) {
        clearTimeout(timer.timeoutId)
        timers.delete(toastId)
      }

      const toast = toastList.list.find((t) => t.id === toastId)
      toast?.onClose?.()

      handleFocusManagement(toastId)

      if (toastList.list.length === 1) {
        setHovering(false)
        setFocused(false)
      }
    })
  }

  function remove(toastId: string) {
    let onRemoveCallback: (() => void) | undefined
    setToastList("list", (prev) =>
      prev.filter((t) => {
        if (t.id === toastId) {
          onRemoveCallback = t.onRemove
          return false
        }
        return true
      }),
    )
    onRemoveCallback?.()
  }

  function add<Data extends object>(options: ToastManagerAddOptions<Data>): string {
    const id = options.id || `toast-${createUniqueId()}`
    const toast: ToastObject<Data> = {
      ...options,
      id,
      transitionStatus: "starting",
    }

    setToastList(
      "list",
      produce((prev) => {
        prev.unshift(toast as unknown as ToastObject<Record<string, unknown>>)
        const active = prev.filter((t) => t.transitionStatus !== "ending")

        if (active.length > limit()) {
          const excess = active.length - limit()
          const oldest = active.slice(-excess)
          for (const t of prev) {
            t.limited = oldest.some((o) => o.id === t.id)
          }
          return
        }

        for (const t of prev) {
          t.limited = false
        }
      }),
    )

    const duration = (options as ToastObject<Data>).timeout ?? timeout()
    if (options.type !== "loading" && duration > 0) {
      scheduleTimer(id, duration, () => close(id))
    }

    if (hovering() || focused() || !refs.windowFocusedRef) {
      pauseTimers()
    }

    return id
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function update(id: string, updates: ToastManagerUpdateOptions<any>) {
    setToastList(
      "list",
      produce((prev) => {
        const idx = prev.findIndex((t) => t.id === id)
        if (idx === -1) return
        const toast = prev[idx]
        if (!toast) return
        Object.assign(toast, updates)
      }),
    )
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function promise<Value>(
    promiseValue: Promise<Value>,
    options: ToastManagerPromiseOptions<Value, any>,
  ): Promise<Value> {
    const loadingOptions = resolvePromiseOptions<Value, Record<string, unknown>>(options.loading)
    const id = add({ ...loadingOptions, type: "loading" })

    const onSuccess = (result: Value) => {
      batch(() => {
        update(id, {
          ...resolvePromiseOptions<Value, Record<string, unknown>>(options.success, result),
          type: "success",
        })
        scheduleTimer(id, timeout(), () => close(id))
        if (hovering() || focused() || !refs.windowFocusedRef) {
          pauseTimers()
        }
      })
      return result
    }

    const onError = (error: unknown) => {
      batch(() => {
        const errOptions = resolvePromiseOptions<unknown, Record<string, unknown>>(
          options.error as string | ToastManagerUpdateOptions<Record<string, unknown>>,
          error,
        )
        update(id, { ...errOptions, type: "error" })
        scheduleTimer(id, timeout(), () => close(id))
        if (hovering() || focused() || !refs.windowFocusedRef) {
          pauseTimers()
        }
      })
      return Promise.reject(error)
    }

    const handledPromise = promiseValue.then(onSuccess).catch(onError)

    if (Object.prototype.hasOwnProperty.call(options as object, "setPromise")) {
      ;((options as unknown as Record<string, unknown>)["setPromise"] as (p: Promise<Value>) => void)(handledPromise)
    }

    return handledPromise
  }

  function onManagerEvent({ action, options }: ToastManagerEvent) {
    const opts = options as Record<string, unknown>
    const id = opts.id as string | undefined

    if (action === "promise" && opts.promise) {
      promise(
        opts.promise as Promise<unknown>,
        opts as unknown as ToastManagerPromiseOptions<unknown, Record<string, unknown>>,
      )
    } else if (action === "update" && id) {
      update(id, opts as ToastManagerUpdateOptions<Record<string, unknown>>)
    } else if (action === "close" && id) {
      close(id)
    } else {
      add(opts as ToastManagerAddOptions<Record<string, unknown>>)
    }
  }

  createEffect(() => {
    if (!props.toastManager) return
    const unsubscribe = props.toastManager[" subscribe"](onManagerEvent)
    onCleanup(unsubscribe)
  })

  const toasts = () => toastList.list

  const context: ToastProviderContextValue = {
    toasts,
    hovering,
    setHovering,
    focused,
    setFocused,
    expanded: () => hovering() || focused() || hasDifferingHeights(),
    add,
    update,
    promise,
    close,
    pauseTimers,
    resumeTimers,
    remove,
    prevFocusElement,
    setPrevFocusElement,
    scheduleTimer,
    hasDifferingHeights,
    refs,
  }

  return <ToastProviderContext.Provider value={context}>{props.children}</ToastProviderContext.Provider>
}
