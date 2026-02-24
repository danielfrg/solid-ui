export const ToastRootCssVars = {
  /**
   * The position index of the toast in the stack (0 = frontmost).
   * Used for collapsed stack `scale()` and `translateY()`.
   */
  index: "--toast-index",
  /**
   * Cumulative pixel height of all toasts above this one.
   * Used for expanded stack `translateY()`.
   */
  offsetY: "--toast-offset-y",
  /**
   * The natural measured height of this toast in pixels.
   */
  height: "--toast-height",
  /**
   * Horizontal swipe displacement relative to the initial transform origin.
   */
  swipeMovementX: "--toast-swipe-movement-x",
  /**
   * Vertical swipe displacement relative to the initial transform origin.
   */
  swipeMovementY: "--toast-swipe-movement-y",
} as const
