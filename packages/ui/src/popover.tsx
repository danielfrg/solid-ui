import type { JSX } from "solid-js"
import { splitProps } from "solid-js"
import { Popover as PopoverPrimitive } from "@danielfrg/ui-core/popover"
import type { PopoverContentProps as CorePopoverContentProps } from "@danielfrg/ui-core/popover"
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

export { Popover, PopoverTrigger, PopoverContent }
export type { PopoverContentProps }
