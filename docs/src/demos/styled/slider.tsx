import { createSignal } from "solid-js"
import { Slider, SliderTrack, SliderFill, SliderThumb } from "@danielfrg/solid-ui/slider"
import { ExampleWrapper, Example } from "@/components/example"

export default function SliderExample() {
  return (
    <ExampleWrapper>
      <SliderBasic />
      <SliderRange />
      <SliderMultiple />
      <SliderVertical />
      <SliderControlled />
      <SliderDisabled />
    </ExampleWrapper>
  )
}

function SliderBasic() {
  return (
    <Example title="Basic">
      <Slider defaultValue={[50]} maxValue={100} step={1}>
        <SliderTrack>
          <SliderFill />
          <SliderThumb />
        </SliderTrack>
      </Slider>
    </Example>
  )
}

function SliderRange() {
  return (
    <Example title="Range">
      <Slider defaultValue={[25, 75]} maxValue={100} step={5}>
        <SliderTrack>
          <SliderFill />
          <SliderThumb />
          <SliderThumb />
        </SliderTrack>
      </Slider>
    </Example>
  )
}

function SliderMultiple() {
  return (
    <Example title="Multiple Thumbs">
      <Slider defaultValue={[10, 40, 70]} maxValue={100} step={10}>
        <SliderTrack>
          <SliderFill />
          <SliderThumb />
          <SliderThumb />
          <SliderThumb />
        </SliderTrack>
      </Slider>
    </Example>
  )
}

function SliderVertical() {
  return (
    <Example title="Vertical">
      <div class="flex items-center gap-6">
        <Slider defaultValue={[50]} maxValue={100} step={1} orientation="vertical" class="h-40">
          <SliderTrack>
            <SliderFill />
            <SliderThumb />
          </SliderTrack>
        </Slider>
        <Slider defaultValue={[25]} maxValue={100} step={1} orientation="vertical" class="h-40">
          <SliderTrack>
            <SliderFill />
            <SliderThumb />
          </SliderTrack>
        </Slider>
      </div>
    </Example>
  )
}

function SliderControlled() {
  const [value, setValue] = createSignal([0.3, 0.7])

  return (
    <Example title="Controlled">
      <div class="grid w-full gap-3">
        <div class="flex items-center justify-between gap-2">
          <span class="text-sm font-medium">Temperature</span>
          <span class="text-sm text-muted-foreground">{value().join(", ")}</span>
        </div>
        <Slider value={value()} onChange={setValue} minValue={0} maxValue={1} step={0.1}>
          <SliderTrack>
            <SliderFill />
            <SliderThumb />
            <SliderThumb />
          </SliderTrack>
        </Slider>
      </div>
    </Example>
  )
}

function SliderDisabled() {
  return (
    <Example title="Disabled">
      <Slider defaultValue={[50]} maxValue={100} step={1} disabled>
        <SliderTrack>
          <SliderFill />
          <SliderThumb />
        </SliderTrack>
      </Slider>
    </Example>
  )
}
