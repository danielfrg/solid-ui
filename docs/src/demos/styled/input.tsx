import { Button } from "@danielfrg/solid-ui/button"
import { Input, InputField, InputDescription, InputLabel } from "@danielfrg/solid-ui/input"
import { ExampleWrapper, Example } from "@/components/example"

export default function InputExample() {
  return (
    <ExampleWrapper>
      <InputBasic />
      <InputInvalid />
      <InputWithLabel />
      <InputWithDescription />
      <InputDisabled />
      <InputTypes />
      <InputWithButton />
      <InputForm />
    </ExampleWrapper>
  )
}

function InputBasic() {
  return (
    <Example title="Basic">
      <Input>
        <InputField type="email" placeholder="Email" />
      </Input>
    </Example>
  )
}

function InputInvalid() {
  return (
    <Example title="Invalid">
      <Input>
        <InputField type="text" placeholder="Error" aria-invalid="true" />
      </Input>
    </Example>
  )
}

function InputWithLabel() {
  return (
    <Example title="With Label">
      <Input>
        <InputLabel>Email</InputLabel>
        <InputField type="email" placeholder="name@example.com" />
      </Input>
    </Example>
  )
}

function InputWithDescription() {
  return (
    <Example title="With Description">
      <Input>
        <InputLabel>Username</InputLabel>
        <InputField type="text" placeholder="Enter your username" />
        <InputDescription>Choose a unique username for your account.</InputDescription>
      </Input>
    </Example>
  )
}

function InputDisabled() {
  return (
    <Example title="Disabled">
      <Input>
        <InputLabel>Email</InputLabel>
        <InputField type="email" placeholder="Email" disabled />
      </Input>
    </Example>
  )
}

function InputTypes() {
  return (
    <Example title="Input Types">
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
    </Example>
  )
}

function InputWithButton() {
  return (
    <Example title="With Button">
      <div class="flex w-full gap-2">
        <Input class="flex-1">
          <InputField type="search" placeholder="Search..." />
        </Input>
        <Button>Search</Button>
      </div>
    </Example>
  )
}

function InputForm() {
  return (
    <Example title="Form">
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
    </Example>
  )
}
