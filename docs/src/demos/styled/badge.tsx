import { Badge } from "@danielfrg/ui/badge"

export function BadgeShowcase() {
  return (
    <div class="flex flex-col gap-8">
      <section class="flex flex-col gap-4">
        <div>
          <h2 class="text-xl font-semibold tracking-tight text-foreground">Variants</h2>
          <p class="text-sm text-muted-foreground mt-1">Badges come in multiple variants to convey different states.</p>
        </div>
        <div class="flex flex-wrap items-center gap-3">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="ghost">Ghost</Badge>
          <Badge variant="link">Link</Badge>
        </div>
      </section>
    </div>
  )
}
