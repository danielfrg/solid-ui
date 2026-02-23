import { RadioGroup, RadioGroupItem, RadioGroupItemLabel } from "@danielfrg/solid-ui/radio-group"

export function RadioGroupShowcase() {
  return (
    <div class="flex flex-col gap-10">
      <section class="flex flex-col gap-3">
        <h3 class="text-sm font-semibold">Basic</h3>
        <RadioGroup defaultValue="comfortable" class="w-fit">
          <div class="flex items-center gap-3">
            <RadioGroupItem value="default" />
            <RadioGroupItemLabel>Default</RadioGroupItemLabel>
          </div>
          <div class="flex items-center gap-3">
            <RadioGroupItem value="comfortable" />
            <RadioGroupItemLabel>Comfortable</RadioGroupItemLabel>
          </div>
          <div class="flex items-center gap-3">
            <RadioGroupItem value="compact" />
            <RadioGroupItemLabel>Compact</RadioGroupItemLabel>
          </div>
        </RadioGroup>
      </section>

      <section class="flex flex-col gap-3">
        <h3 class="text-sm font-semibold">With Descriptions</h3>
        <RadioGroup defaultValue="comfortable" class="w-fit">
          <div class="flex items-start gap-3">
            <RadioGroupItem value="default" class="mt-1" />
            <div class="flex flex-col">
              <RadioGroupItemLabel>Default</RadioGroupItemLabel>
              <span class="text-xs text-muted-foreground">Standard spacing for most use cases.</span>
            </div>
          </div>
          <div class="flex items-start gap-3">
            <RadioGroupItem value="comfortable" class="mt-1" />
            <div class="flex flex-col">
              <RadioGroupItemLabel>Comfortable</RadioGroupItemLabel>
              <span class="text-xs text-muted-foreground">More space between elements.</span>
            </div>
          </div>
          <div class="flex items-start gap-3">
            <RadioGroupItem value="compact" class="mt-1" />
            <div class="flex flex-col">
              <RadioGroupItemLabel>Compact</RadioGroupItemLabel>
              <span class="text-xs text-muted-foreground">Minimal spacing for dense layouts.</span>
            </div>
          </div>
        </RadioGroup>
      </section>

      <section class="flex flex-col gap-3">
        <h3 class="text-sm font-semibold">Grid Layout</h3>
        <RadioGroup defaultValue="starter" class="grid max-w-sm grid-cols-2 gap-4">
          <label class="flex cursor-pointer items-center gap-3 rounded-lg border p-4 has-[:checked]:border-primary has-[:checked]:bg-primary/5">
            <RadioGroupItem value="starter" />
            <div>
              <div class="text-sm font-medium">Starter</div>
              <div class="text-xs text-muted-foreground">$9/month</div>
            </div>
          </label>
          <label class="flex cursor-pointer items-center gap-3 rounded-lg border p-4 has-[:checked]:border-primary has-[:checked]:bg-primary/5">
            <RadioGroupItem value="pro" />
            <div>
              <div class="text-sm font-medium">Pro</div>
              <div class="text-xs text-muted-foreground">$29/month</div>
            </div>
          </label>
          <label class="flex cursor-pointer items-center gap-3 rounded-lg border p-4 has-[:checked]:border-primary has-[:checked]:bg-primary/5">
            <RadioGroupItem value="team" />
            <div>
              <div class="text-sm font-medium">Team</div>
              <div class="text-xs text-muted-foreground">$49/month</div>
            </div>
          </label>
          <label class="flex cursor-pointer items-center gap-3 rounded-lg border p-4 has-[:checked]:border-primary has-[:checked]:bg-primary/5">
            <RadioGroupItem value="enterprise" />
            <div>
              <div class="text-sm font-medium">Enterprise</div>
              <div class="text-xs text-muted-foreground">$99/month</div>
            </div>
          </label>
        </RadioGroup>
      </section>

      <section class="flex flex-col gap-3">
        <h3 class="text-sm font-semibold">Disabled</h3>
        <RadioGroup defaultValue="option-1" disabled class="w-fit">
          <div class="flex items-center gap-3">
            <RadioGroupItem value="option-1" />
            <RadioGroupItemLabel class="text-muted-foreground">Option One</RadioGroupItemLabel>
          </div>
          <div class="flex items-center gap-3">
            <RadioGroupItem value="option-2" />
            <RadioGroupItemLabel class="text-muted-foreground">Option Two</RadioGroupItemLabel>
          </div>
        </RadioGroup>
      </section>
    </div>
  )
}
