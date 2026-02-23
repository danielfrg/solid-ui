import type { Component, JSX } from "solid-js"
import { splitProps } from "solid-js"
import { Progress as ProgressPrimitive } from "@danielfrg/ui-core/progress"
import type { ProgressRootProps as CoreProgressRootProps } from "@danielfrg/ui-core/progress"
import { cn } from "./utils"

type ProgressProps = CoreProgressRootProps & {
  class?: string
  children?: JSX.Element
}

const Progress: Component<ProgressProps> = (props) => {
  const [local, others] = splitProps(props, ["class", "children"])

  return (
    <ProgressPrimitive data-slot="progress" class={cn("relative w-full", local.class)} {...others}>
      {local.children}
      <ProgressPrimitive.Track class="relative h-2 w-full overflow-hidden rounded-full bg-secondary">
        <ProgressPrimitive.Fill class="h-full w-[var(--kb-progress-fill-width)] flex-1 bg-primary transition-all" />
      </ProgressPrimitive.Track>
    </ProgressPrimitive>
  )
}

type ProgressLabelProps = { class?: string; children?: JSX.Element }

const ProgressLabel: Component<ProgressLabelProps> = (props) => {
  const [local, others] = splitProps(props, ["class"])

  return (
    <ProgressPrimitive.Label
      data-slot="progress-label"
      class={cn("text-sm font-medium leading-none", local.class)}
      {...others}
    />
  )
}

type ProgressValueLabelProps = { class?: string; children?: JSX.Element }

const ProgressValueLabel: Component<ProgressValueLabelProps> = (props) => {
  const [local, others] = splitProps(props, ["class"])

  return (
    <ProgressPrimitive.ValueLabel
      data-slot="progress-value-label"
      class={cn("text-sm font-medium text-muted-foreground tabular-nums", local.class)}
      {...others}
    />
  )
}

export { Progress, ProgressLabel, ProgressValueLabel }
export type { ProgressProps, ProgressLabelProps, ProgressValueLabelProps }
