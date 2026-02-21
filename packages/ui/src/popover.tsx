import { splitProps } from "solid-js"
import { Popover as PopoverPrimitive } from "@danielfrg/ui-core/popover"
import type { PopoverContentProps as CorePopoverContentProps } from "@danielfrg/ui-core/popover"
import { cn } from "./utils"

// Re-export Root and Trigger directly to preserve polymorphic `as` prop typing
const Popover = PopoverPrimitive
const PopoverTrigger = PopoverPrimitive.Trigger

type PopoverContentProps = CorePopoverContentProps & {
  class?: string
}

function PopoverContent(props: PopoverContentProps) {
  const [local, others] = splitProps(props, ["class"])

  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        data-slot="popover-content"
        class={cn(
          "bg-popover text-popover-foreground z-50 w-72 origin-[var(--kb-popover-content-transform-origin)] rounded-md border p-4 shadow-md outline-hidden",
          local.class,
        )}
        {...others}
      />
    </PopoverPrimitive.Portal>
  )
}

export { Popover, PopoverTrigger, PopoverContent }
export type { PopoverContentProps }
