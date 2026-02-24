import type { JSX } from "solid-js"
import { splitProps } from "solid-js"
import { Tooltip as TooltipPrimitive } from "@danielfrg/solid-ui/tooltip"
import type { TooltipContentProps as CoreTooltipContentProps } from "@danielfrg/solid-ui/tooltip"
import { cn } from "@danielfrg/solid-ui/utils"

// Re-export Root and Trigger directly to preserve polymorphic `as` prop typing
const Tooltip = (props: any) => <TooltipPrimitive gutter={4} {...props} />
const TooltipTrigger = TooltipPrimitive.Trigger

type TooltipContentProps = CoreTooltipContentProps & {
  class?: string
  children?: JSX.Element
}

function TooltipContent(props: TooltipContentProps) {
  const [local, others] = splitProps(props, ["class", "children"])

  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        data-slot="tooltip-content"
        class={cn(
          "z-50 origin-[var(--kb-popover-content-transform-origin)] overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95",
          local.class,
        )}
        {...others}
      >
        {local.children}
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  )
}

export { Tooltip, TooltipTrigger, TooltipContent }
export type { TooltipContentProps }
