import type { ToastManagerUpdateOptions } from "../types"

export function resolvePromiseOptions<T, Data extends object>(
  options: string | ToastManagerUpdateOptions<Data> | ((result: T) => string | ToastManagerUpdateOptions<Data>),
  result?: T,
): ToastManagerUpdateOptions<Data> {
  if (typeof options === "string") {
    return { description: options } as ToastManagerUpdateOptions<Data>
  }

  if (typeof options === "function") {
    const resolved = options(result as T)
    return typeof resolved === "string" ? ({ description: resolved } as ToastManagerUpdateOptions<Data>) : resolved
  }

  return options
}
