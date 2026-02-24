import { Button } from "@danielfrg/solid-ui-nova/button"
import {
  Popover,
  PopoverContent,
  PopoverHeader,
  PopoverTitle,
  PopoverDescription,
  PopoverTrigger,
} from "@danielfrg/solid-ui-nova/popover"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@danielfrg/solid-ui-nova/dialog"
import { ExampleWrapper, Example } from "@/components/example"

export default function PopoverExample() {
  return (
    <ExampleWrapper>
      <PopoverBasic />
      <PopoverSides />
      <PopoverAlignments />
      <PopoverWithForm />
      <PopoverInDialog />
    </ExampleWrapper>
  )
}

function PopoverBasic() {
  return (
    <Example title="Basic">
      <Popover>
        <PopoverTrigger as={Button} variant="outline" class="w-fit">
          Open Popover
        </PopoverTrigger>
        <PopoverContent>
          <PopoverHeader>
            <PopoverTitle>Dimensions</PopoverTitle>
            <PopoverDescription>Set the dimensions for the layer.</PopoverDescription>
          </PopoverHeader>
        </PopoverContent>
      </Popover>
    </Example>
  )
}

function PopoverSides() {
  return (
    <Example title="Sides">
      <div class="flex flex-col gap-2">
        <div class="flex flex-wrap gap-2">
          <Popover placement="left">
            <PopoverTrigger as={Button} variant="outline" class="w-fit">
              Left
            </PopoverTrigger>
            <PopoverContent class="w-40">
              <p class="text-sm">Popover on left</p>
            </PopoverContent>
          </Popover>
          <Popover placement="top">
            <PopoverTrigger as={Button} variant="outline" class="w-fit">
              Top
            </PopoverTrigger>
            <PopoverContent class="w-40">
              <p class="text-sm">Popover on top</p>
            </PopoverContent>
          </Popover>
        </div>
        <div class="flex flex-wrap gap-2">
          <Popover placement="bottom">
            <PopoverTrigger as={Button} variant="outline" class="w-fit">
              Bottom
            </PopoverTrigger>
            <PopoverContent class="w-40">
              <p class="text-sm">Popover on bottom</p>
            </PopoverContent>
          </Popover>
          <Popover placement="right">
            <PopoverTrigger as={Button} variant="outline" class="w-fit">
              Right
            </PopoverTrigger>
            <PopoverContent class="w-40">
              <p class="text-sm">Popover on right</p>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </Example>
  )
}

function PopoverAlignments() {
  return (
    <Example title="Alignments">
      <div class="flex gap-6">
        <Popover placement="bottom-start">
          <PopoverTrigger as={Button} variant="outline" size="sm">
            Start
          </PopoverTrigger>
          <PopoverContent class="w-40">
            <p class="text-sm">Aligned to start</p>
          </PopoverContent>
        </Popover>
        <Popover placement="bottom">
          <PopoverTrigger as={Button} variant="outline" size="sm">
            Center
          </PopoverTrigger>
          <PopoverContent class="w-40">
            <p class="text-sm">Aligned to center</p>
          </PopoverContent>
        </Popover>
        <Popover placement="bottom-end">
          <PopoverTrigger as={Button} variant="outline" size="sm">
            End
          </PopoverTrigger>
          <PopoverContent class="w-40">
            <p class="text-sm">Aligned to end</p>
          </PopoverContent>
        </Popover>
      </div>
    </Example>
  )
}

function PopoverWithForm() {
  return (
    <Example title="With Form">
      <Popover>
        <PopoverTrigger as={Button} variant="outline">
          Open Popover
        </PopoverTrigger>
        <PopoverContent class="w-64">
          <PopoverHeader>
            <PopoverTitle>Dimensions</PopoverTitle>
            <PopoverDescription>Set the dimensions for the layer.</PopoverDescription>
          </PopoverHeader>
          <div class="grid gap-4">
            <div class="grid grid-cols-3 items-center gap-4">
              <label class="text-sm">Width</label>
              <input class="col-span-2 h-8 rounded-md border border-input bg-transparent px-3 text-sm" value="100%" />
            </div>
            <div class="grid grid-cols-3 items-center gap-4">
              <label class="text-sm">Height</label>
              <input class="col-span-2 h-8 rounded-md border border-input bg-transparent px-3 text-sm" value="25px" />
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </Example>
  )
}

function PopoverInDialog() {
  return (
    <Example title="In Dialog">
      <Dialog>
        <DialogTrigger as={Button} variant="outline">
          Open Dialog
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Popover Example</DialogTitle>
            <DialogDescription>Click the button below to see the popover.</DialogDescription>
          </DialogHeader>
          <Popover>
            <PopoverTrigger as={Button} variant="outline" class="w-fit">
              Open Popover
            </PopoverTrigger>
            <PopoverContent>
              <PopoverHeader>
                <PopoverTitle>Popover in Dialog</PopoverTitle>
                <PopoverDescription>
                  This popover appears inside a dialog. Click the button to open it.
                </PopoverDescription>
              </PopoverHeader>
            </PopoverContent>
          </Popover>
        </DialogContent>
      </Dialog>
    </Example>
  )
}
