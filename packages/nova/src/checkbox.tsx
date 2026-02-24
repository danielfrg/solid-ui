import type { Component, JSX } from "solid-js"
import { Match, splitProps, Switch } from "solid-js"
import { Checkbox as CheckboxPrimitive } from "@danielfrg/solid-ui/checkbox"
import type { CheckboxRootProps as CoreCheckboxRootProps } from "@danielfrg/solid-ui/checkbox"
import { cn } from "./utils"

type CheckboxProps = CoreCheckboxRootProps & {
  class?: string
  children?: JSX.Element
}

const Checkbox: Component<CheckboxProps> = (props) => {
  const [local, others] = splitProps(props, ["class", "children"])
  const ariaInvalid = () => (others as any)["aria-invalid"]

  return (
    <CheckboxPrimitive
      data-slot="checkbox"
      class={cn("items-top group relative flex space-x-2", local.class)}
      {...others}
    >
      <CheckboxPrimitive.Input class="peer" />
      <CheckboxPrimitive.Control
        aria-invalid={ariaInvalid()}
        class={cn(
          "flex size-4 shrink-0 items-center justify-center rounded-[4px] border border-primary transition-colors",
          "data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50",
          "aria-invalid:border-destructive aria-invalid:shadow-[0_0_0_3px] aria-invalid:shadow-destructive/20",
          "dark:aria-invalid:border-destructive/50 dark:aria-invalid:shadow-destructive/40",
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

type CheckboxLabelProps = {
  class?: string
  children?: JSX.Element
}

const CheckboxLabel: Component<CheckboxLabelProps> = (props) => {
  const [local, others] = splitProps(props, ["class"])

  return (
    <CheckboxPrimitive.Label
      data-slot="checkbox-label"
      class={cn(
        "text-sm font-medium leading-snug data-[disabled]:cursor-not-allowed data-[disabled]:opacity-70 group-aria-invalid:text-destructive",
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
