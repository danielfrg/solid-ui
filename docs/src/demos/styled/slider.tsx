import { createSignal } from "solid-js"
import { Slider, SliderLabel, SliderValueLabel } from "@danielfrg/solid-ui/slider"

export function SliderShowcase() {
  const [value, setValue] = createSignal([50])

  return (
    <div class="flex flex-col gap-10">
      <section class="flex flex-col gap-3">
        <h3 class="text-sm font-semibold">Basic</h3>
        <Slider defaultValue={[75]} maxValue={100} step={1} class="max-w-xs" />
      </section>

      <section class="flex flex-col gap-3">
        <h3 class="text-sm font-semibold">Range</h3>
        <Slider defaultValue={[25, 75]} maxValue={100} step={5} class="max-w-xs" />
      </section>

      <section class="flex flex-col gap-3">
        <h3 class="text-sm font-semibold">Multiple Thumbs</h3>
        <Slider defaultValue={[10, 40, 80]} maxValue={100} step={10} class="max-w-xs" />
      </section>

      <section class="flex flex-col gap-3">
        <h3 class="text-sm font-semibold">With Label</h3>
        <Slider defaultValue={[50]} maxValue={100} step={1} class="max-w-xs">
          <SliderLabel>Volume</SliderLabel>
          <SliderValueLabel />
        </Slider>
      </section>

      <section class="flex flex-col gap-3">
        <h3 class="text-sm font-semibold">Controlled</h3>
        <div class="flex max-w-xs flex-col gap-2">
          <div class="flex justify-between text-sm">
            <span>Value</span>
            <span class="text-muted-foreground">{value()[0]}</span>
          </div>
          <Slider value={value()} onChange={setValue} maxValue={100} step={1} />
        </div>
      </section>

      <section class="flex flex-col gap-3">
        <h3 class="text-sm font-semibold">Disabled</h3>
        <Slider defaultValue={[50]} maxValue={100} step={1} disabled class="max-w-xs" />
      </section>
    </div>
  )
}
