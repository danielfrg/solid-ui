import type { Component, JSX } from "solid-js"
import { splitProps } from "solid-js"
import { Progress as ProgressPrimitive } from "@danielfrg/solid-ui/progress"
import type { ProgressRootProps as CoreProgressRootProps } from "@danielfrg/solid-ui/progress"
import { cn } from "@danielfrg/solid-ui/utils"

type ProgressProps = CoreProgressRootProps & {
  class?: string
  children?: JSX.Element
}

const Progress: Component<ProgressProps> = (props) => {
  const [local, others] = splitProps(props, ["class", "children"])

  return (
    <ProgressPrimitive
      data-slot="progress"
      class={cn("grid grid-cols-[1fr_auto] gap-x-2 gap-y-1.5", local.class)}
      {...others}
    >
      {local.children}
      <ProgressPrimitive.Track class="col-span-2 relative h-1 w-full overflow-hidden rounded-full bg-muted">
        <ProgressPrimitive.Fill class="h-full w-[var(--kb-progress-fill-width)] bg-primary transition-all" />
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
      class={cn("text-sm font-medium leading-snug", local.class)}
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
      class={cn("text-sm font-medium tabular-nums leading-snug text-right", local.class)}
      {...others}
    />
  )
}

// Alias for shadcn compatibility
const ProgressValue = ProgressValueLabel

export { Progress, ProgressLabel, ProgressValueLabel, ProgressValue }
export type { ProgressProps, ProgressLabelProps, ProgressValueLabelProps }
