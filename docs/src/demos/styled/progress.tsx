import { createSignal, onCleanup, onMount, For } from "solid-js"
import { Progress, ProgressLabel, ProgressValueLabel } from "@danielfrg/ui/progress"
import { Slider } from "@danielfrg/ui/slider"

export function ProgressShowcase() {
  return (
    <div class="flex flex-col gap-12">
      <section class="flex flex-col gap-4">
        <h3 class="text-sm font-semibold">Values</h3>
        <div class="flex flex-col gap-4 w-full max-w-sm">
          <Progress value={0} />
          <Progress value={25} />
          <Progress value={50} />
          <Progress value={75} />
          <Progress value={100} />
        </div>
      </section>

      <section class="flex flex-col gap-4">
        <h3 class="text-sm font-semibold">With Label</h3>
        <div class="w-full max-w-sm">
          <Progress value={66}>
            <div class="flex justify-between mb-2">
              <ProgressLabel>Upload progress</ProgressLabel>
              <ProgressValueLabel />
            </div>
          </Progress>
        </div>
      </section>

      <section class="flex flex-col gap-4">
        <h3 class="text-sm font-semibold">Custom Label Format</h3>
        <div class="w-full max-w-sm">
          <Progress
            value={3}
            minValue={0}
            maxValue={10}
            getValueLabel={({ value, max }) => `${value} of ${max} tasks completed`}
          >
            <div class="flex justify-between mb-2">
              <ProgressLabel>Processing...</ProgressLabel>
              <ProgressValueLabel />
            </div>
          </Progress>
        </div>
      </section>

      <section class="flex flex-col gap-4">
        <h3 class="text-sm font-semibold">Controlled</h3>
        <ControlledProgress />
      </section>

      <section class="flex flex-col gap-4">
        <h3 class="text-sm font-semibold">Animated</h3>
        <div class="w-full max-w-sm">
          <AnimatedProgress />
        </div>
      </section>

      <section class="flex flex-col gap-4">
        <h3 class="text-sm font-semibold">File Upload List</h3>
        <FileUploadList />
      </section>
    </div>
  )
}

function ControlledProgress() {
  const [value, setValue] = createSignal(50)

  return (
    <div class="flex w-full max-w-sm flex-col gap-4">
      <Progress value={value()}>
        <div class="flex justify-between mb-2">
          <ProgressLabel>Progress</ProgressLabel>
          <ProgressValueLabel />
        </div>
      </Progress>
      <Slider value={[value()]} onChange={(val: number[]) => setValue(val[0])} minValue={0} maxValue={100} step={1} />
    </div>
  )
}

function AnimatedProgress() {
  const [value, setValue] = createSignal(13)

  onMount(() => {
    const timer = setTimeout(() => setValue(66), 500)
    onCleanup(() => clearTimeout(timer))
  })

  return (
    <Progress value={value()}>
      <div class="flex justify-between mb-2">
        <ProgressLabel>Animated</ProgressLabel>
        <ProgressValueLabel />
      </div>
    </Progress>
  )
}

const files = [
  { id: "1", name: "document.pdf", progress: 45, timeRemaining: "2m 30s" },
  { id: "2", name: "presentation.pptx", progress: 78, timeRemaining: "45s" },
  { id: "3", name: "spreadsheet.xlsx", progress: 12, timeRemaining: "5m 12s" },
  { id: "4", name: "image.jpg", progress: 100, timeRemaining: "Complete" },
]

function FileUploadList() {
  return (
    <div class="w-full max-w-md space-y-3">
      <For each={files}>
        {(file) => (
          <div class="flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="size-4 shrink-0 text-muted-foreground"
            >
              <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
              <path d="M14 2v4a2 2 0 0 0 2 2h4" />
            </svg>
            <span class="text-sm truncate min-w-0 flex-shrink">{file.name}</span>
            <Progress value={file.progress} class="w-32 flex-shrink-0" />
            <span class="text-xs text-muted-foreground whitespace-nowrap w-16 text-right">{file.timeRemaining}</span>
          </div>
        )}
      </For>
    </div>
  )
}
