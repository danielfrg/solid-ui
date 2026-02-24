import type { Component, JSX } from "solid-js"
import { splitProps } from "solid-js"
import { Switch as SwitchPrimitive } from "@danielfrg/solid-ui/switch"
import type { SwitchRootProps as CoreSwitchRootProps } from "@danielfrg/solid-ui/switch"
import { cn } from "./utils"

type SwitchProps = CoreSwitchRootProps & {
  class?: string
  children?: JSX.Element
}

const Switch: Component<SwitchProps> = (props) => {
  const [local, others] = splitProps(props, ["class", "children"])

  return (
    <SwitchPrimitive data-slot="switch" class={cn("flex items-center gap-2", local.class)} {...others}>
      <SwitchPrimitive.Input class="peer" />
      <SwitchPrimitive.Control
        class={cn(
          "inline-flex h-[18.4px] w-[32px] shrink-0 cursor-pointer items-center rounded-full border border-transparent transition-colors",
          "bg-gray-300 dark:bg-gray-600",
          "data-[checked]:bg-primary",
          "peer-focus-visible:border-ring peer-focus-visible:ring-3 peer-focus-visible:ring-ring/50",
          "data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50",
          "data-[size=sm]:h-[14px] data-[size=sm]:w-[24px]",
        )}
      >
        <SwitchPrimitive.Thumb
          class={cn(
            "pointer-events-none block size-4 rounded-full bg-background shadow-sm ring-0 transition-transform",
            "dark:data-[unchecked]:bg-foreground dark:data-[checked]:bg-primary-foreground",
            "data-[size=sm]:size-3",
            "data-[unchecked]:translate-x-0 data-[checked]:translate-x-[calc(100%-2px)]",
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
        "text-sm font-medium leading-snug data-[disabled]:cursor-not-allowed data-[disabled]:opacity-70",
        local.class,
      )}
      {...others}
    />
  )
}

export { Switch, SwitchLabel }
export type { SwitchProps, SwitchLabelProps }
