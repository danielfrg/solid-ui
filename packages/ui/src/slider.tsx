import type { Component, JSX } from "solid-js"
import { splitProps } from "solid-js"
import { Slider as SliderPrimitive } from "@danielfrg/solid-ui-core/slider"
import type { SliderRootProps as CoreSliderRootProps } from "@danielfrg/solid-ui-core/slider"
import { cn } from "./utils"

type SliderProps = CoreSliderRootProps & {
  class?: string
  children?: JSX.Element
}

const Slider: Component<SliderProps> = (props) => {
  const [local, others] = splitProps(props, ["class", "children"])

  return (
    <SliderPrimitive
      data-slot="slider"
      class={cn(
        "relative flex w-full touch-none select-none flex-col items-center data-[orientation=vertical]:min-h-40",
        local.class,
      )}
      {...others}
    >
      {local.children}
      <SliderPrimitive.Track class="relative h-1 w-full grow rounded-full bg-muted data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1">
        <SliderPrimitive.Fill class="absolute h-full rounded-full bg-primary data-[orientation=vertical]:w-full data-[disabled]:bg-muted" />
        <SliderPrimitive.Thumb
          class={cn(
            "absolute top-1/2 block size-3 -translate-y-1/2 rounded-full border border-ring bg-background",
            "hover:ring-3 hover:ring-ring/50",
            "data-[disabled]:pointer-events-none",
          )}
        >
          <SliderPrimitive.Input />
        </SliderPrimitive.Thumb>
      </SliderPrimitive.Track>
    </SliderPrimitive>
  )
}

type SliderLabelProps = { class?: string; children?: JSX.Element }

const SliderLabel: Component<SliderLabelProps> = (props) => {
  const [local, others] = splitProps(props, ["class"])

  return (
    <SliderPrimitive.Label
      data-slot="slider-label"
      class={cn("text-sm font-medium leading-snug", local.class)}
      {...others}
    />
  )
}

type SliderValueLabelProps = { class?: string; children?: JSX.Element }

const SliderValueLabel: Component<SliderValueLabelProps> = (props) => {
  const [local, others] = splitProps(props, ["class"])

  return (
    <SliderPrimitive.ValueLabel
      data-slot="slider-value-label"
      class={cn("text-sm font-medium text-muted-foreground tabular-nums leading-snug", local.class)}
      {...others}
    />
  )
}

export { Slider, SliderLabel, SliderValueLabel }
export type { SliderProps, SliderLabelProps, SliderValueLabelProps }
