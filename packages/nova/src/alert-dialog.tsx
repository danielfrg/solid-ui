import type { Component, JSX } from "solid-js"
import { splitProps } from "solid-js"
import { AlertDialog as AlertDialogPrimitive } from "@danielfrg/solid-ui/alert-dialog"
import type {
  AlertDialogRootProps as CoreAlertDialogRootProps,
  AlertDialogContentProps as CoreAlertDialogContentProps,
  AlertDialogOverlayProps as CoreAlertDialogOverlayProps,
  AlertDialogTitleProps as CoreAlertDialogTitleProps,
  AlertDialogDescriptionProps as CoreAlertDialogDescriptionProps,
  AlertDialogCloseButtonProps as CoreAlertDialogCloseButtonProps,
} from "@danielfrg/solid-ui/alert-dialog"
import { cn } from "@danielfrg/solid-ui/utils"

// Re-export Root and Trigger directly to preserve polymorphic `as` prop typing
const AlertDialog = AlertDialogPrimitive
const AlertDialogTrigger = AlertDialogPrimitive.Trigger

type AlertDialogOverlayProps = CoreAlertDialogOverlayProps & {
  class?: string
}

const AlertDialogOverlay: Component<AlertDialogOverlayProps> = (props) => {
  const [local, others] = splitProps(props, ["class"])

  return (
    <AlertDialogPrimitive.Overlay
      data-slot="alert-dialog-overlay"
      class={cn(
        "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[expanded]:animate-in data-[closed]:animate-out data-[closed]:fade-out-0 data-[expanded]:fade-in-0",
        local.class,
      )}
      {...others}
    />
  )
}

type AlertDialogContentProps = CoreAlertDialogContentProps & {
  class?: string
  children?: JSX.Element
  size?: "default" | "sm"
}

const AlertDialogContent: Component<AlertDialogContentProps> = (props) => {
  const [local, others] = splitProps(props, ["class", "children", "size"])

  return (
    <AlertDialogPrimitive.Portal>
      <AlertDialogOverlay />
      <AlertDialogPrimitive.Content
        data-slot="alert-dialog-content"
        data-size={local.size ?? "default"}
        class={cn(
          "group/alert-dialog-content fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 border bg-background p-6 shadow-lg duration-200 outline-none data-[expanded]:animate-in data-[closed]:animate-out data-[closed]:fade-out-0 data-[expanded]:fade-in-0 data-[closed]:zoom-out-95 data-[expanded]:zoom-in-95 sm:rounded-lg md:w-full",
          local.class,
        )}
        {...others}
      >
        {local.children}
      </AlertDialogPrimitive.Content>
    </AlertDialogPrimitive.Portal>
  )
}

type AlertDialogHeaderProps = {
  class?: string
  children?: JSX.Element
}

const AlertDialogHeader: Component<AlertDialogHeaderProps> = (props) => {
  const [local, others] = splitProps(props, ["class"])

  return (
    <div
      data-slot="alert-dialog-header"
      class={cn("flex flex-col gap-2 text-center sm:text-left", local.class)}
      {...others}
    />
  )
}

type AlertDialogFooterProps = {
  class?: string
  children?: JSX.Element
}

const AlertDialogFooter: Component<AlertDialogFooterProps> = (props) => {
  const [local, others] = splitProps(props, ["class"])

  return (
    <div
      data-slot="alert-dialog-footer"
      class={cn(
        "flex flex-col-reverse gap-2 group-data-[size=sm]/alert-dialog-content:grid group-data-[size=sm]/alert-dialog-content:grid-cols-2 sm:flex-row sm:justify-end",
        local.class,
      )}
      {...others}
    />
  )
}

type AlertDialogTitleProps = CoreAlertDialogTitleProps & {
  class?: string
  children?: JSX.Element
}

const AlertDialogTitle: Component<AlertDialogTitleProps> = (props) => {
  const [local, others] = splitProps(props, ["class"])

  return (
    <AlertDialogPrimitive.Title
      data-slot="alert-dialog-title"
      class={cn("text-lg font-semibold", local.class)}
      {...others}
    />
  )
}

type AlertDialogDescriptionProps = CoreAlertDialogDescriptionProps & {
  class?: string
  children?: JSX.Element
}

const AlertDialogDescription: Component<AlertDialogDescriptionProps> = (props) => {
  const [local, others] = splitProps(props, ["class"])

  return (
    <AlertDialogPrimitive.Description
      data-slot="alert-dialog-description"
      class={cn("text-muted-foreground text-sm", local.class)}
      {...others}
    />
  )
}

type AlertDialogActionProps = CoreAlertDialogCloseButtonProps & {
  class?: string
  children?: JSX.Element
  variant?: "default" | "destructive"
}

const AlertDialogAction: Component<AlertDialogActionProps> = (props) => {
  const [local, others] = splitProps(props, ["class", "variant"])

  const variantClasses = () => {
    if (local.variant === "destructive") {
      return "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40"
    }
    return "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90"
  }

  return (
    <AlertDialogPrimitive.CloseButton
      data-slot="alert-dialog-action"
      class={cn(
        "inline-flex h-9 items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors focus-visible:ring-ring/50 focus-visible:ring-[3px] focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
        variantClasses(),
        local.class,
      )}
      {...others}
    />
  )
}

type AlertDialogCancelProps = CoreAlertDialogCloseButtonProps & {
  class?: string
  children?: JSX.Element
  variant?: "default" | "ghost"
}

const AlertDialogCancel: Component<AlertDialogCancelProps> = (props) => {
  const [local, others] = splitProps(props, ["class", "variant"])

  const variantClasses = () => {
    if (local.variant === "ghost") {
      return "hover:bg-accent hover:text-accent-foreground"
    }
    return "border-input bg-background shadow-xs hover:bg-accent hover:text-accent-foreground border"
  }

  return (
    <AlertDialogPrimitive.CloseButton
      data-slot="alert-dialog-cancel"
      class={cn(
        "inline-flex h-9 items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors focus-visible:ring-ring/50 focus-visible:ring-[3px] focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
        variantClasses(),
        local.class,
      )}
      {...others}
    />
  )
}

type AlertDialogMediaProps = {
  class?: string
  children?: JSX.Element
}

const AlertDialogMedia: Component<AlertDialogMediaProps> = (props) => {
  const [local, others] = splitProps(props, ["class"])

  return (
    <div
      data-slot="alert-dialog-media"
      class={cn("mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-muted", local.class)}
      {...others}
    />
  )
}

export {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogOverlay,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogMedia,
}
export type {
  AlertDialogContentProps,
  AlertDialogHeaderProps,
  AlertDialogFooterProps,
  AlertDialogTitleProps,
  AlertDialogDescriptionProps,
  AlertDialogOverlayProps,
  AlertDialogActionProps,
  AlertDialogCancelProps,
}
