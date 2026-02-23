import type { Component, ComponentProps, JSX } from "solid-js"
import { splitProps } from "solid-js"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "./utils"

const alertVariants = cva(
  "group/alert grid gap-0.5 rounded-lg border px-2.5 py-2 text-left text-sm has-data-[slot=alert-action]:relative has-data-[slot=alert-action]:pr-18 has-[>svg]:grid-cols-[auto_1fr] has-[>svg]:gap-x-2 *:[svg]:row-span-2 *:[svg]:translate-y-0.5 *:[svg]:text-current *:[svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-card text-card-foreground",
        destructive:
          "text-destructive bg-card *:data-[slot=alert-description]:text-destructive/90 *:[svg]:text-current",
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
      class={cn(
        "font-medium group-has-[>svg]/alert:col-start-2 [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground",
        local.class,
      )}
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
        "text-muted-foreground text-sm text-balance md:text-pretty [&_p:not(:last-child)]:mb-4 [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground",
        local.class,
      )}
      {...others}
    />
  )
}

type AlertActionProps = ComponentProps<"div"> & { class?: string; children?: JSX.Element }

const AlertAction: Component<AlertActionProps> = (props) => {
  const [local, others] = splitProps(props, ["class"])
  return <div data-slot="alert-action" class={cn("absolute top-2 right-2", local.class)} {...others} />
}

export { Alert, AlertTitle, AlertDescription, AlertAction, alertVariants }
export type { AlertProps, AlertTitleProps, AlertDescriptionProps, AlertActionProps }
