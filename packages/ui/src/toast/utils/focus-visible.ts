/**
 * Returns true if the given element currently has a focus-visible style
 * (i.e. it was focused via keyboard or sequential navigation, not pointer).
 */
export function isFocusVisible(element: Element | null | undefined): boolean {
  if (!element) return false
  try {
    return element.matches(":focus-visible")
  } catch {
    return false
  }
}
