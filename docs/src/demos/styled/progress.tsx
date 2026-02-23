import { createSignal, onCleanup, onMount } from "solid-js"
import { Progress, ProgressLabel, ProgressValueLabel } from "@danielfrg/solid-ui/progress"
import { Slider } from "@danielfrg/solid-ui/slider"

export function ProgressShowcase() {
  const [controlled, setControlled] = createSignal(50)
  const [animated, setAnimated] = createSignal(13)

  onMount(() => {
    const timer = setTimeout(() => setAnimated(66), 500)
    onCleanup(() => clearTimeout(timer))
  })

  return (
    <div class="flex flex-col gap-10">
      <section class="flex flex-col gap-3">
        <h3 class="text-sm font-semibold">Values</h3>
        <div class="flex max-w-sm flex-col gap-4">
          <Progress value={0} />
          <Progress value={25} />
          <Progress value={50} />
          <Progress value={75} />
          <Progress value={100} />
        </div>
      </section>

      <section class="flex flex-col gap-3">
        <h3 class="text-sm font-semibold">With Label</h3>
        <Progress value={56} class="max-w-sm">
          <ProgressLabel>Upload progress</ProgressLabel>
          <ProgressValueLabel />
        </Progress>
      </section>

      <section class="flex flex-col gap-3">
        <h3 class="text-sm font-semibold">Custom Label</h3>
        <Progress value={30} minValue={0} maxValue={100} class="max-w-sm">
          <ProgressLabel>Tasks completed</ProgressLabel>
          <ProgressValueLabel>3 of 10</ProgressValueLabel>
        </Progress>
      </section>

      <section class="flex flex-col gap-3">
        <h3 class="text-sm font-semibold">Controlled</h3>
        <div class="flex max-w-sm flex-col gap-4">
          <Progress value={controlled()} />
          <Slider
            value={[controlled()]}
            onChange={(v: number[]) => setControlled(v[0])}
            minValue={0}
            maxValue={100}
            step={1}
          />
        </div>
      </section>

      <section class="flex flex-col gap-3">
        <h3 class="text-sm font-semibold">Animated</h3>
        <Progress value={animated()} class="max-w-sm transition-all" />
      </section>

      <section class="flex flex-col gap-3">
        <h3 class="text-sm font-semibold">File Upload</h3>
        <div class="flex max-w-sm flex-col gap-3">
          <div class="flex items-center gap-3">
            <span class="flex-1 truncate text-sm">report-q4.pdf</span>
            <Progress value={100} class="w-24" />
            <span class="text-xs text-muted-foreground">Done</span>
          </div>
          <div class="flex items-center gap-3">
            <span class="flex-1 truncate text-sm">presentation.pptx</span>
            <Progress value={65} class="w-24" />
            <span class="text-xs text-muted-foreground">65%</span>
          </div>
          <div class="flex items-center gap-3">
            <span class="flex-1 truncate text-sm">data-export.csv</span>
            <Progress value={30} class="w-24" />
            <span class="text-xs text-muted-foreground">30%</span>
          </div>
        </div>
      </section>
    </div>
  )
}
