import { Switch, SwitchLabel } from "@danielfrg/solid-ui-nova/switch"
import { ExampleWrapper, Example } from "@/components/example"

export default function SwitchExample() {
  return (
    <ExampleWrapper>
      <SwitchBasic />
      <SwitchWithDescription />
      <SwitchDisabled />
      <SwitchSizes />
    </ExampleWrapper>
  )
}

function SwitchBasic() {
  return (
    <Example title="Basic">
      <Switch>
        <SwitchLabel>Airplane Mode</SwitchLabel>
      </Switch>
    </Example>
  )
}

function SwitchWithDescription() {
  return (
    <Example title="With Description">
      <div class="flex flex-col gap-3">
        <Switch defaultChecked class="rounded-lg border p-4 data-[checked]:border-primary data-[checked]:bg-primary/5">
          <div class="flex flex-col gap-1 pr-10">
            <span class="text-sm font-medium">Share across devices</span>
            <span class="text-sm text-muted-foreground">
              Focus is shared across devices, and turns off when you leave the app.
            </span>
          </div>
        </Switch>
        <Switch class="rounded-lg border p-4 data-[checked]:border-primary data-[checked]:bg-primary/5">
          <div class="flex flex-col gap-1 pr-10">
            <span class="text-sm font-medium">Marketing emails</span>
            <span class="text-sm text-muted-foreground">Receive emails about new products, features, and more.</span>
          </div>
        </Switch>
      </div>
    </Example>
  )
}

function SwitchDisabled() {
  return (
    <Example title="Disabled">
      <div class="flex flex-col gap-4">
        <Switch disabled>
          <SwitchLabel class="text-muted-foreground">Disabled (Unchecked)</SwitchLabel>
        </Switch>
        <Switch disabled defaultChecked>
          <SwitchLabel class="text-muted-foreground">Disabled (Checked)</SwitchLabel>
        </Switch>
      </div>
    </Example>
  )
}

function SwitchSizes() {
  return (
    <Example title="Sizes">
      <div class="flex flex-col gap-4">
        <Switch data-size="sm">
          <SwitchLabel>Small</SwitchLabel>
        </Switch>
        <Switch data-size="default">
          <SwitchLabel>Default</SwitchLabel>
        </Switch>
      </div>
    </Example>
  )
}
