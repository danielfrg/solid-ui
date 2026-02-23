import type { Component, JSX } from "solid-js"
import { splitProps } from "solid-js"
import { Dialog as DialogPrimitive } from "@danielfrg/solid-ui-core/dialog"
import type {
  DialogRootProps as CoreDialogRootProps,
  DialogContentProps as CoreDialogContentProps,
  DialogOverlayProps as CoreDialogOverlayProps,
  DialogTitleProps as CoreDialogTitleProps,
  DialogDescriptionProps as CoreDialogDescriptionProps,
  DialogCloseButtonProps as CoreDialogCloseButtonProps,
  DialogPortalProps as CoreDialogPortalProps,
} from "@danielfrg/solid-ui-core/dialog"
import { cn } from "./utils"

// Re-export Root and Trigger directly to preserve polymorphic `as` prop typing
const Dialog = DialogPrimitive
const DialogTrigger = DialogPrimitive.Trigger

const DialogPortal: Component<CoreDialogPortalProps> = (props) => {
  const [, rest] = splitProps(props, ["children"])

  return (
    <DialogPrimitive.Portal {...rest}>
      <div class="fixed inset-0 z-50 flex items-start justify-center sm:items-center">{props.children}</div>
    </DialogPrimitive.Portal>
  )
}

type DialogOverlayProps = CoreDialogOverlayProps & {
  class?: string
}

const DialogOverlay: Component<DialogOverlayProps> = (props) => {
  const [local, others] = splitProps(props, ["class"])

  return (
    <DialogPrimitive.Overlay
      data-slot="dialog-overlay"
      class={cn(
        "fixed inset-0 z-50 bg-background/80 data-[expanded]:animate-in data-[closed]:animate-out data-[closed]:fade-out-0 data-[expanded]:fade-in-0",
        local.class,
      )}
      {...others}
    />
  )
}

type DialogContentProps = CoreDialogContentProps & {
  class?: string
  children?: JSX.Element
  showCloseButton?: boolean
}

const DialogContent: Component<DialogContentProps> = (props) => {
  const [local, others] = splitProps(props, ["class", "children", "showCloseButton"])

  return (
    <DialogPortal>
      <DialogOverlay />
      <DialogPrimitive.Content
        data-slot="dialog-content"
        class={cn(
          "fixed left-1/2 top-1/2 z-50 grid max-h-screen w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 overflow-y-auto border bg-background p-6 shadow-lg duration-200 data-[expanded]:animate-in data-[closed]:animate-out data-[closed]:fade-out-0 data-[expanded]:fade-in-0 data-[closed]:zoom-out-95 data-[expanded]:zoom-in-95 sm:rounded-lg",
          local.class,
        )}
        {...others}
      >
        {local.children}
        {(local.showCloseButton ?? true) && (
          <DialogPrimitive.CloseButton
            data-slot="dialog-close"
            class="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[expanded]:bg-accent data-[expanded]:text-muted-foreground"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="size-4"
            >
              <path d="M18 6l-12 12" />
              <path d="M6 6l12 12" />
            </svg>
            <span class="sr-only">Close</span>
          </DialogPrimitive.CloseButton>
        )}
      </DialogPrimitive.Content>
    </DialogPortal>
  )
}

type DialogHeaderProps = {
  class?: string
  children?: JSX.Element
}

const DialogHeader: Component<DialogHeaderProps> = (props) => {
  const [local, others] = splitProps(props, ["class"])

  return (
    <div
      data-slot="dialog-header"
      class={cn("flex flex-col space-y-1.5 text-center sm:text-left", local.class)}
      {...others}
    />
  )
}

type DialogFooterProps = {
  class?: string
  children?: JSX.Element
}

const DialogFooter: Component<DialogFooterProps> = (props) => {
  const [local, others] = splitProps(props, ["class"])

  return (
    <div
      data-slot="dialog-footer"
      class={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", local.class)}
      {...others}
    />
  )
}

type DialogTitleProps = CoreDialogTitleProps & {
  class?: string
  children?: JSX.Element
}

const DialogTitle: Component<DialogTitleProps> = (props) => {
  const [local, others] = splitProps(props, ["class"])

  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      class={cn("text-lg font-semibold leading-none tracking-tight", local.class)}
      {...others}
    />
  )
}

type DialogDescriptionProps = CoreDialogDescriptionProps & {
  class?: string
  children?: JSX.Element
}

const DialogDescription: Component<DialogDescriptionProps> = (props) => {
  const [local, others] = splitProps(props, ["class"])

  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      class={cn("text-sm text-muted-foreground", local.class)}
      {...others}
    />
  )
}

type DialogCloseProps = CoreDialogCloseButtonProps & {
  class?: string
  children?: JSX.Element
}

const DialogClose: Component<DialogCloseProps> = (props) => {
  return <DialogPrimitive.CloseButton data-slot="dialog-close" {...props} />
}

export {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogOverlay,
  DialogClose,
}
export type {
  DialogContentProps,
  DialogHeaderProps,
  DialogFooterProps,
  DialogTitleProps,
  DialogDescriptionProps,
  DialogOverlayProps,
  DialogCloseProps,
}
