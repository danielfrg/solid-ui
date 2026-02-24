import type { ClassValue } from "clsx"
import { type ComponentProps, type ValidComponent, type JSX, mergeProps as mergeSolidProps } from "solid-js"

import { cn } from "./cn"
import { composeEventHandlers } from "./events"
import { mergeRefs } from "./external"

/**
 * Allows for extending a set of props (`Source`) by an overriding set of props (`Override`),
 * ensuring that any duplicates are overridden by the overriding set of props.
 */
export type OverrideProps<Source = {}, Override = {}> = Omit<Source, keyof Override> & Override

/**
 * Allows for extending a set of `ComponentProps` by an overriding set of props,
 * ensuring that any duplicates are overridden by the overriding set of props.
 */
export type OverrideComponentProps<T extends ValidComponent, P> = OverrideProps<ComponentProps<T>, P>

export function mergeDefaultProps<T extends {}, D extends Partial<T>>(defaultProps: D, props: T): OverrideProps<T, D> {
  return mergeSolidProps(defaultProps, props) as OverrideProps<T, D>
}

type UnknownProps = Record<string, unknown>

function isEventHandlerKey(key: string) {
  return key.startsWith("on") && key[2] === key[2]?.toUpperCase()
}

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value)
}

function mergeStyles(a: unknown, b: unknown) {
  if (isPlainObject(a) && isPlainObject(b)) {
    return { ...a, ...b }
  }

  if (typeof a === "string" && typeof b === "string") {
    return [a, b].filter(Boolean).join(";")
  }

  return b ?? a
}

function mergeClassList(a: unknown, b: unknown) {
  if (isPlainObject(a) && isPlainObject(b)) {
    return { ...a, ...b }
  }

  return b ?? a
}

export function mergeProps<T extends UnknownProps[]>(...propsList: T) {
  if (propsList.length === 0) return {} as UnknownProps

  const eventKeys = new Set<string>()
  let hasClass = false
  let hasClassName = false
  let hasClassList = false
  let hasStyle = false
  let hasRef = false

  for (const props of propsList) {
    if (!props) continue

    for (const key of Object.keys(props)) {
      if (key === "class") hasClass = true
      if (key === "className") hasClassName = true
      if (key === "classList") hasClassList = true
      if (key === "style") hasStyle = true
      if (key === "ref") hasRef = true
      if (isEventHandlerKey(key)) eventKeys.add(key)
    }
  }

  const mergedOverrides: UnknownProps = {}

  if (hasClass) {
    Object.defineProperty(mergedOverrides, "class", {
      enumerable: true,
      get() {
        let result: unknown

        for (const props of propsList) {
          if (!props) continue
          const value = props["class"] as ClassValue | undefined

          if (value === undefined) continue
          result = result ? cn(result as ClassValue, value) : value
        }

        return result
      },
    })
  }

  if (hasClassName) {
    Object.defineProperty(mergedOverrides, "className", {
      enumerable: true,
      get() {
        let result: unknown

        for (const props of propsList) {
          if (!props) continue
          const value = props["className"] as ClassValue | undefined

          if (value === undefined) continue
          result = result ? cn(result as ClassValue, value) : value
        }

        return result
      },
    })
  }

  if (hasClassList) {
    Object.defineProperty(mergedOverrides, "classList", {
      enumerable: true,
      get() {
        let result: unknown

        for (const props of propsList) {
          if (!props) continue
          const value = props["classList"]

          if (value === undefined) continue
          result = mergeClassList(result, value)
        }

        return result
      },
    })
  }

  if (hasStyle) {
    Object.defineProperty(mergedOverrides, "style", {
      enumerable: true,
      get() {
        let result: unknown

        for (const props of propsList) {
          if (!props) continue
          const value = props["style"]

          if (value === undefined) continue
          result = mergeStyles(result, value)
        }

        return result
      },
    })
  }

  if (hasRef) {
    Object.defineProperty(mergedOverrides, "ref", {
      enumerable: true,
      get() {
        const refs: Array<unknown> = []

        for (const props of propsList) {
          if (!props) continue
          const value = props["ref"]

          if (value === undefined) continue
          refs.push(value)
        }

        if (refs.length === 0) return undefined
        if (refs.length === 1) return refs[0]
        return mergeRefs(...refs)
      },
    })
  }

  if (eventKeys.size > 0) {
    for (const key of eventKeys) {
      Object.defineProperty(mergedOverrides, key, {
        enumerable: true,
        get() {
          const handlers: Array<JSX.EventHandlerUnion<any, any>> = []

          for (const props of propsList) {
            if (!props) continue
            const value = props[key] as JSX.EventHandlerUnion<any, any> | undefined

            if (value === undefined) continue
            handlers.push(value)
          }

          if (handlers.length === 0) return undefined
          if (handlers.length === 1) return handlers[0]
          return composeEventHandlers(handlers)
        },
      })
    }
  }

  return mergeSolidProps(...propsList, mergedOverrides) as UnknownProps
}
