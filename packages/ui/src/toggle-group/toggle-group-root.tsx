import { type Component, type ValidComponent, createMemo, splitProps } from "solid-js"

import { mergeProps } from "../utils"
import type { PolymorphicProps } from "../polymorphic"
import { ToggleGroupBase, type ToggleGroupBaseOptions, type ToggleGroupBaseRenderProps } from "./toggle-group-base"

export interface ToggleGroupSingleOptions {
  /** The controlled value of the toggle group. */
  value?: string | null

  /**
   * The value of the select when initially rendered.
   * Useful when you do not need to control the value.
   */
  defaultValue?: string

  /** Event handler called when the value changes. */
  onChange?: (value: string | null) => void

  /** Whether the toggle group allow multiple selection. */
  multiple?: false
}

export interface ToggleGroupMultipleOptions {
  /** The controlled value of the toggle group select. */
  value?: string[]

  /**
   * The value of the select when initially rendered.
   * Useful when you do not need to control the value.
   */
  defaultValue?: string[]

  /** Event handler called when the value changes. */
  onChange?: (value: string[]) => void

  /** Whether the toggle group allow multiple selection. */
  multiple: true
}

export type ToggleGroupRootOptions = (ToggleGroupSingleOptions | ToggleGroupMultipleOptions) &
  Omit<ToggleGroupBaseOptions, "value" | "defaultValue" | "onChange" | "selectionMode">

export interface ToggleGroupRootCommonProps {}

export interface ToggleGroupRootRenderProps extends ToggleGroupRootCommonProps {}

export type ToggleGroupRootProps = ToggleGroupRootOptions & Partial<ToggleGroupRootCommonProps>

export function ToggleGroup<T extends ValidComponent = "div">(props: PolymorphicProps<T, ToggleGroupRootProps>) {
  const [local, others] = splitProps(props as ToggleGroupRootProps, ["value", "defaultValue", "onChange", "multiple"])

  const value = createMemo(() => {
    if (local.value != null) {
      return local.multiple ? local.value : [local.value]
    }

    return local.value
  })

  const defaultValue = createMemo(() => {
    if (local.defaultValue != null) {
      return local.multiple ? local.defaultValue : [local.defaultValue]
    }

    return local.defaultValue
  })

  const onChange = (value: string[]) => {
    if (local.multiple) {
      local.onChange?.(value as any)
    } else {
      // use `null` as "no value" because `undefined` mean the component is "uncontrolled".
      local.onChange?.((value[0] ?? null) as any)
    }
  }

  const rootProps = mergeProps(
    {
      get value() {
        return value() as any
      },
      get defaultValue() {
        return defaultValue() as any
      },
      onChange: onChange,
      get selectionMode() {
        return local.multiple ? "multiple" : "single"
      },
    },
    others,
  ) as unknown as ToggleGroupRootRenderProps & typeof others

  return (
    <ToggleGroupBase<Component<Omit<ToggleGroupRootRenderProps, keyof ToggleGroupBaseRenderProps>>> {...rootProps} />
  )
}
