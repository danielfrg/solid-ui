/*
 * Portions of this file are based on code from radix-ui.
 * MIT Licensed, Copyright (c) 2022 WorkOS.
 *
 * Credits to the radix-ui team:
 * https://github.com/radix-ui/primitives/blob/02b036d4181131dfc0224044ba5f17d260bce2f8/packages/react/toggle/src/Toggle.tsx
 *
 * Portions of this file are based on code from react-spectrum.
 * Apache License Version 2.0, Copyright 2020 Adobe.
 *
 * Credits to the React Spectrum team:
 * https://github.com/adobe/react-spectrum/blob/a13802d8be6f83af1450e56f7a88527b10d9cadf/packages/@react-aria/button/src/useToggleButton.ts
 */

import { type Accessor, type Component, type JSX, type ValidComponent, children, splitProps } from "solid-js"

import * as Button from "../button"
import type { ElementOf, PolymorphicProps } from "../polymorphic"
import { createToggleState } from "../primitives"
import { callHandler, isFunction } from "../utils"

export interface ToggleRootState {
  /** Whether the toggle button is on (pressed) or off (not pressed). */
  pressed: Accessor<boolean>
}

export interface ToggleRootOptions extends Button.ButtonRootOptions {
  /** The controlled pressed state of the toggle. */
  pressed?: boolean

  /**
   * The default pressed state when initially rendered.
   * Useful when you do not need to control the pressed state.
   */
  defaultPressed?: boolean

  /** Event handler called when the pressed state of the toggle changes. */
  onChange?: (pressed: boolean) => void

  /**
   * The children of the toggle.
   * Can be a `JSX.Element` or a _render prop_ for having access to the internal state.
   */
  children?: JSX.Element | ((state: ToggleRootState) => JSX.Element)
}

export interface ToggleRootCommonProps<T extends HTMLElement = HTMLElement> {
  onClick: JSX.EventHandlerUnion<T, MouseEvent>
  disabled: boolean | undefined
}

export interface ToggleRootRenderProps extends ToggleRootCommonProps, Button.ButtonRootRenderProps {
  children: JSX.Element
  "aria-pressed": boolean
  "data-pressed": "" | undefined
}

export type ToggleRootProps<T extends ValidComponent | HTMLElement = HTMLElement> = ToggleRootOptions &
  Partial<ToggleRootCommonProps<ElementOf<T>>>

/**
 * A two-state button that allow users to toggle a selection on or off.
 * This component is based on the [WAI-ARIA Button Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/button/)
 */
export function ToggleRoot<T extends ValidComponent = "button">(props: PolymorphicProps<T, ToggleRootProps<T>>) {
  const [local, others] = splitProps(props as ToggleRootProps, [
    "children",
    "pressed",
    "defaultPressed",
    "onChange",
    "onClick",
  ])

  const state = createToggleState({
    isSelected: () => local.pressed,
    defaultIsSelected: () => local.defaultPressed,
    onSelectedChange: (selected) => local.onChange?.(selected),
    isDisabled: () => others.disabled,
  })

  const onClick: JSX.EventHandlerUnion<any, MouseEvent> = (e) => {
    callHandler(e, local.onClick)
    state.toggle()
  }

  return (
    <Button.Root<Component<Omit<ToggleRootRenderProps, keyof Button.ButtonRootRenderProps>>>
      aria-pressed={state.isSelected()}
      data-pressed={state.isSelected() ? "" : undefined}
      onClick={onClick}
      {...others}
    >
      <ToggleRootChild state={{ pressed: state.isSelected }}>{local.children}</ToggleRootChild>
    </Button.Root>
  )
}

interface ToggleRootChildProps extends Pick<ToggleRootOptions, "children"> {
  state: ToggleRootState
}

function ToggleRootChild(props: ToggleRootChildProps) {
  const resolvedChildren = children(() => {
    const body = props.children
    return isFunction(body) ? body(props.state) : body
  })

  return <>{resolvedChildren()}</>
}
