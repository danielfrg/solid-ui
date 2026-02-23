import type { Component, JSX } from "solid-js"
import { splitProps } from "solid-js"
import { Switch as SwitchPrimitive } from "@danielfrg/ui-core/switch"
import type { SwitchRootProps as CoreSwitchRootProps } from "@danielfrg/ui-core/switch"
import { cn } from "./utils"

type SwitchProps = CoreSwitchRootProps & {
  class?: string
  children?: JSX.Element
}

const Switch: Component<SwitchProps> = (props) => {
  const [local, others] = splitProps(props, ["class", "children"])

  return (
    <SwitchPrimitive data-slot="switch" class={cn("flex items-center gap-2", local.class)} {...others}>
      <SwitchPrimitive.Input class="[&:focus-visible+div]:outline-none [&:focus-visible+div]:ring-2 [&:focus-visible+div]:ring-ring [&:focus-visible+div]:ring-offset-2 [&:focus-visible+div]:ring-offset-background" />
      <SwitchPrimitive.Control
        class={cn(
          "inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent bg-input transition-[color,background-color,box-shadow]",
          "data-[checked]:bg-primary data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50",
        )}
      >
        <SwitchPrimitive.Thumb
          class={cn(
            "pointer-events-none block size-5 translate-x-0 rounded-full bg-background shadow-lg ring-0 transition-transform",
            "data-[checked]:translate-x-5",
          )}
        />
      </SwitchPrimitive.Control>
      {local.children}
    </SwitchPrimitive>
  )
}

type SwitchLabelProps = { class?: string; children?: JSX.Element }

const SwitchLabel: Component<SwitchLabelProps> = (props) => {
  const [local, others] = splitProps(props, ["class"])

  return (
    <SwitchPrimitive.Label
      data-slot="switch-label"
      class={cn(
        "text-sm font-medium leading-none data-[disabled]:cursor-not-allowed data-[disabled]:opacity-70",
        local.class,
      )}
      {...others}
    />
  )
}

export { Switch, SwitchLabel }
export type { SwitchProps, SwitchLabelProps }
