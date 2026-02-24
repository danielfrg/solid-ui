import type { JSX } from "solid-js"

export interface ToastObject<Data extends object = Record<string, unknown>> {
  /**
   * The unique identifier for the toast.
   */
  id: string
  /**
   * The ref for the toast root DOM element.
   */
  ref?: HTMLElement | null
  /**
   * The title of the toast.
   */
  title?: JSX.Element
  /**
   * The type of the toast. Used to conditionally style the toast and
   * render elements based on state (e.g. "loading", "success", "error").
   */
  type?: string
  /**
   * The description of the toast.
   */
  description?: JSX.Element
  /**
   * The amount of time (in ms) before the toast is auto dismissed.
   * A value of `0` will prevent the toast from being dismissed automatically.
   * @default 5000
   */
  timeout?: number
  /**
   * The priority of the toast.
   * - `low` — announced politely via aria-live="polite"
   * - `high` — announced urgently via a visually-hidden alert region
   * @default 'low'
   */
  priority?: "low" | "high"
  /**
   * The transition status of the toast (managed internally).
   */
  transitionStatus?: "starting" | "ending" | undefined
  /**
   * Whether the toast was hidden because the toast limit was reached.
   */
  limited?: boolean
  /**
   * The measured natural height of the toast in pixels (used for stack layout).
   */
  height?: number
  /**
   * Callback called when the toast begins closing (before exit animation).
   */
  onClose?: () => void
  /**
   * Callback called when the toast is fully removed from the DOM after exit animation.
   */
  onRemove?: () => void
  /**
   * Props to forward to the action button element.
   */
  actionProps?: JSX.HTMLAttributes<HTMLButtonElement>
  /**
   * Arbitrary custom data attached to this toast.
   */
  data?: Data
}

export interface ToastManagerAddOptions<Data extends object = Record<string, unknown>> extends Omit<
  ToastObject<Data>,
  "id" | "height" | "ref" | "limited" | "transitionStatus"
> {
  /**
   * An optional explicit ID. If omitted, one is generated automatically.
   */
  id?: string
}

export interface ToastManagerUpdateOptions<Data extends object = Record<string, unknown>> extends Partial<
  ToastManagerAddOptions<Data>
> {}

export interface ToastManagerPromiseOptions<Value, Data extends object = Record<string, unknown>> {
  loading: string | ToastManagerUpdateOptions<Data>
  success: string | ToastManagerUpdateOptions<Data> | ((result: Value) => string | ToastManagerUpdateOptions<Data>)
  error: string | ToastManagerUpdateOptions<Data> | ((error: unknown) => string | ToastManagerUpdateOptions<Data>)
}
