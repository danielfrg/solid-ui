import type { Component, ComponentProps, JSX } from "solid-js"
import { splitProps } from "solid-js"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "./utils"

const alertVariants = cva(
  "relative w-full rounded-lg border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current",
  {
    variants: {
      variant: {
        default: "bg-card text-card-foreground",
        destructive:
          "text-destructive bg-card [&>svg]:text-current *:data-[slot=alert-description]:text-destructive/90",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
)

type AlertProps = ComponentProps<"div"> &
  VariantProps<typeof alertVariants> & {
    class?: string
    children?: JSX.Element
  }

const Alert: Component<AlertProps> = (props) => {
  const [local, others] = splitProps(props, ["variant", "class"])

  return (
    <div
      data-slot="alert"
      role="alert"
      data-variant={local.variant ?? "default"}
      class={cn(alertVariants({ variant: local.variant }), local.class)}
      {...others}
    />
  )
}

type AlertTitleProps = ComponentProps<"div"> & { class?: string; children?: JSX.Element }

const AlertTitle: Component<AlertTitleProps> = (props) => {
  const [local, others] = splitProps(props, ["class"])
  return (
    <div
      data-slot="alert-title"
      class={cn("col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight", local.class)}
      {...others}
    />
  )
}

type AlertDescriptionProps = ComponentProps<"div"> & { class?: string; children?: JSX.Element }

const AlertDescription: Component<AlertDescriptionProps> = (props) => {
  const [local, others] = splitProps(props, ["class"])
  return (
    <div
      data-slot="alert-description"
      class={cn(
        "text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed",
        local.class,
      )}
      {...others}
    />
  )
}

type AlertActionProps = ComponentProps<"div"> & { class?: string; children?: JSX.Element }

const AlertAction: Component<AlertActionProps> = (props) => {
  const [local, others] = splitProps(props, ["class"])
  return (
    <div
      data-slot="alert-action"
      class={cn("col-start-2 row-start-1 flex items-start justify-end self-start", local.class)}
      {...others}
    />
  )
}

export { Alert, AlertTitle, AlertDescription, AlertAction, alertVariants }
export type { AlertProps, AlertTitleProps, AlertDescriptionProps, AlertActionProps }
