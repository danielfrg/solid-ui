import { RadioGroup, RadioGroupItem, RadioGroupItemLabel } from "@danielfrg/solid-ui/radio-group"
import { ExampleWrapper, Example } from "@/components/example"

export default function RadioGroupExample() {
  return (
    <ExampleWrapper>
      <RadioGroupBasic />
      <RadioGroupWithDescriptions />
      <RadioGroupWithFieldSet />
      <RadioGroupGrid />
      <RadioGroupDisabled />
      <RadioGroupInvalid />
    </ExampleWrapper>
  )
}

function RadioGroupBasic() {
  return (
    <Example title="Basic">
      <RadioGroup defaultValue="comfortable">
        <RadioGroupItem value="default" id="r1">
          <RadioGroupItemLabel class="font-normal">Default</RadioGroupItemLabel>
        </RadioGroupItem>
        <RadioGroupItem value="comfortable" id="r2">
          <RadioGroupItemLabel class="font-normal">Comfortable</RadioGroupItemLabel>
        </RadioGroupItem>
        <RadioGroupItem value="compact" id="r3">
          <RadioGroupItemLabel class="font-normal">Compact</RadioGroupItemLabel>
        </RadioGroupItem>
      </RadioGroup>
    </Example>
  )
}

function RadioGroupWithDescriptions() {
  return (
    <Example title="With Descriptions">
      <RadioGroup defaultValue="plus" class="grid gap-3">
        <label class="relative flex cursor-pointer flex-col gap-2 rounded-lg border p-4 has-[:checked]:border-primary has-[:checked]:bg-primary/5">
          <RadioGroupItem value="plus" id="plus-plan" class="absolute right-4 top-4">
            <div class="sr-only">Plus</div>
          </RadioGroupItem>
          <div class="pr-8">
            <div class="font-medium">Plus</div>
            <div class="text-sm text-muted-foreground">For individuals and small teams</div>
          </div>
        </label>
        <label class="relative flex cursor-pointer flex-col gap-2 rounded-lg border p-4 has-[:checked]:border-primary has-[:checked]:bg-primary/5">
          <RadioGroupItem value="pro" id="pro-plan" class="absolute right-4 top-4">
            <div class="sr-only">Pro</div>
          </RadioGroupItem>
          <div class="pr-8">
            <div class="font-medium">Pro</div>
            <div class="text-sm text-muted-foreground">For growing businesses</div>
          </div>
        </label>
        <label class="relative flex cursor-pointer flex-col gap-2 rounded-lg border p-4 has-[:checked]:border-primary has-[:checked]:bg-primary/5">
          <RadioGroupItem value="enterprise" id="enterprise-plan" class="absolute right-4 top-4">
            <div class="sr-only">Enterprise</div>
          </RadioGroupItem>
          <div class="pr-8">
            <div class="font-medium">Enterprise</div>
            <div class="text-sm text-muted-foreground">For large teams and enterprises</div>
          </div>
        </label>
      </RadioGroup>
    </Example>
  )
}

function RadioGroupWithFieldSet() {
  return (
    <Example title="With FieldSet">
      <fieldset class="flex flex-col gap-3 rounded-md border p-4">
        <legend class="text-sm font-medium">Battery Level</legend>
        <p class="text-xs text-muted-foreground">Choose your preferred battery level.</p>
        <RadioGroup defaultValue="medium">
          <RadioGroupItem value="high" id="battery-high">
            <RadioGroupItemLabel class="font-normal">High</RadioGroupItemLabel>
          </RadioGroupItem>
          <RadioGroupItem value="medium" id="battery-medium">
            <RadioGroupItemLabel class="font-normal">Medium</RadioGroupItemLabel>
          </RadioGroupItem>
          <RadioGroupItem value="low" id="battery-low">
            <RadioGroupItemLabel class="font-normal">Low</RadioGroupItemLabel>
          </RadioGroupItem>
        </RadioGroup>
      </fieldset>
    </Example>
  )
}

function RadioGroupGrid() {
  return (
    <Example title="Grid Layout">
      <RadioGroup defaultValue="medium" class="grid grid-cols-2 gap-2">
        <RadioGroupItem
          value="small"
          id="size-small"
          class="rounded-md border p-3 data-[checked]:border-primary data-[checked]:bg-primary/5"
        >
          <div class="font-medium">Small</div>
        </RadioGroupItem>
        <RadioGroupItem
          value="medium"
          id="size-medium"
          class="rounded-md border p-3 data-[checked]:border-primary data-[checked]:bg-primary/5"
        >
          <div class="font-medium">Medium</div>
        </RadioGroupItem>
        <RadioGroupItem
          value="large"
          id="size-large"
          class="rounded-md border p-3 data-[checked]:border-primary data-[checked]:bg-primary/5"
        >
          <div class="font-medium">Large</div>
        </RadioGroupItem>
        <RadioGroupItem
          value="xlarge"
          id="size-xlarge"
          class="rounded-md border p-3 data-[checked]:border-primary data-[checked]:bg-primary/5"
        >
          <div class="font-medium">X-Large</div>
        </RadioGroupItem>
      </RadioGroup>
    </Example>
  )
}

function RadioGroupDisabled() {
  return (
    <Example title="Disabled">
      <RadioGroup defaultValue="option2" disabled>
        <RadioGroupItem value="option1" id="disabled-1">
          <RadioGroupItemLabel class="font-normal text-muted-foreground">Option 1</RadioGroupItemLabel>
        </RadioGroupItem>
        <RadioGroupItem value="option2" id="disabled-2">
          <RadioGroupItemLabel class="font-normal text-muted-foreground">Option 2</RadioGroupItemLabel>
        </RadioGroupItem>
        <RadioGroupItem value="option3" id="disabled-3">
          <RadioGroupItemLabel class="font-normal text-muted-foreground">Option 3</RadioGroupItemLabel>
        </RadioGroupItem>
      </RadioGroup>
    </Example>
  )
}

function RadioGroupInvalid() {
  return (
    <Example title="Invalid">
      <fieldset class="flex flex-col gap-3 rounded-md border p-4">
        <legend class="text-sm font-medium">Notification Preferences</legend>
        <p class="text-xs text-muted-foreground">Choose how you want to receive notifications.</p>
        <RadioGroup defaultValue="email">
          <RadioGroupItem value="email" id="invalid-email" aria-invalid="true">
            <RadioGroupItemLabel class="font-normal">Email only</RadioGroupItemLabel>
          </RadioGroupItem>
          <RadioGroupItem value="sms" id="invalid-sms" aria-invalid="true">
            <RadioGroupItemLabel class="font-normal">SMS only</RadioGroupItemLabel>
          </RadioGroupItem>
          <RadioGroupItem value="both" id="invalid-both" aria-invalid="true">
            <RadioGroupItemLabel class="font-normal">Both Email &amp; SMS</RadioGroupItemLabel>
          </RadioGroupItem>
        </RadioGroup>
      </fieldset>
    </Example>
  )
}
