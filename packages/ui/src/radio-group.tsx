import type { Component, JSX } from "solid-js"
import { splitProps } from "solid-js"
import { RadioGroup as RadioGroupPrimitive } from "@danielfrg/solid-ui-core/radio-group"
import type {
  RadioGroupRootProps as CoreRadioGroupRootProps,
  RadioGroupItemProps as CoreRadioGroupItemProps,
} from "@danielfrg/solid-ui-core/radio-group"
import { cn } from "./utils"

type RadioGroupProps = CoreRadioGroupRootProps & {
  class?: string
  children?: JSX.Element
}

const RadioGroup: Component<RadioGroupProps> = (props) => {
  const [local, others] = splitProps(props, ["class"])

  return <RadioGroupPrimitive data-slot="radio-group" class={cn("grid gap-2", local.class)} {...others} />
}

type RadioGroupItemProps = CoreRadioGroupItemProps & {
  class?: string
  children?: JSX.Element
}

const RadioGroupItem: Component<RadioGroupItemProps> = (props) => {
  const [local, others] = splitProps(props, ["class", "children"])

  return (
    <RadioGroupPrimitive.Item
      data-slot="radio-group-item"
      class={cn("flex items-center space-x-2", local.class)}
      {...others}
    >
      <RadioGroupPrimitive.ItemInput class="peer" />
      <RadioGroupPrimitive.ItemControl
        class={cn(
          "aspect-square size-4 shrink-0 rounded-full border border-input dark:bg-input/30 shadow-xs transition-shadow outline-none",
          "peer-focus-visible:border-ring peer-focus-visible:ring-ring/50 peer-focus-visible:ring-[3px]",
          "data-[checked]:border-primary data-[checked]:text-primary",
          "data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        )}
      >
        <RadioGroupPrimitive.ItemIndicator class="flex h-full items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-2.5">
            <circle cx="12" cy="12" r="9" />
          </svg>
        </RadioGroupPrimitive.ItemIndicator>
      </RadioGroupPrimitive.ItemControl>
      {local.children}
    </RadioGroupPrimitive.Item>
  )
}

type RadioGroupItemLabelProps = { class?: string; children?: JSX.Element }

const RadioGroupItemLabel: Component<RadioGroupItemLabelProps> = (props) => {
  const [local, others] = splitProps(props, ["class"])

  return (
    <RadioGroupPrimitive.ItemLabel
      data-slot="radio-group-item-label"
      class={cn(
        "text-sm font-medium leading-none data-[disabled]:cursor-not-allowed data-[disabled]:opacity-70",
        local.class,
      )}
      {...others}
    />
  )
}

export { RadioGroup, RadioGroupItem, RadioGroupItemLabel }
export type { RadioGroupProps, RadioGroupItemProps, RadioGroupItemLabelProps }
