import { ToggleGroup, ToggleGroupItem } from "@danielfrg/solid-ui/toggle-group"
import { AlignCenter, AlignLeft, AlignRight, Bold, Italic, Underline } from "lucide-solid"

export function ToggleGroupShowcase() {
  return (
    <div class="flex flex-col gap-10">
      <section class="flex flex-col gap-3">
        <h3 class="text-sm font-semibold">Single Selection</h3>
        <ToggleGroup defaultValue="center">
          <ToggleGroupItem value="left" aria-label="Align left">
            <AlignLeft class="size-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="center" aria-label="Align center">
            <AlignCenter class="size-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="right" aria-label="Align right">
            <AlignRight class="size-4" />
          </ToggleGroupItem>
        </ToggleGroup>
      </section>

      <section class="flex flex-col gap-3">
        <h3 class="text-sm font-semibold">Outline Variant</h3>
        <ToggleGroup variant="outline" multiple defaultValue={["bold"]}>
          <ToggleGroupItem value="bold" aria-label="Toggle bold">
            <Bold class="size-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="italic" aria-label="Toggle italic">
            <Italic class="size-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="underline" aria-label="Toggle underline">
            <Underline class="size-4" />
          </ToggleGroupItem>
        </ToggleGroup>
      </section>

      <section class="flex flex-col gap-3">
        <h3 class="text-sm font-semibold">Sizes</h3>
        <div class="flex flex-col gap-4">
          <ToggleGroup size="sm" variant="outline" defaultValue="center">
            <ToggleGroupItem value="left" aria-label="Align left"><AlignLeft class="size-4" /></ToggleGroupItem>
            <ToggleGroupItem value="center" aria-label="Align center"><AlignCenter class="size-4" /></ToggleGroupItem>
            <ToggleGroupItem value="right" aria-label="Align right"><AlignRight class="size-4" /></ToggleGroupItem>
          </ToggleGroup>
          <ToggleGroup size="lg" variant="outline" defaultValue="center">
            <ToggleGroupItem value="left" aria-label="Align left"><AlignLeft class="size-4" /></ToggleGroupItem>
            <ToggleGroupItem value="center" aria-label="Align center"><AlignCenter class="size-4" /></ToggleGroupItem>
            <ToggleGroupItem value="right" aria-label="Align right"><AlignRight class="size-4" /></ToggleGroupItem>
          </ToggleGroup>
        </div>
      </section>

      <section class="flex flex-col gap-3">
        <h3 class="text-sm font-semibold">Multiple Selection</h3>
        <ToggleGroup multiple defaultValue={["bold", "italic"]}>
          <ToggleGroupItem value="bold" aria-label="Toggle bold">
            <Bold class="size-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="italic" aria-label="Toggle italic">
            <Italic class="size-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="underline" aria-label="Toggle underline">
            <Underline class="size-4" />
          </ToggleGroupItem>
        </ToggleGroup>
      </section>

      <section class="flex flex-col gap-3">
        <h3 class="text-sm font-semibold">Disabled</h3>
        <ToggleGroup disabled defaultValue="center">
          <ToggleGroupItem value="left" aria-label="Align left">
            <AlignLeft class="size-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="center" aria-label="Align center">
            <AlignCenter class="size-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="right" aria-label="Align right">
            <AlignRight class="size-4" />
          </ToggleGroupItem>
        </ToggleGroup>
      </section>
    </div>
  )
}
