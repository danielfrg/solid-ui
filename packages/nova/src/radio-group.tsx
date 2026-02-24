import type { Component, JSX } from "solid-js"
import { splitProps } from "solid-js"
import { RadioGroup as RadioGroupPrimitive } from "@danielfrg/solid-ui/radio-group"
import type {
  RadioGroupRootProps as CoreRadioGroupRootProps,
  RadioGroupItemProps as CoreRadioGroupItemProps,
} from "@danielfrg/solid-ui/radio-group"
import { cn } from "@danielfrg/solid-ui/utils"

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
  const ariaInvalid = () => (others as any)["aria-invalid"]

  return (
    <RadioGroupPrimitive.Item
      data-slot="radio-group-item"
      as="label"
      class={cn("group flex cursor-pointer items-center gap-2", local.class)}
      {...others}
    >
      <RadioGroupPrimitive.ItemInput class="peer" />
      <RadioGroupPrimitive.ItemControl
        aria-invalid={ariaInvalid()}
        class={cn(
          "relative flex size-4 shrink-0 items-center justify-center rounded-full border border-input dark:bg-input/30",
          "peer-focus-visible:border-ring peer-focus-visible:ring-ring/50 peer-focus-visible:ring-3",
          "data-[checked]:bg-primary data-[checked]:text-primary-foreground data-[checked]:border-primary",
          "dark:data-[checked]:bg-primary",
          "aria-invalid:border-destructive aria-invalid:shadow-[0_0_0_3px] aria-invalid:shadow-destructive/20 dark:aria-invalid:shadow-destructive/40",
          "dark:aria-invalid:border-destructive/50",
          "data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50",
        )}
      >
        <RadioGroupPrimitive.ItemIndicator class="absolute left-1/2 top-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-foreground" />
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
        "text-sm font-medium leading-snug data-[disabled]:cursor-not-allowed data-[disabled]:opacity-70",
        "group-aria-invalid:text-destructive",
        local.class,
      )}
      {...others}
    />
  )
}

export { RadioGroup, RadioGroupItem, RadioGroupItemLabel }
export type { RadioGroupProps, RadioGroupItemProps, RadioGroupItemLabelProps }
