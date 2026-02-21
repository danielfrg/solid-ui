import { Separator } from "@danielfrg/ui/separator"

export function SeparatorShowcase() {
  return (
    <div class="flex flex-col gap-8">
      <section class="flex flex-col gap-4">
        <div>
          <h2 class="text-xl font-semibold tracking-tight text-foreground">Horizontal</h2>
          <p class="text-sm text-muted-foreground mt-1">Separators visually divide content into sections.</p>
        </div>
        <div>
          <div class="space-y-1">
            <h4 class="text-sm font-medium leading-none">danielfrg/ui</h4>
            <p class="text-sm text-muted-foreground">An open-source UI component library for SolidJS.</p>
          </div>
          <Separator class="my-4" />
          <div class="flex h-5 items-center gap-4 text-sm">
            <div>Docs</div>
            <Separator orientation="vertical" />
            <div>Source</div>
            <Separator orientation="vertical" />
            <div>Blog</div>
          </div>
        </div>
      </section>
    </div>
  )
}
