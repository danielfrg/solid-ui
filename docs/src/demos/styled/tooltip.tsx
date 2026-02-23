import { Button } from "@danielfrg/solid-ui/button"
import { Tooltip, TooltipTrigger, TooltipContent } from "@danielfrg/solid-ui/tooltip"
import { Plus } from "lucide-solid"
import { For } from "solid-js"

export function TooltipShowcase() {
  return (
    <div class="flex flex-col gap-10">
      <section class="flex flex-col gap-3">
        <h3 class="text-sm font-semibold">Basic</h3>
        <div class="flex flex-wrap items-center gap-2">
          <Tooltip openDelay={200}>
            <TooltipTrigger as={Button} variant="outline">
              Hover me
            </TooltipTrigger>
            <TooltipContent>
              <p>Add to library</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip openDelay={200}>
            <TooltipTrigger as={Button} variant="ghost">
              Ghost trigger
            </TooltipTrigger>
            <TooltipContent>
              <p>This is a tooltip</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip openDelay={200}>
            <TooltipTrigger as={Button} variant="outline" size="icon" aria-label="Add">
              <Plus class="size-4" />
            </TooltipTrigger>
            <TooltipContent>
              <p>Add new item</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </section>

      <section class="flex flex-col gap-3">
        <h3 class="text-sm font-semibold">Sides</h3>
        <div class="flex flex-wrap gap-2">
          <For each={["top", "right", "bottom", "left"] as const}>
            {(side) => (
              <Tooltip openDelay={100}>
                <TooltipTrigger as={Button} variant="outline" class="capitalize">
                  {side}
                </TooltipTrigger>
                <TooltipContent side={side}>
                  <p>Tooltip on the {side}</p>
                </TooltipContent>
              </Tooltip>
            )}
          </For>
        </div>
      </section>
    </div>
  )
}
