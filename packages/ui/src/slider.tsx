import type { Component, JSX } from "solid-js"
import { splitProps } from "solid-js"
import { Slider as SliderPrimitive } from "@danielfrg/solid-ui-core/slider"
import type {
  SliderRootProps as CoreSliderRootProps,
  SliderTrackProps as CoreSliderTrackProps,
  SliderFillProps as CoreSliderFillProps,
  SliderThumbProps as CoreSliderThumbProps,
} from "@danielfrg/solid-ui-core/slider"
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
    </SliderPrimitive>
  )
}

type SliderTrackProps = CoreSliderTrackProps & {
  class?: string
  children?: JSX.Element
}

const SliderTrack: Component<SliderTrackProps> = (props) => {
  const [local, others] = splitProps(props, ["class", "children"])

  return (
    <SliderPrimitive.Track
      data-slot="slider-track"
      class={cn(
        "relative h-1 w-full grow rounded-full bg-muted",
        "data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1",
        local.class,
      )}
      {...others}
    >
      {local.children}
    </SliderPrimitive.Track>
  )
}

type SliderFillProps = CoreSliderFillProps & {
  class?: string
}

const SliderFill: Component<SliderFillProps> = (props) => {
  const [local, others] = splitProps(props, ["class"])

  return (
    <SliderPrimitive.Fill
      data-slot="slider-fill"
      class={cn(
        "absolute h-full rounded-full bg-primary",
        "data-[orientation=vertical]:w-full data-[orientation=vertical]:h-[unset]",
        "data-[disabled]:bg-muted-foreground/30",
        local.class,
      )}
      {...others}
    />
  )
}

type SliderThumbProps = CoreSliderThumbProps & {
  class?: string
  children?: JSX.Element
}

const SliderThumb: Component<SliderThumbProps> = (props) => {
  const [local, others] = splitProps(props, ["class", "children"])

  return (
    <SliderPrimitive.Thumb
      data-slot="slider-thumb"
      class={cn(
        "absolute block size-3 rounded-full border border-ring bg-white transition-[color,box-shadow]",
        "after:absolute after:-inset-2",
        // horizontal: center vertically
        "top-1/2 -translate-y-1/2",
        // vertical: center horizontally instead
        "data-[orientation=vertical]:top-[unset] data-[orientation=vertical]:left-1/2 data-[orientation=vertical]:-translate-x-1/2 data-[orientation=vertical]:translate-y-0",
        "hover:ring-3 hover:ring-ring/50 focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-hidden active:ring-3 active:ring-ring/50",
        "data-[disabled]:pointer-events-none",
        local.class,
      )}
      {...others}
    >
      {local.children ?? <SliderPrimitive.Input />}
    </SliderPrimitive.Thumb>
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

export { Slider, SliderTrack, SliderFill, SliderThumb, SliderLabel, SliderValueLabel }
export type {
  SliderProps,
  SliderTrackProps,
  SliderFillProps,
  SliderThumbProps,
  SliderLabelProps,
  SliderValueLabelProps,
}
