import { Separator } from "@danielfrg/solid-ui/separator"

export function SeparatorShowcase() {
  return (
    <div class="flex flex-col gap-12">
      <section class="flex flex-col gap-4">
        <h3 class="text-sm font-semibold">Horizontal</h3>
        <div class="flex flex-col gap-4 text-sm">
          <div class="flex flex-col gap-1">
            <div class="leading-none font-medium">shadcn/ui</div>
            <div class="text-muted-foreground">The Foundation for your Design System</div>
          </div>
          <Separator />
          <div>A set of beautifully designed components that you can customize, extend, and build on.</div>
        </div>
      </section>

      <section class="flex flex-col gap-4">
        <h3 class="text-sm font-semibold">Vertical</h3>
        <div class="flex h-5 items-center gap-4 text-sm">
          <div>Blog</div>
          <Separator orientation="vertical" />
          <div>Docs</div>
          <Separator orientation="vertical" />
          <div>Source</div>
        </div>
      </section>

      <section class="flex flex-col gap-4">
        <h3 class="text-sm font-semibold">Vertical Menu</h3>
        <div class="flex items-center gap-2 text-sm md:gap-4">
          <div class="flex flex-col gap-1">
            <span class="font-medium">Settings</span>
            <span class="text-xs text-muted-foreground">Manage preferences</span>
          </div>
          <Separator orientation="vertical" />
          <div class="flex flex-col gap-1">
            <span class="font-medium">Account</span>
            <span class="text-xs text-muted-foreground">Profile & security</span>
          </div>
          <Separator orientation="vertical" />
          <div class="flex flex-col gap-1">
            <span class="font-medium">Help</span>
            <span class="text-xs text-muted-foreground">Support & docs</span>
          </div>
        </div>
      </section>

      <section class="flex flex-col gap-4">
        <h3 class="text-sm font-semibold">In List</h3>
        <div class="flex flex-col gap-2 text-sm">
          <dl class="flex items-center justify-between">
            <dt>Item 1</dt>
            <dd class="text-muted-foreground">Value 1</dd>
          </dl>
          <Separator />
          <dl class="flex items-center justify-between">
            <dt>Item 2</dt>
            <dd class="text-muted-foreground">Value 2</dd>
          </dl>
          <Separator />
          <dl class="flex items-center justify-between">
            <dt>Item 3</dt>
            <dd class="text-muted-foreground">Value 3</dd>
          </dl>
        </div>
      </section>
    </div>
  )
}
