import { Button } from "@danielfrg/solid-ui/button"
import { Input, InputDescription, InputField, InputLabel } from "@danielfrg/solid-ui/input"

export function InputShowcase() {
  return (
    <div class="flex flex-col gap-10">
      <section class="flex flex-col gap-3">
        <h3 class="text-sm font-semibold">Basic</h3>
        <InputField type="email" placeholder="Email" />
      </section>

      <section class="flex flex-col gap-3">
        <h3 class="text-sm font-semibold">Invalid</h3>
        <InputField type="text" placeholder="Error" aria-invalid="true" />
      </section>

      <section class="flex flex-col gap-3">
        <h3 class="text-sm font-semibold">With Label</h3>
        <Input>
          <InputLabel>Email</InputLabel>
          <InputField type="email" placeholder="name@example.com" />
        </Input>
      </section>

      <section class="flex flex-col gap-3">
        <h3 class="text-sm font-semibold">With Description</h3>
        <Input>
          <InputLabel>Username</InputLabel>
          <InputField type="text" placeholder="Enter your username" />
          <InputDescription>Choose a unique username for your account.</InputDescription>
        </Input>
      </section>

      <section class="flex flex-col gap-3">
        <h3 class="text-sm font-semibold">Disabled</h3>
        <Input>
          <InputLabel>Email</InputLabel>
          <InputField type="email" placeholder="Email" disabled />
        </Input>
      </section>

      <section class="flex flex-col gap-3">
        <h3 class="text-sm font-semibold">Input Types</h3>
        <div class="flex w-full flex-col gap-6">
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
        </div>
      </section>

      <section class="flex flex-col gap-3">
        <h3 class="text-sm font-semibold">With Button</h3>
        <div class="flex w-full gap-2">
          <InputField type="search" placeholder="Search..." class="flex-1" />
          <Button>Search</Button>
        </div>
      </section>

      <section class="flex flex-col gap-3">
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
              <InputDescription>We'll never share your email with anyone.</InputDescription>
            </Input>
            <div class="grid grid-cols-2 gap-4">
              <Input>
                <InputLabel>Phone</InputLabel>
                <InputField type="tel" placeholder="+1 (555) 123-4567" />
              </Input>
              <Input>
                <InputLabel>Country</InputLabel>
                <InputField type="text" placeholder="United States" />
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
    </div>
  )
}
