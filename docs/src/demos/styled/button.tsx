import { Button } from "@danielfrg/solid-ui/button"
import { ArrowRight, Check, Loader2, Mail, Plus, Send, Trash2 } from "lucide-solid"

export function ButtonShowcase() {
  return (
    <div class="flex flex-col gap-10">
      <section class="flex flex-col gap-3">
        <h3 class="text-sm font-semibold">Variants</h3>
        <div class="flex flex-wrap items-center gap-2">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
      </section>

      <section class="flex flex-col gap-3">
        <h3 class="text-sm font-semibold">Sizes</h3>
        <div class="flex flex-wrap items-center gap-2">
          <Button size="xs">Extra Small</Button>
          <Button size="sm">Small</Button>
          <Button>Default</Button>
          <Button size="lg">Large</Button>
        </div>
      </section>

      <section class="flex flex-col gap-3">
        <h3 class="text-sm font-semibold">With Icons</h3>
        <div class="flex flex-wrap items-center gap-2">
          <Button>
            <Mail class="size-4" />
            Login with Email
          </Button>
          <Button variant="outline">
            <Send class="size-4" />
            Send
          </Button>
          <Button variant="secondary">
            Next
            <ArrowRight class="size-4" />
          </Button>
        </div>
      </section>

      <section class="flex flex-col gap-3">
        <h3 class="text-sm font-semibold">Icon Only</h3>
        <div class="flex flex-wrap items-center gap-2">
          <Button variant="outline" size="icon-xs" aria-label="Add">
            <Plus class="size-4" />
          </Button>
          <Button variant="outline" size="icon-sm" aria-label="Add">
            <Plus class="size-4" />
          </Button>
          <Button variant="outline" size="icon" aria-label="Add">
            <Plus class="size-4" />
          </Button>
          <Button variant="outline" size="icon-lg" aria-label="Add">
            <Plus class="size-4" />
          </Button>
        </div>
      </section>

      <section class="flex flex-col gap-3">
        <h3 class="text-sm font-semibold">Disabled</h3>
        <div class="flex flex-wrap items-center gap-2">
          <Button disabled>Default</Button>
          <Button variant="outline" disabled>Outline</Button>
          <Button variant="destructive" disabled>
            <Trash2 class="size-4" />
            Delete
          </Button>
        </div>
      </section>

      <section class="flex flex-col gap-3">
        <h3 class="text-sm font-semibold">Loading</h3>
        <div class="flex flex-wrap items-center gap-2">
          <Button disabled>
            <Loader2 class="size-4 animate-spin" />
            Please wait
          </Button>
          <Button variant="outline" disabled>
            <Loader2 class="size-4 animate-spin" />
            Saving...
          </Button>
          <Button variant="secondary" disabled>
            <Check class="size-4" />
            Done
          </Button>
        </div>
      </section>
    </div>
  )
}
