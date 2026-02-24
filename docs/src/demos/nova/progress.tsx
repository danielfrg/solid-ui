import { createSignal, onCleanup, onMount } from "solid-js"
import { Progress, ProgressLabel, ProgressValueLabel, ProgressValue } from "@danielfrg/solid-ui-nova/progress"
import { Slider } from "@danielfrg/solid-ui-nova/slider"
import { ExampleWrapper, Example } from "@/components/example"

export default function ProgressExample() {
  return (
    <ExampleWrapper>
      <ProgressValues />
      <ProgressWithLabel />
      <ProgressControlled />
      <FileUploadList />
    </ExampleWrapper>
  )
}

function ProgressValues() {
  return (
    <Example title="Progress Bar">
      <div class="flex w-full flex-col gap-4">
        <Progress value={0} />
        <Progress value={25} />
        <Progress value={50} />
        <Progress value={75} />
        <Progress value={100} />
      </div>
    </Example>
  )
}

function ProgressWithLabel() {
  return (
    <Example title="With Label">
      <Progress value={56}>
        <ProgressLabel>Upload progress</ProgressLabel>
        <ProgressValue />
      </Progress>
    </Example>
  )
}

function ProgressControlled() {
  const [value, setValue] = createSignal(50)

  return (
    <Example title="Controlled">
      <div class="flex w-full flex-col gap-4">
        <Progress value={value()}>
          <ProgressLabel class="sr-only">Progress</ProgressLabel>
          <ProgressValue />
        </Progress>
        <Slider value={[value()]} onChange={(v: number[]) => setValue(v[0])} minValue={0} maxValue={100} step={1} />
      </div>
    </Example>
  )
}

function FileUploadList() {
  const files = [
    { id: "1", name: "document.pdf", progress: 45, timeRemaining: "2m 30s" },
    { id: "2", name: "presentation.pptx", progress: 78, timeRemaining: "45s" },
    { id: "3", name: "spreadsheet.xlsx", progress: 12, timeRemaining: "5m 12s" },
    { id: "4", name: "image.jpg", progress: 100, timeRemaining: "Complete" },
  ]

  return (
    <Example title="File Upload List">
      <div class="flex flex-col gap-3">
        {files.map((file) => (
          <div class="flex items-start gap-3 px-0">
            <div class="flex size-5 items-center justify-center mt-0.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="size-5"
              >
                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                <path d="M14 2v4a2 2 0 0 0 2 2h4" />
              </svg>
            </div>
            <div class="flex-1 min-w-0">
              <Progress value={file.progress} class="w-full">
                <ProgressLabel class="truncate">{file.name}</ProgressLabel>
                <ProgressValue>{file.timeRemaining}</ProgressValue>
              </Progress>
            </div>
          </div>
        ))}
      </div>
    </Example>
  )
}
