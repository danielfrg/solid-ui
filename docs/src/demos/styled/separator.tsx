import { Separator } from "@danielfrg/ui/separator"

export function SeparatorShowcase() {
  return (
    <div class="flex flex-col gap-12">
      <section class="flex flex-col gap-4">
        <h3 class="text-sm font-semibold">Horizontal</h3>
        <div class="flex max-w-sm flex-col gap-4 text-sm">
          <div class="flex flex-col gap-1.5">
            <div class="leading-none font-medium">danielfrg/ui</div>
            <div class="text-muted-foreground">An open-source UI component library for SolidJS.</div>
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
        <h3 class="text-sm font-semibold">In a List</h3>
        <div class="flex w-full max-w-sm flex-col gap-2 text-sm">
          <dl class="flex items-center justify-between">
            <dt>Subtotal</dt>
            <dd class="text-muted-foreground">$240.00</dd>
          </dl>
          <Separator />
          <dl class="flex items-center justify-between">
            <dt>Shipping</dt>
            <dd class="text-muted-foreground">$12.00</dd>
          </dl>
          <Separator />
          <dl class="flex items-center justify-between">
            <dt class="font-medium">Total</dt>
            <dd class="font-medium">$252.00</dd>
          </dl>
        </div>
      </section>

      <section class="flex flex-col gap-4">
        <h3 class="text-sm font-semibold">Vertical Menu</h3>
        <div class="flex items-center gap-4 text-sm">
          <div class="flex flex-col gap-1">
            <span class="font-medium">Settings</span>
            <span class="text-muted-foreground text-xs">Manage preferences</span>
          </div>
          <Separator orientation="vertical" />
          <div class="flex flex-col gap-1">
            <span class="font-medium">Account</span>
            <span class="text-muted-foreground text-xs">Profile & security</span>
          </div>
          <Separator orientation="vertical" />
          <div class="flex flex-col gap-1">
            <span class="font-medium">Help</span>
            <span class="text-muted-foreground text-xs">Support & docs</span>
          </div>
        </div>
      </section>
    </div>
  )
}
