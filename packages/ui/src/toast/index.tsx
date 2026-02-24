// ---- Sub-components ----
export { ToastProvider } from "./provider/toast-provider"
export type { ToastProviderProps } from "./provider/toast-provider"

export { ToastViewport } from "./viewport/toast-viewport"
export type { ToastViewportOptions, ToastViewportProps, ToastViewportRenderProps } from "./viewport/toast-viewport"

export { ToastRoot } from "./root/toast-root"
export type { ToastRootOptions, ToastRootProps } from "./root/toast-root"

export { ToastContent } from "./content/toast-content"
export type { ToastContentOptions, ToastContentProps } from "./content/toast-content"

export { ToastTitle } from "./title/toast-title"
export type { ToastTitleOptions, ToastTitleProps } from "./title/toast-title"

export { ToastDescription } from "./description/toast-description"
export type { ToastDescriptionOptions, ToastDescriptionProps } from "./description/toast-description"

export { ToastClose } from "./close/toast-close"
export type { ToastCloseOptions, ToastCloseProps } from "./close/toast-close"

export { ToastAction } from "./action/toast-action"
export type { ToastActionOptions, ToastActionProps } from "./action/toast-action"

export { ToastPortal } from "./portal/toast-portal"
export type { ToastPortalProps } from "./portal/toast-portal"

// ---- Hooks & manager ----
export { useToastManager } from "./use-toast-manager"
export type { UseToastManagerReturnValue } from "./use-toast-manager"

export { createToastManager } from "./create-toast-manager"
export type { ToastManager, ToastManagerEvent } from "./create-toast-manager"

// ---- Types ----
export type {
  ToastObject,
  ToastManagerAddOptions,
  ToastManagerUpdateOptions,
  ToastManagerPromiseOptions,
} from "./types"

// ---- Context escape hatches ----
export { useToastProviderContext } from "./provider/toast-provider-context"
export type { ToastProviderContextValue } from "./provider/toast-provider-context"

export { useToastRootContext } from "./root/toast-root-context"
export type { ToastRootContextValue } from "./root/toast-root-context"

// ---- CSS vars reference ----
export { ToastRootCssVars } from "./root/toast-root-css-vars"

// ---- Namespace object (compound component pattern) ----
import { ToastProvider } from "./provider/toast-provider"
import { ToastViewport } from "./viewport/toast-viewport"
import { ToastRoot } from "./root/toast-root"
import { ToastContent } from "./content/toast-content"
import { ToastTitle } from "./title/toast-title"
import { ToastDescription } from "./description/toast-description"
import { ToastClose } from "./close/toast-close"
import { ToastAction } from "./action/toast-action"
import { ToastPortal } from "./portal/toast-portal"
import { useToastManager } from "./use-toast-manager"
import { createToastManager } from "./create-toast-manager"

export const Toast = {
  Provider: ToastProvider,
  Viewport: ToastViewport,
  Root: ToastRoot,
  Content: ToastContent,
  Title: ToastTitle,
  Description: ToastDescription,
  Close: ToastClose,
  Action: ToastAction,
  Portal: ToastPortal,
  useToastManager,
  createToastManager,
}
