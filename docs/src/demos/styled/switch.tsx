import { Switch, SwitchLabel } from "@danielfrg/solid-ui/switch"

export function SwitchShowcase() {
  return (
    <div class="flex flex-col gap-10">
      <section class="flex flex-col gap-3">
        <h3 class="text-sm font-semibold">Basic</h3>
        <Switch>
          <SwitchLabel>Airplane Mode</SwitchLabel>
        </Switch>
      </section>

      <section class="flex flex-col gap-3">
        <h3 class="text-sm font-semibold">With Description</h3>
        <div class="flex items-start gap-3">
          <Switch defaultChecked />
          <div class="flex flex-col gap-1">
            <SwitchLabel class="text-sm font-medium">Marketing emails</SwitchLabel>
            <span class="text-xs text-muted-foreground">Receive emails about new products, features, and more.</span>
          </div>
        </div>
      </section>

      <section class="flex flex-col gap-3">
        <h3 class="text-sm font-semibold">Disabled</h3>
        <div class="flex flex-col gap-4">
          <Switch disabled>
            <SwitchLabel class="text-muted-foreground">Disabled off</SwitchLabel>
          </Switch>
          <Switch disabled defaultChecked>
            <SwitchLabel class="text-muted-foreground">Disabled on</SwitchLabel>
          </Switch>
        </div>
      </section>

      <section class="flex flex-col gap-3">
        <h3 class="text-sm font-semibold">Settings List</h3>
        <div class="flex max-w-sm flex-col divide-y rounded-lg border">
          <div class="flex items-center justify-between p-4">
            <div class="flex flex-col gap-1">
              <span class="text-sm font-medium">Push notifications</span>
              <span class="text-xs text-muted-foreground">Send push notifications to your device.</span>
            </div>
            <Switch defaultChecked />
          </div>
          <div class="flex items-center justify-between p-4">
            <div class="flex flex-col gap-1">
              <span class="text-sm font-medium">Email digest</span>
              <span class="text-xs text-muted-foreground">Receive a weekly email digest.</span>
            </div>
            <Switch />
          </div>
          <div class="flex items-center justify-between p-4">
            <div class="flex flex-col gap-1">
              <span class="text-sm font-medium">Sound effects</span>
              <span class="text-xs text-muted-foreground">Play sounds for notifications.</span>
            </div>
            <Switch defaultChecked />
          </div>
        </div>
      </section>
    </div>
  )
}
