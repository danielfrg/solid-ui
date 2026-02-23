import type { Component, JSX } from "solid-js"
import { splitProps } from "solid-js"
import { Popover as PopoverPrimitive } from "@danielfrg/solid-ui-core/popover"
import type { PopoverContentProps as CorePopoverContentProps } from "@danielfrg/solid-ui-core/popover"
import { cn } from "./utils"

// Re-export Root and Trigger directly to preserve polymorphic `as` prop typing
const Popover = PopoverPrimitive
const PopoverTrigger = PopoverPrimitive.Trigger

type PopoverContentProps = CorePopoverContentProps & {
  class?: string
  children?: JSX.Element
}

function PopoverContent(props: PopoverContentProps) {
  const [local, others] = splitProps(props, ["class"])

  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        data-slot="popover-content"
        class={cn(
          "z-50 w-72 origin-[var(--kb-popover-content-transform-origin)] rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[expanded]:animate-in data-[closed]:animate-out data-[closed]:fade-out-0 data-[expanded]:fade-in-0 data-[closed]:zoom-out-95 data-[expanded]:zoom-in-95",
          local.class,
        )}
        {...others}
      />
    </PopoverPrimitive.Portal>
  )
}

type PopoverHeaderProps = {
  class?: string
  children?: JSX.Element
}

const PopoverHeader: Component<PopoverHeaderProps> = (props) => {
  const [local, others] = splitProps(props, ["class"])

  return <div data-slot="popover-header" class={cn("flex flex-col space-y-1.5", local.class)} {...others} />
}

type PopoverTitleProps = {
  class?: string
  children?: JSX.Element
}

const PopoverTitle: Component<PopoverTitleProps> = (props) => {
  const [local, others] = splitProps(props, ["class"])

  return <h4 data-slot="popover-title" class={cn("text-sm font-semibold leading-none", local.class)} {...others} />
}

type PopoverDescriptionProps = {
  class?: string
  children?: JSX.Element
}

const PopoverDescription: Component<PopoverDescriptionProps> = (props) => {
  const [local, others] = splitProps(props, ["class"])

  return <p data-slot="popover-description" class={cn("text-muted-foreground text-xs", local.class)} {...others} />
}

export { Popover, PopoverTrigger, PopoverContent, PopoverHeader, PopoverTitle, PopoverDescription }
export type { PopoverContentProps, PopoverHeaderProps, PopoverTitleProps, PopoverDescriptionProps }
