import { createSignal } from "solid-js"
import { Slider } from "@danielfrg/ui"

export function SliderShowcase() {
  const [value, setValue] = createSignal([0.3, 0.7])

  return (
    <div class="flex flex-col gap-12">
      <section class="flex flex-col gap-4">
        <h3 class="text-sm font-semibold">Basic</h3>
        <Slider defaultValue={[50]} maxValue={100} step={1} />
      </section>

      <section class="flex flex-col gap-4">
        <h3 class="text-sm font-semibold">Range</h3>
        <Slider defaultValue={[25, 50]} maxValue={100} step={5} />
      </section>

      <section class="flex flex-col gap-4">
        <h3 class="text-sm font-semibold">Multiple Thumbs</h3>
        <Slider defaultValue={[10, 20, 70]} maxValue={100} step={10} />
      </section>

      <section class="flex flex-col gap-4">
        <h3 class="text-sm font-semibold">Vertical</h3>
        <div class="flex items-center gap-6">
          <Slider defaultValue={[50]} maxValue={100} step={1} orientation="vertical" class="h-40" />
          <Slider defaultValue={[25]} maxValue={100} step={1} orientation="vertical" class="h-40" />
        </div>
      </section>

      <section class="flex flex-col gap-4">
        <h3 class="text-sm font-semibold">Controlled</h3>
        <div class="grid w-full gap-3">
          <div class="flex items-center justify-between gap-2">
            <label class="text-sm font-medium leading-none">Temperature</label>
            <span class="text-muted-foreground text-sm">{value().join(", ")}</span>
          </div>
          <Slider value={value()} onChange={setValue} minValue={0} maxValue={1} step={0.1} />
        </div>
      </section>

      <section class="flex flex-col gap-4">
        <h3 class="text-sm font-semibold">Disabled</h3>
        <Slider defaultValue={[50]} maxValue={100} step={1} disabled />
      </section>
    </div>
  )
}
