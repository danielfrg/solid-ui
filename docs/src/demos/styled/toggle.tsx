import { Toggle } from "@danielfrg/solid-ui/toggle"
import { Bold, Italic, Underline } from "lucide-solid"

export function ToggleShowcase() {
  return (
    <div class="flex flex-col gap-10">
      <section class="flex flex-col gap-3">
        <h3 class="text-sm font-semibold">Variants</h3>
        <div class="flex flex-wrap items-center gap-2">
          <Toggle aria-label="Toggle bold">
            <Bold class="size-4" />
          </Toggle>
          <Toggle variant="outline" aria-label="Toggle italic">
            <Italic class="size-4" />
          </Toggle>
        </div>
      </section>

      <section class="flex flex-col gap-3">
        <h3 class="text-sm font-semibold">Sizes</h3>
        <div class="flex flex-wrap items-center gap-2">
          <Toggle size="sm" variant="outline" aria-label="Toggle bold sm">
            <Bold class="size-4" />
          </Toggle>
          <Toggle variant="outline" aria-label="Toggle bold default">
            <Bold class="size-4" />
          </Toggle>
          <Toggle size="lg" variant="outline" aria-label="Toggle bold lg">
            <Bold class="size-4" />
          </Toggle>
        </div>
      </section>

      <section class="flex flex-col gap-3">
        <h3 class="text-sm font-semibold">With Text</h3>
        <div class="flex flex-wrap items-center gap-2">
          <Toggle variant="outline" aria-label="Toggle italic">
            <Italic class="size-4" />
            Italic
          </Toggle>
          <Toggle variant="outline" aria-label="Toggle bold">
            <Bold class="size-4" />
            Bold
          </Toggle>
          <Toggle variant="outline" aria-label="Toggle underline">
            <Underline class="size-4" />
            Underline
          </Toggle>
        </div>
      </section>

      <section class="flex flex-col gap-3">
        <h3 class="text-sm font-semibold">Disabled</h3>
        <div class="flex flex-wrap items-center gap-2">
          <Toggle disabled aria-label="Toggle bold disabled">
            <Bold class="size-4" />
          </Toggle>
          <Toggle variant="outline" disabled aria-label="Toggle italic disabled">
            <Italic class="size-4" />
          </Toggle>
        </div>
      </section>
    </div>
  )
}
