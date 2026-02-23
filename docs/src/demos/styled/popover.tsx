import { Button } from "@danielfrg/solid-ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@danielfrg/solid-ui/popover"

export function PopoverShowcase() {
  return (
    <div class="flex flex-col gap-10">
      <section class="flex flex-col gap-3">
        <h3 class="text-sm font-semibold">Basic</h3>
        <Popover>
          <PopoverTrigger as={Button} variant="outline">
            Open popover
          </PopoverTrigger>
          <PopoverContent class="w-80">
            <div class="grid gap-4">
              <div class="space-y-2">
                <h4 class="leading-none font-medium">Dimensions</h4>
                <p class="text-muted-foreground text-sm">Set the dimensions for the layer.</p>
              </div>
              <div class="grid gap-2">
                <div class="grid grid-cols-3 items-center gap-4">
                  <label class="text-sm">Width</label>
                  <input class="col-span-2 h-8 rounded-md border border-input bg-transparent px-3 text-sm" value="100%" />
                </div>
                <div class="grid grid-cols-3 items-center gap-4">
                  <label class="text-sm">Max. width</label>
                  <input class="col-span-2 h-8 rounded-md border border-input bg-transparent px-3 text-sm" value="300px" />
                </div>
                <div class="grid grid-cols-3 items-center gap-4">
                  <label class="text-sm">Height</label>
                  <input class="col-span-2 h-8 rounded-md border border-input bg-transparent px-3 text-sm" value="25px" />
                </div>
                <div class="grid grid-cols-3 items-center gap-4">
                  <label class="text-sm">Max. height</label>
                  <input class="col-span-2 h-8 rounded-md border border-input bg-transparent px-3 text-sm" value="none" />
                </div>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </section>

      <section class="flex flex-col gap-3">
        <h3 class="text-sm font-semibold">Alignment</h3>
        <div class="flex flex-wrap gap-2">
          <Popover>
            <PopoverTrigger as={Button} variant="outline">Start</PopoverTrigger>
            <PopoverContent align="start" class="w-60">
              <p class="text-sm">This popover is aligned to the start.</p>
            </PopoverContent>
          </Popover>
          <Popover>
            <PopoverTrigger as={Button} variant="outline">Center</PopoverTrigger>
            <PopoverContent align="center" class="w-60">
              <p class="text-sm">This popover is aligned to the center.</p>
            </PopoverContent>
          </Popover>
          <Popover>
            <PopoverTrigger as={Button} variant="outline">End</PopoverTrigger>
            <PopoverContent align="end" class="w-60">
              <p class="text-sm">This popover is aligned to the end.</p>
            </PopoverContent>
          </Popover>
        </div>
      </section>

      <section class="flex flex-col gap-3">
        <h3 class="text-sm font-semibold">With Form</h3>
        <Popover>
          <PopoverTrigger as={Button} variant="outline">
            Set Dimensions
          </PopoverTrigger>
          <PopoverContent class="w-64" align="start">
            <div class="grid gap-4">
              <div class="space-y-2">
                <h4 class="text-sm font-medium leading-none">Dimensions</h4>
                <p class="text-muted-foreground text-xs">Set width and height for the layer.</p>
              </div>
              <div class="grid gap-3">
                <div class="flex items-center gap-3">
                  <label class="w-16 text-sm">Width</label>
                  <input class="h-8 flex-1 rounded-md border border-input bg-transparent px-3 text-sm" value="100%" />
                </div>
                <div class="flex items-center gap-3">
                  <label class="w-16 text-sm">Height</label>
                  <input class="h-8 flex-1 rounded-md border border-input bg-transparent px-3 text-sm" value="25px" />
                </div>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </section>
    </div>
  )
}
