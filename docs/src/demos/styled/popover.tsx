import { Button } from "@danielfrg/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@danielfrg/ui/dialog"
import { Popover, PopoverTrigger, PopoverContent } from "@danielfrg/ui/popover"

export function PopoverShowcase() {
  return (
    <div class="flex flex-col gap-12">
      <section class="flex flex-col gap-4">
        <h3 class="text-sm font-semibold">Basic</h3>
        <div class="flex flex-wrap items-center gap-3">
          <Popover>
            <PopoverTrigger as={Button} variant="outline">
              Open Popover
            </PopoverTrigger>
            <PopoverContent>
              <div class="flex flex-col gap-2">
                <h4 class="font-medium leading-none">Dimensions</h4>
                <p class="text-sm text-muted-foreground">Set the dimensions for the layer.</p>
              </div>
              <div class="grid gap-2 mt-4">
                <div class="grid grid-cols-3 items-center gap-4">
                  <label class="text-sm">Width</label>
                  <input class="col-span-2 h-8 rounded-md border bg-transparent px-3 text-sm" value="100%" />
                </div>
                <div class="grid grid-cols-3 items-center gap-4">
                  <label class="text-sm">Max. width</label>
                  <input class="col-span-2 h-8 rounded-md border bg-transparent px-3 text-sm" value="300px" />
                </div>
                <div class="grid grid-cols-3 items-center gap-4">
                  <label class="text-sm">Height</label>
                  <input class="col-span-2 h-8 rounded-md border bg-transparent px-3 text-sm" value="25px" />
                </div>
                <div class="grid grid-cols-3 items-center gap-4">
                  <label class="text-sm">Max. height</label>
                  <input class="col-span-2 h-8 rounded-md border bg-transparent px-3 text-sm" value="none" />
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </section>

      <section class="flex flex-col gap-4">
        <h3 class="text-sm font-semibold">Alignments</h3>
        <div class="flex flex-wrap gap-4">
          <Popover>
            <PopoverTrigger as={Button} variant="outline" size="sm">
              Start
            </PopoverTrigger>
            <PopoverContent class="w-40">Aligned to start</PopoverContent>
          </Popover>
          <Popover>
            <PopoverTrigger as={Button} variant="outline" size="sm">
              Center
            </PopoverTrigger>
            <PopoverContent class="w-40">Aligned to center</PopoverContent>
          </Popover>
          <Popover>
            <PopoverTrigger as={Button} variant="outline" size="sm">
              End
            </PopoverTrigger>
            <PopoverContent class="w-40">Aligned to end</PopoverContent>
          </Popover>
        </div>
      </section>

      <section class="flex flex-col gap-4">
        <h3 class="text-sm font-semibold">Inside a Dialog</h3>
        <Dialog>
          <DialogTrigger as={Button} variant="outline">
            Open Dialog
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Popover in Dialog</DialogTitle>
              <DialogDescription>Click the button below to open a popover inside this dialog.</DialogDescription>
            </DialogHeader>
            <Popover>
              <PopoverTrigger as={Button} variant="outline">
                Open Popover
              </PopoverTrigger>
              <PopoverContent>
                <div class="flex flex-col gap-2">
                  <h4 class="font-medium leading-none">Settings</h4>
                  <p class="text-sm text-muted-foreground">Adjust your preferences here.</p>
                </div>
                <div class="grid gap-2 mt-4">
                  <div class="grid grid-cols-3 items-center gap-4">
                    <label class="text-sm">Width</label>
                    <input class="col-span-2 h-8 rounded-md border bg-transparent px-3 text-sm" value="100%" />
                  </div>
                  <div class="grid grid-cols-3 items-center gap-4">
                    <label class="text-sm">Height</label>
                    <input class="col-span-2 h-8 rounded-md border bg-transparent px-3 text-sm" value="25px" />
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </DialogContent>
        </Dialog>
      </section>
    </div>
  )
}
