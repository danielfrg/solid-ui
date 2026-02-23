import {
  Button,
  Input,
  InputDescription,
  InputErrorMessage,
  InputField,
  InputLabel,
  InputTextArea,
} from "@danielfrg/solid-ui"

const selectClass =
  "border-input bg-transparent h-9 w-full rounded-md border px-3 py-1 text-sm shadow-xs outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"

export function InputShowcase() {
  return (
    <div class="flex flex-col gap-12 max-w-xl">
      <section class="flex flex-col gap-4">
        <h3 class="text-sm font-semibold">Basic</h3>
        <Input>
          <InputField type="email" placeholder="Email" />
        </Input>
      </section>

      <section class="flex flex-col gap-4">
        <h3 class="text-sm font-semibold">Invalid</h3>
        <Input validationState="invalid">
          <InputField type="text" placeholder="Error" />
          <InputErrorMessage>Something went wrong. Try again.</InputErrorMessage>
        </Input>
      </section>

      <section class="flex flex-col gap-4">
        <h3 class="text-sm font-semibold">With Label</h3>
        <Input>
          <InputLabel>Email</InputLabel>
          <InputField type="email" placeholder="name@example.com" />
        </Input>
      </section>

      <section class="flex flex-col gap-4">
        <h3 class="text-sm font-semibold">With Description</h3>
        <Input>
          <InputLabel>Username</InputLabel>
          <InputField type="text" placeholder="Enter your username" />
          <InputDescription>Choose a unique username for your account.</InputDescription>
        </Input>
      </section>

      <section class="flex flex-col gap-4">
        <h3 class="text-sm font-semibold">Disabled</h3>
        <Input disabled>
          <InputLabel>Email</InputLabel>
          <InputField type="email" placeholder="Email" />
        </Input>
      </section>

      <section class="flex flex-col gap-6">
        <h3 class="text-sm font-semibold">Input Types</h3>
        <Input>
          <InputLabel>Password</InputLabel>
          <InputField type="password" placeholder="Password" />
        </Input>
        <Input>
          <InputLabel>Phone</InputLabel>
          <InputField type="tel" placeholder="+1 (555) 123-4567" />
        </Input>
        <Input>
          <InputLabel>URL</InputLabel>
          <InputField type="url" placeholder="https://example.com" />
        </Input>
        <Input>
          <InputLabel>Search</InputLabel>
          <InputField type="search" placeholder="Search" />
        </Input>
        <Input>
          <InputLabel>Number</InputLabel>
          <InputField type="number" placeholder="123" />
        </Input>
        <Input>
          <InputLabel>Date</InputLabel>
          <InputField type="date" />
        </Input>
        <Input>
          <InputLabel>Time</InputLabel>
          <InputField type="time" />
        </Input>
        <Input>
          <InputLabel>File</InputLabel>
          <InputField type="file" />
        </Input>
      </section>

      <section class="flex flex-col gap-4">
        <h3 class="text-sm font-semibold">With Select</h3>
        <div class="flex w-full gap-2">
          <Input class="flex-1">
            <InputField type="text" placeholder="Enter amount" />
          </Input>
          <select class={`${selectClass} w-32`}>
            <option value="usd">USD</option>
            <option value="eur">EUR</option>
            <option value="gbp">GBP</option>
          </select>
        </div>
      </section>

      <section class="flex flex-col gap-4">
        <h3 class="text-sm font-semibold">With Button</h3>
        <div class="flex w-full gap-2">
          <Input class="flex-1">
            <InputField type="search" placeholder="Search..." />
          </Input>
          <Button>Search</Button>
        </div>
      </section>

      <section class="flex flex-col gap-4">
        <h3 class="text-sm font-semibold">With Native Select</h3>
        <div class="flex w-full gap-2">
          <Input class="flex-1">
            <InputField type="tel" placeholder="(555) 123-4567" />
          </Input>
          <select class={`${selectClass} w-24`}>
            <option value="+1">+1</option>
            <option value="+44">+44</option>
            <option value="+46">+46</option>
          </select>
        </div>
      </section>

      <section class="flex flex-col gap-4">
        <h3 class="text-sm font-semibold">Form</h3>
        <form class="w-full">
          <div class="grid gap-4">
            <Input>
              <InputLabel>Name</InputLabel>
              <InputField type="text" placeholder="John Doe" />
            </Input>
            <Input>
              <InputLabel>Email</InputLabel>
              <InputField type="email" placeholder="john@example.com" />
              <InputDescription>We will never share your email with anyone.</InputDescription>
            </Input>
            <div class="grid grid-cols-2 gap-4">
              <Input>
                <InputLabel>Phone</InputLabel>
                <InputField type="tel" placeholder="+1 (555) 123-4567" />
              </Input>
              <Input>
                <InputLabel>Country</InputLabel>
                <select class={selectClass}>
                  <option value="us">United States</option>
                  <option value="uk">United Kingdom</option>
                  <option value="ca">Canada</option>
                </select>
              </Input>
            </div>
            <Input>
              <InputLabel>Address</InputLabel>
              <InputField type="text" placeholder="123 Main St" />
            </Input>
            <div class="flex gap-2">
              <Button type="button" variant="outline">
                Cancel
              </Button>
              <Button type="submit">Submit</Button>
            </div>
          </div>
        </form>
      </section>

      <section class="flex flex-col gap-4">
        <h3 class="text-sm font-semibold">Textarea</h3>
        <Input>
          <InputLabel>Bio</InputLabel>
          <InputTextArea placeholder="Tell us a little bit about yourself" />
          <InputDescription>You can @mention other users and organizations.</InputDescription>
        </Input>
      </section>
    </div>
  )
}
