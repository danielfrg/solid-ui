import { Toggle } from "@danielfrg/solid-ui/toggle"
import { Bold, Italic, Underline } from "lucide-solid"

export function ToggleShowcase() {
  return (
    <div class="flex flex-col gap-8">
      <section class="flex flex-col gap-4">
        <div>
          <h2 class="text-xl font-semibold tracking-tight text-foreground">Variants</h2>
          <p class="text-sm text-muted-foreground mt-1">Toggle buttons can be default (no border) or outline.</p>
        </div>
        <div class="flex flex-wrap items-center gap-3">
          <Toggle aria-label="Toggle bold">
            <Bold />
          </Toggle>
          <Toggle variant="outline" aria-label="Toggle italic">
            <Italic />
          </Toggle>
        </div>
      </section>

      <section class="flex flex-col gap-4">
        <div>
          <h2 class="text-xl font-semibold tracking-tight text-foreground">Sizes</h2>
          <p class="text-sm text-muted-foreground mt-1">Available in small, default, and large sizes.</p>
        </div>
        <div class="flex flex-wrap items-center gap-3">
          <Toggle size="sm" variant="outline" aria-label="Toggle bold">
            <Bold />
          </Toggle>
          <Toggle variant="outline" aria-label="Toggle bold">
            <Bold />
          </Toggle>
          <Toggle size="lg" variant="outline" aria-label="Toggle bold">
            <Bold />
          </Toggle>
        </div>
      </section>

      <section class="flex flex-col gap-4">
        <div>
          <h2 class="text-xl font-semibold tracking-tight text-foreground">With Text</h2>
          <p class="text-sm text-muted-foreground mt-1">Toggles can include text alongside icons.</p>
        </div>
        <div class="flex flex-wrap items-center gap-3">
          <Toggle variant="outline" aria-label="Toggle bold">
            <Bold /> Bold
          </Toggle>
          <Toggle variant="outline" aria-label="Toggle italic">
            <Italic /> Italic
          </Toggle>
          <Toggle variant="outline" aria-label="Toggle underline">
            <Underline /> Underline
          </Toggle>
        </div>
      </section>

      <section class="flex flex-col gap-4">
        <div>
          <h2 class="text-xl font-semibold tracking-tight text-foreground">Disabled</h2>
          <p class="text-sm text-muted-foreground mt-1">Toggles can be disabled to prevent interaction.</p>
        </div>
        <div class="flex flex-wrap items-center gap-3">
          <Toggle disabled aria-label="Toggle bold">
            <Bold />
          </Toggle>
          <Toggle variant="outline" disabled aria-label="Toggle underline">
            <Underline />
          </Toggle>
        </div>
      </section>
    </div>
  )
}
