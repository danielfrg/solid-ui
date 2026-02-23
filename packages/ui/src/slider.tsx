import type { Component, JSX } from "solid-js"
import { splitProps } from "solid-js"
import { Slider as SliderPrimitive } from "@danielfrg/ui-core/slider"
import type { SliderRootProps as CoreSliderRootProps } from "@danielfrg/ui-core/slider"
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
      class={cn("relative flex w-full touch-none select-none flex-col items-center", local.class)}
      {...others}
    >
      {local.children}
      <SliderPrimitive.Track class="relative h-2 w-full grow rounded-full bg-secondary">
        <SliderPrimitive.Fill class="absolute h-full rounded-full bg-primary" />
        <SliderPrimitive.Thumb
          class={cn(
            "top-[-6px] block size-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
            "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
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
      class={cn("text-sm font-medium leading-none", local.class)}
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
      class={cn("text-sm font-medium text-muted-foreground tabular-nums", local.class)}
      {...others}
    />
  )
}

export { Slider, SliderLabel, SliderValueLabel }
export type { SliderProps, SliderLabelProps, SliderValueLabelProps }
