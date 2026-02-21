import type { JSX } from "solid-js"
import { splitProps } from "solid-js"
import { Tooltip as TooltipPrimitive } from "@danielfrg/ui-core/tooltip"
import type { TooltipContentProps as CoreTooltipContentProps } from "@danielfrg/ui-core/tooltip"
import { cn } from "./utils"

// Re-export Root and Trigger directly to preserve polymorphic `as` prop typing
const Tooltip = TooltipPrimitive
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
          "bg-foreground text-background z-50 w-fit origin-[var(--kb-popover-content-transform-origin)] rounded-md px-3 py-1.5 text-xs text-balance",
          local.class,
        )}
        {...others}
      >
        {local.children}
        <TooltipPrimitive.Arrow class="fill-foreground" />
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  )
}

export { Tooltip, TooltipTrigger, TooltipContent }
export type { TooltipContentProps }
