import { Button } from "@danielfrg/ui/button"
import { Popover, PopoverTrigger, PopoverContent } from "@danielfrg/ui/popover"

export function PopoverShowcase() {
  return (
    <div class="flex flex-col gap-8">
      <section class="flex flex-col gap-4">
        <div>
          <h2 class="text-xl font-semibold tracking-tight text-foreground">Basic Popover</h2>
          <p class="text-sm text-muted-foreground mt-1">Click the trigger to reveal popover content.</p>
        </div>
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
                  <label class="text-sm">Height</label>
                  <input class="col-span-2 h-8 rounded-md border bg-transparent px-3 text-sm" value="25px" />
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </section>
    </div>
  )
}
