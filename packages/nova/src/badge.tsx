import type { Component, ComponentProps, JSX } from "solid-js"
import { splitProps } from "solid-js"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@danielfrg/solid-ui/utils"

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full border border-transparent px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground",
        secondary: "bg-secondary text-secondary-foreground",
        destructive:
          "bg-destructive/10 text-destructive focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/20",
        outline: "border-border text-foreground",
        ghost: "hover:bg-muted hover:text-muted-foreground dark:hover:bg-muted/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
)

type BadgeProps = ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & {
    class?: string
    children?: JSX.Element
  }

const Badge: Component<BadgeProps> = (props) => {
  const [local, others] = splitProps(props, ["variant", "class"])

  return (
    <span
      data-slot="badge"
      data-variant={local.variant ?? "default"}
      class={cn(badgeVariants({ variant: local.variant }), local.class)}
      {...others}
    />
  )
}

export { Badge, badgeVariants }
export type { BadgeProps }
