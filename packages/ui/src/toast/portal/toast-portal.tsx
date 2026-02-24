import { type ComponentProps } from "solid-js"
import { Portal } from "solid-js/web"

export type ToastPortalProps = ComponentProps<typeof Portal>

/**
 * A portal element that moves the viewport to a different part of the DOM.
 * By default, the portal content is appended to `<body>`.
 * Renders a `<div>` element.
 */
export function ToastPortal(props: ToastPortalProps) {
  return <Portal {...props} />
}
