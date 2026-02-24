import * as Toggle from "."
import type { ToggleRootState } from "."
import { describe, expect, it, vi } from "vitest"

import { fireEvent, render } from "@solidjs/testing-library"

describe("Toggle", () => {
  it("should toggle when defaultPressed is set", async () => {
    const { getByTestId } = render(() => (
      <Toggle.Root data-testid="toggle" defaultPressed>
        Toggle
      </Toggle.Root>
    ))

    const toggle = getByTestId("toggle") as HTMLButtonElement

    expect(toggle.getAttribute("aria-pressed")).toBe("true")

    await fireEvent.click(toggle)

    expect(toggle.getAttribute("aria-pressed")).toBe("false")
  })

  it("should call onChange when pressed changes", async () => {
    const onChangeSpy = vi.fn()
    const { getByTestId } = render(() => (
      <Toggle.Root data-testid="toggle" pressed onChange={onChangeSpy}>
        Toggle
      </Toggle.Root>
    ))

    const toggle = getByTestId("toggle") as HTMLButtonElement

    await fireEvent.click(toggle)

    expect(onChangeSpy).toHaveBeenCalledTimes(1)
    expect(onChangeSpy).toHaveBeenCalledWith(false)
  })

  it("should render children", () => {
    const { getByTestId } = render(() => <Toggle.Root data-testid="toggle">Button</Toggle.Root>)

    expect(getByTestId("toggle").textContent).toBe("Button")
  })

  it("should render children as a render prop", () => {
    const { getByTestId } = render(() => (
      <Toggle.Root data-testid="toggle" pressed>
        {(state: ToggleRootState) => <span>{state.pressed() ? "Pressed" : "Not pressed"}</span>}
      </Toggle.Root>
    ))

    expect(getByTestId("toggle").textContent).toBe("Pressed")
  })
})
