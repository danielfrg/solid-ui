import { Button } from "@danielfrg/solid-ui/button"
import {
  Input,
  InputDescription,
  InputErrorMessage,
  InputField,
  InputLabel,
  InputTextArea,
} from "@danielfrg/solid-ui/input"

export function InputShowcase() {
  return (
    <div class="flex flex-col gap-10">
      <section class="flex flex-col gap-3">
        <h3 class="text-sm font-semibold">Basic</h3>
        <Input class="max-w-xs">
          <InputField placeholder="Email" type="email" />
        </Input>
      </section>

      <section class="flex flex-col gap-3">
        <h3 class="text-sm font-semibold">With Label</h3>
        <Input class="max-w-xs">
          <InputLabel>Email</InputLabel>
          <InputField placeholder="name@example.com" type="email" />
        </Input>
      </section>

      <section class="flex flex-col gap-3">
        <h3 class="text-sm font-semibold">With Description</h3>
        <Input class="max-w-xs">
          <InputLabel>Username</InputLabel>
          <InputField placeholder="@username" />
          <InputDescription>This is your public display name.</InputDescription>
        </Input>
      </section>

      <section class="flex flex-col gap-3">
        <h3 class="text-sm font-semibold">Invalid</h3>
        <Input class="max-w-xs" invalid>
          <InputLabel>Email</InputLabel>
          <InputField placeholder="name@example.com" type="email" />
          <InputErrorMessage>Please enter a valid email address.</InputErrorMessage>
        </Input>
      </section>

      <section class="flex flex-col gap-3">
        <h3 class="text-sm font-semibold">Disabled</h3>
        <Input class="max-w-xs" disabled>
          <InputLabel>Email</InputLabel>
          <InputField placeholder="name@example.com" type="email" />
        </Input>
      </section>

      <section class="flex flex-col gap-3">
        <h3 class="text-sm font-semibold">Input Types</h3>
        <div class="grid max-w-md gap-4">
          <Input>
            <InputLabel>Password</InputLabel>
            <InputField type="password" placeholder="Enter password" />
          </Input>
          <Input>
            <InputLabel>Number</InputLabel>
            <InputField type="number" placeholder="0" />
          </Input>
          <Input>
            <InputLabel>Date</InputLabel>
            <InputField type="date" />
          </Input>
          <Input>
            <InputLabel>File</InputLabel>
            <InputField type="file" />
          </Input>
        </div>
      </section>

      <section class="flex flex-col gap-3">
        <h3 class="text-sm font-semibold">With Button</h3>
        <div class="flex max-w-xs items-end gap-2">
          <Input class="flex-1">
            <InputLabel>Search</InputLabel>
            <InputField placeholder="Search..." />
          </Input>
          <Button>Search</Button>
        </div>
      </section>

      <section class="flex flex-col gap-3">
        <h3 class="text-sm font-semibold">Form</h3>
        <form class="grid max-w-sm gap-4">
          <div class="grid grid-cols-2 gap-4">
            <Input>
              <InputLabel>First name</InputLabel>
              <InputField placeholder="John" />
            </Input>
            <Input>
              <InputLabel>Last name</InputLabel>
              <InputField placeholder="Doe" />
            </Input>
          </div>
          <Input>
            <InputLabel>Email</InputLabel>
            <InputField type="email" placeholder="name@example.com" />
          </Input>
          <Button type="submit" class="w-full">Submit</Button>
        </form>
      </section>

      <section class="flex flex-col gap-3">
        <h3 class="text-sm font-semibold">Textarea</h3>
        <Input class="max-w-sm">
          <InputLabel>Message</InputLabel>
          <InputTextArea placeholder="Type your message here..." rows={4} />
          <InputDescription>Your message will be sent to the support team.</InputDescription>
        </Input>
      </section>
    </div>
  )
}
