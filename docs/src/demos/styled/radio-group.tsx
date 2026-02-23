import { RadioGroup, RadioGroupItem, RadioGroupItemLabel } from "@danielfrg/ui/radio-group"

export function RadioGroupShowcase() {
  return (
    <div class="flex flex-col gap-12">
      <section class="flex flex-col gap-4">
        <h3 class="text-sm font-semibold">Basic</h3>
        <RadioGroup defaultValue="comfortable">
          <RadioGroupItem value="default">
            <RadioGroupItemLabel>Default</RadioGroupItemLabel>
          </RadioGroupItem>
          <RadioGroupItem value="comfortable">
            <RadioGroupItemLabel>Comfortable</RadioGroupItemLabel>
          </RadioGroupItem>
          <RadioGroupItem value="compact">
            <RadioGroupItemLabel>Compact</RadioGroupItemLabel>
          </RadioGroupItem>
        </RadioGroup>
      </section>

      <section class="flex flex-col gap-4">
        <h3 class="text-sm font-semibold">With Descriptions</h3>
        <RadioGroup defaultValue="pro">
          <RadioGroupItem value="starter" class="items-start">
            <div class="grid gap-1">
              <RadioGroupItemLabel>Starter</RadioGroupItemLabel>
              <p class="text-muted-foreground text-sm">For individuals and small projects.</p>
            </div>
          </RadioGroupItem>
          <RadioGroupItem value="pro" class="items-start">
            <div class="grid gap-1">
              <RadioGroupItemLabel>Pro</RadioGroupItemLabel>
              <p class="text-muted-foreground text-sm">For growing teams and businesses.</p>
            </div>
          </RadioGroupItem>
          <RadioGroupItem value="enterprise" class="items-start">
            <div class="grid gap-1">
              <RadioGroupItemLabel>Enterprise</RadioGroupItemLabel>
              <p class="text-muted-foreground text-sm">For large-scale organizations.</p>
            </div>
          </RadioGroupItem>
        </RadioGroup>
      </section>

      <section class="flex flex-col gap-4">
        <h3 class="text-sm font-semibold">Grid Layout</h3>
        <RadioGroup defaultValue="medium" class="grid grid-cols-2 gap-2 max-w-xs">
          <RadioGroupItem value="small">
            <RadioGroupItemLabel>Small</RadioGroupItemLabel>
          </RadioGroupItem>
          <RadioGroupItem value="medium">
            <RadioGroupItemLabel>Medium</RadioGroupItemLabel>
          </RadioGroupItem>
          <RadioGroupItem value="large">
            <RadioGroupItemLabel>Large</RadioGroupItemLabel>
          </RadioGroupItem>
          <RadioGroupItem value="xlarge">
            <RadioGroupItemLabel>X-Large</RadioGroupItemLabel>
          </RadioGroupItem>
        </RadioGroup>
      </section>

      <section class="flex flex-col gap-4">
        <h3 class="text-sm font-semibold">Disabled</h3>
        <RadioGroup disabled defaultValue="option-1">
          <RadioGroupItem value="option-1">
            <RadioGroupItemLabel>Option 1</RadioGroupItemLabel>
          </RadioGroupItem>
          <RadioGroupItem value="option-2">
            <RadioGroupItemLabel>Option 2</RadioGroupItemLabel>
          </RadioGroupItem>
          <RadioGroupItem value="option-3">
            <RadioGroupItemLabel>Option 3</RadioGroupItemLabel>
          </RadioGroupItem>
        </RadioGroup>
      </section>
    </div>
  )
}
