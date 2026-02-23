import { RadioGroup, RadioGroupItem, RadioGroupItemLabel } from "@danielfrg/solid-ui/radio-group"

export function RadioGroupShowcase() {
  return (
    <div class="flex flex-col gap-10">
      <section class="flex flex-col gap-3">
        <h3 class="text-sm font-semibold">Basic</h3>
        <RadioGroup defaultValue="comfortable" class="grid gap-3">
          <div class="flex items-center gap-3">
            <RadioGroupItem value="default" id="r1" />
            <RadioGroupItemLabel for="r1" class="font-normal">
              Default
            </RadioGroupItemLabel>
          </div>
          <div class="flex items-center gap-3">
            <RadioGroupItem value="comfortable" id="r2" />
            <RadioGroupItemLabel for="r2" class="font-normal">
              Comfortable
            </RadioGroupItemLabel>
          </div>
          <div class="flex items-center gap-3">
            <RadioGroupItem value="compact" id="r3" />
            <RadioGroupItemLabel for="r3" class="font-normal">
              Compact
            </RadioGroupItemLabel>
          </div>
        </RadioGroup>
      </section>

      <section class="flex flex-col gap-3">
        <h3 class="text-sm font-semibold">With Descriptions</h3>
        <RadioGroup defaultValue="plus" class="grid gap-3">
          <label for="plus-plan" class="flex cursor-pointer items-center justify-between gap-2">
            <div class="flex flex-col gap-1">
              <div class="font-medium">Plus</div>
              <div class="text-xs text-muted-foreground">For individuals and small teams</div>
            </div>
            <RadioGroupItem value="plus" id="plus-plan" />
          </label>
          <label for="pro-plan" class="flex cursor-pointer items-center justify-between gap-2">
            <div class="flex flex-col gap-1">
              <div class="font-medium">Pro</div>
              <div class="text-xs text-muted-foreground">For growing businesses</div>
            </div>
            <RadioGroupItem value="pro" id="pro-plan" />
          </label>
          <label for="enterprise-plan" class="flex cursor-pointer items-center justify-between gap-2">
            <div class="flex flex-col gap-1">
              <div class="font-medium">Enterprise</div>
              <div class="text-xs text-muted-foreground">For large teams and enterprises</div>
            </div>
            <RadioGroupItem value="enterprise" id="enterprise-plan" />
          </label>
        </RadioGroup>
      </section>

      <section class="flex flex-col gap-3">
        <h3 class="text-sm font-semibold">With FieldSet</h3>
        <fieldset class="flex flex-col gap-3 rounded-md border p-4">
          <legend class="text-sm font-medium">Battery Level</legend>
          <p class="text-xs text-muted-foreground">Choose your preferred battery level.</p>
          <RadioGroup defaultValue="medium" class="grid gap-3">
            <div class="flex items-center gap-3">
              <RadioGroupItem value="high" id="battery-high" />
              <RadioGroupItemLabel for="battery-high" class="font-normal">
                High
              </RadioGroupItemLabel>
            </div>
            <div class="flex items-center gap-3">
              <RadioGroupItem value="medium" id="battery-medium" />
              <RadioGroupItemLabel for="battery-medium" class="font-normal">
                Medium
              </RadioGroupItemLabel>
            </div>
            <div class="flex items-center gap-3">
              <RadioGroupItem value="low" id="battery-low" />
              <RadioGroupItemLabel for="battery-low" class="font-normal">
                Low
              </RadioGroupItemLabel>
            </div>
          </RadioGroup>
        </fieldset>
      </section>

      <section class="flex flex-col gap-3">
        <h3 class="text-sm font-semibold">Grid Layout</h3>
        <RadioGroup defaultValue="medium" class="grid grid-cols-2 gap-2">
          <label
            for="size-small"
            class="flex cursor-pointer items-center gap-3 rounded-md border p-3 has-[:checked]:border-primary has-[:checked]:bg-primary/5"
          >
            <RadioGroupItem value="small" id="size-small" />
            <div class="font-medium">Small</div>
          </label>
          <label
            for="size-medium"
            class="flex cursor-pointer items-center gap-3 rounded-md border p-3 has-[:checked]:border-primary has-[:checked]:bg-primary/5"
          >
            <RadioGroupItem value="medium" id="size-medium" />
            <div class="font-medium">Medium</div>
          </label>
          <label
            for="size-large"
            class="flex cursor-pointer items-center gap-3 rounded-md border p-3 has-[:checked]:border-primary has-[:checked]:bg-primary/5"
          >
            <RadioGroupItem value="large" id="size-large" />
            <div class="font-medium">Large</div>
          </label>
          <label
            for="size-xlarge"
            class="flex cursor-pointer items-center gap-3 rounded-md border p-3 has-[:checked]:border-primary has-[:checked]:bg-primary/5"
          >
            <RadioGroupItem value="xlarge" id="size-xlarge" />
            <div class="font-medium">X-Large</div>
          </label>
        </RadioGroup>
      </section>

      <section class="flex flex-col gap-3">
        <h3 class="text-sm font-semibold">Disabled</h3>
        <RadioGroup defaultValue="option2" disabled class="grid gap-3">
          <div class="flex items-center gap-3">
            <RadioGroupItem value="option1" id="disabled-1" />
            <RadioGroupItemLabel for="disabled-1" class="font-normal text-muted-foreground">
              Option 1
            </RadioGroupItemLabel>
          </div>
          <div class="flex items-center gap-3">
            <RadioGroupItem value="option2" id="disabled-2" />
            <RadioGroupItemLabel for="disabled-2" class="font-normal text-muted-foreground">
              Option 2
            </RadioGroupItemLabel>
          </div>
          <div class="flex items-center gap-3">
            <RadioGroupItem value="option3" id="disabled-3" />
            <RadioGroupItemLabel for="disabled-3" class="font-normal text-muted-foreground">
              Option 3
            </RadioGroupItemLabel>
          </div>
        </RadioGroup>
      </section>

      <section class="flex flex-col gap-3">
        <h3 class="text-sm font-semibold">Invalid</h3>
        <fieldset class="flex flex-col gap-3 rounded-md border p-4">
          <legend class="text-sm font-medium">Notification Preferences</legend>
          <p class="text-xs text-muted-foreground">Choose how you want to receive notifications.</p>
          <RadioGroup defaultValue="email" class="grid gap-3">
            <div class="flex items-center gap-3" data-invalid>
              <RadioGroupItem value="email" id="invalid-email" aria-invalid />
              <RadioGroupItemLabel for="invalid-email" class="font-normal">
                Email only
              </RadioGroupItemLabel>
            </div>
            <div class="flex items-center gap-3" data-invalid>
              <RadioGroupItem value="sms" id="invalid-sms" aria-invalid />
              <RadioGroupItemLabel for="invalid-sms" class="font-normal">
                SMS only
              </RadioGroupItemLabel>
            </div>
            <div class="flex items-center gap-3" data-invalid>
              <RadioGroupItem value="both" id="invalid-both" aria-invalid />
              <RadioGroupItemLabel for="invalid-both" class="font-normal">
                Both Email & SMS
              </RadioGroupItemLabel>
            </div>
          </RadioGroup>
        </fieldset>
      </section>
    </div>
  )
}
