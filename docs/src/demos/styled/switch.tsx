import { Switch, SwitchLabel } from "@danielfrg/ui"

export function SwitchShowcase() {
  return (
    <div class="flex flex-col gap-12">
      <section class="flex flex-col gap-4">
        <h3 class="text-sm font-semibold">Basic</h3>
        <Switch>
          <SwitchLabel>Airplane Mode</SwitchLabel>
        </Switch>
      </section>

      <section class="flex flex-col gap-4">
        <h3 class="text-sm font-semibold">With Description</h3>
        <Switch>
          <div class="flex flex-col">
            <SwitchLabel>Share across devices</SwitchLabel>
            <p class="text-muted-foreground text-sm">
              Focus is shared across devices, and turns off when you leave the app.
            </p>
          </div>
        </Switch>
      </section>

      <section class="flex flex-col gap-4">
        <h3 class="text-sm font-semibold">Disabled</h3>
        <div class="flex flex-col gap-6">
          <Switch disabled>
            <SwitchLabel>Disabled (Unchecked)</SwitchLabel>
          </Switch>
          <Switch defaultChecked disabled>
            <SwitchLabel>Disabled (Checked)</SwitchLabel>
          </Switch>
        </div>
      </section>

      <section class="flex flex-col gap-4">
        <h3 class="text-sm font-semibold">Sizes</h3>
        <div class="flex flex-col gap-6">
          <Switch class="origin-left scale-90">
            <SwitchLabel>Small</SwitchLabel>
          </Switch>
          <Switch>
            <SwitchLabel>Default</SwitchLabel>
          </Switch>
        </div>
      </section>
    </div>
  )
}
