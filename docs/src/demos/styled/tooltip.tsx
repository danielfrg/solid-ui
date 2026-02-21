import { Button } from "@danielfrg/ui/button"
import { Tooltip, TooltipTrigger, TooltipContent } from "@danielfrg/ui/tooltip"
import { Plus } from "lucide-solid"

export function TooltipShowcase() {
  return (
    <div class="flex flex-col gap-8">
      <section class="flex flex-col gap-4">
        <div>
          <h2 class="text-xl font-semibold tracking-tight text-foreground">Basic Tooltip</h2>
          <p class="text-sm text-muted-foreground mt-1">Hover over a trigger to reveal contextual information.</p>
        </div>
        <div class="flex flex-wrap items-center gap-3">
          <Tooltip openDelay={200}>
            <TooltipTrigger as={Button} variant="outline">
              Hover me
            </TooltipTrigger>
            <TooltipContent>
              <p>This is a tooltip</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip openDelay={200}>
            <TooltipTrigger as={Button} variant="ghost">
              Another one
            </TooltipTrigger>
            <TooltipContent>
              <p>More helpful information</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip openDelay={200}>
            <TooltipTrigger as={Button} variant="outline" size="icon">
              <Plus />
            </TooltipTrigger>
            <TooltipContent>
              <p>Add item</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </section>
    </div>
  )
}
