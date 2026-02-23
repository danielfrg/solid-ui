import type { Component, JSX } from "solid-js"
import { Match, splitProps, Switch } from "solid-js"
import { Checkbox as CheckboxPrimitive } from "@danielfrg/ui-core/checkbox"
import type { CheckboxRootProps as CoreCheckboxRootProps } from "@danielfrg/ui-core/checkbox"
import { cn } from "./utils"

type CheckboxProps = CoreCheckboxRootProps & {
  class?: string
  children?: JSX.Element
}

const Checkbox: Component<CheckboxProps> = (props) => {
  const [local, others] = splitProps(props, ["class", "children"])

  return (
    <CheckboxPrimitive
      data-slot="checkbox"
      class={cn("items-top group relative flex space-x-2", local.class)}
      {...others}
    >
      <CheckboxPrimitive.Input class="peer" />
      <CheckboxPrimitive.Control
        class={cn(
          "size-4 shrink-0 rounded-sm border border-primary ring-offset-background",
          "data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50",
          "peer-focus-visible:outline-none peer-focus-visible:ring-2 peer-focus-visible:ring-ring peer-focus-visible:ring-offset-2",
          "data-[checked]:border-none data-[indeterminate]:border-none",
          "data-[checked]:bg-primary data-[indeterminate]:bg-primary",
          "data-[checked]:text-primary-foreground data-[indeterminate]:text-primary-foreground",
        )}
      >
        <CheckboxPrimitive.Indicator class="grid place-content-center text-current transition-none">
          <Switch>
            <Match when={!others.indeterminate}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="size-3.5"
              >
                <path d="M5 12l5 5l10 -10" />
              </svg>
            </Match>
            <Match when={others.indeterminate}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="size-3.5"
              >
                <path d="M5 12l14 0" />
              </svg>
            </Match>
          </Switch>
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Control>
      {local.children}
    </CheckboxPrimitive>
  )
}

type CheckboxLabelProps = { class?: string; children?: JSX.Element }

const CheckboxLabel: Component<CheckboxLabelProps> = (props) => {
  const [local, others] = splitProps(props, ["class"])

  return (
    <CheckboxPrimitive.Label
      data-slot="checkbox-label"
      class={cn(
        "text-sm font-medium leading-none data-[disabled]:cursor-not-allowed data-[disabled]:opacity-70",
        local.class,
      )}
      {...others}
    />
  )
}

type CheckboxDescriptionProps = { class?: string; children?: JSX.Element }

const CheckboxDescription: Component<CheckboxDescriptionProps> = (props) => {
  const [local, others] = splitProps(props, ["class"])

  return (
    <CheckboxPrimitive.Description
      data-slot="checkbox-description"
      class={cn("text-sm text-muted-foreground", local.class)}
      {...others}
    />
  )
}

export { Checkbox, CheckboxLabel, CheckboxDescription }
export type { CheckboxProps, CheckboxLabelProps, CheckboxDescriptionProps }
