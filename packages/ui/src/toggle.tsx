import type { Component, JSX } from "solid-js"
import { splitProps } from "solid-js"
import { cva, type VariantProps } from "class-variance-authority"
import { ToggleButton as TogglePrimitive } from "@danielfrg/solid-ui-core/toggle-button"
import type { ToggleButtonRootProps } from "@danielfrg/solid-ui-core/toggle-button"
import { cn } from "./utils"

const toggleVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive whitespace-nowrap",
  {
    variants: {
      variant: {
        default:
          "bg-transparent hover:bg-muted hover:text-muted-foreground data-[pressed]:bg-accent data-[pressed]:text-accent-foreground",
        outline:
          "border border-input bg-transparent shadow-xs hover:bg-accent hover:text-accent-foreground data-[pressed]:bg-accent data-[pressed]:text-accent-foreground",
      },
      size: {
        default: "h-9 px-2 min-w-9",
        sm: "h-8 px-1.5 min-w-8",
        lg: "h-10 px-2.5 min-w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

type ToggleProps = ToggleButtonRootProps &
  VariantProps<typeof toggleVariants> & {
    class?: string
    children?: JSX.Element
  }

const Toggle: Component<ToggleProps> = (props) => {
  const [local, others] = splitProps(props, ["variant", "size", "class"])

  return (
    <TogglePrimitive
      data-slot="toggle"
      data-variant={local.variant ?? "default"}
      data-size={local.size ?? "default"}
      class={cn(toggleVariants({ variant: local.variant, size: local.size }), local.class)}
      {...others}
    />
  )
}

export { Toggle, toggleVariants }
export type { ToggleProps }
