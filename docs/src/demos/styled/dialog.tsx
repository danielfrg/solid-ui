import { createSignal, For } from "solid-js"
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@danielfrg/solid-ui/dialog"
import { Button } from "@danielfrg/solid-ui/button"
import { Input, InputField, InputLabel } from "@danielfrg/solid-ui/input"

export function DialogShowcase() {
  return (
    <div class="flex flex-col gap-10">
      {/* Form dialog */}
      <section class="flex flex-col gap-3">
        <h3 class="text-sm font-semibold">With Form</h3>
        <Dialog>
          <DialogTrigger as={Button} variant="outline">
            Edit Profile
          </DialogTrigger>
          <DialogContent class="sm:max-w-sm">
            <DialogHeader>
              <DialogTitle>Edit profile</DialogTitle>
              <DialogDescription>Make changes to your profile here. Click save when you're done.</DialogDescription>
            </DialogHeader>
            <div class="flex flex-col gap-4">
              <Input>
                <InputLabel>Name</InputLabel>
                <InputField value="Pedro Duarte" />
              </Input>
              <Input>
                <InputLabel>Username</InputLabel>
                <InputField value="@peduarte" />
              </Input>
            </div>
            <DialogFooter>
              <DialogClose as={Button} variant="outline">
                Cancel
              </DialogClose>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </section>

      {/* Scrollable */}
      <section class="flex flex-col gap-3">
        <h3 class="text-sm font-semibold">Scrollable Content</h3>
        <Dialog>
          <DialogTrigger as={Button} variant="outline">
            Scrollable Content
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Terms of Service</DialogTitle>
              <DialogDescription>Please read the following terms carefully.</DialogDescription>
            </DialogHeader>
            <div class="-mx-4 max-h-[50vh] overflow-y-auto px-4">
              <For each={Array.from({ length: 8 })}>
                {() => (
                  <p class="mb-4 text-sm leading-relaxed text-muted-foreground">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur.
                  </p>
                )}
              </For>
            </div>
          </DialogContent>
        </Dialog>
      </section>

      {/* Sticky footer */}
      <section class="flex flex-col gap-3">
        <h3 class="text-sm font-semibold">Sticky Footer</h3>
        <Dialog>
          <DialogTrigger as={Button} variant="outline">
            Sticky Footer
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>License Agreement</DialogTitle>
              <DialogDescription>
                This dialog has a sticky footer that stays visible while the content scrolls.
              </DialogDescription>
            </DialogHeader>
            <div class="-mx-4 max-h-[50vh] overflow-y-auto px-4">
              <For each={Array.from({ length: 8 })}>
                {() => (
                  <p class="mb-4 text-sm leading-relaxed text-muted-foreground">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur.
                  </p>
                )}
              </For>
            </div>
            <DialogFooter>
              <DialogClose as={Button} variant="outline">
                Close
              </DialogClose>
              <Button>Accept</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </section>

      {/* No close button */}
      <section class="flex flex-col gap-3">
        <h3 class="text-sm font-semibold">No Close Button</h3>
        <Dialog>
          <DialogTrigger as={Button} variant="outline">
            No Close Button
          </DialogTrigger>
          <DialogContent showCloseButton={false}>
            <DialogHeader>
              <DialogTitle>Confirm Action</DialogTitle>
              <DialogDescription>Use the buttons below to proceed or cancel.</DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose as={Button} variant="outline">
                Cancel
              </DialogClose>
              <Button>Confirm</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </section>

      {/* Custom width */}
      <section class="flex flex-col gap-3">
        <h3 class="text-sm font-semibold">Custom Width</h3>
        <Dialog>
          <DialogTrigger as={Button} variant="outline">
            Wide Dialog
          </DialogTrigger>
          <DialogContent class="sm:max-w-2xl">
            <DialogHeader>
              <DialogTitle>Dashboard Settings</DialogTitle>
              <DialogDescription>Configure your dashboard layout and preferences.</DialogDescription>
            </DialogHeader>
            <div class="grid grid-cols-2 gap-4">
              <Input>
                <InputLabel>Display name</InputLabel>
                <InputField placeholder="Enter name" />
              </Input>
              <Input>
                <InputLabel>Email</InputLabel>
                <InputField type="email" placeholder="name@example.com" />
              </Input>
              <Input>
                <InputLabel>Company</InputLabel>
                <InputField placeholder="Acme Inc." />
              </Input>
              <Input>
                <InputLabel>Role</InputLabel>
                <InputField placeholder="Developer" />
              </Input>
            </div>
            <DialogFooter>
              <DialogClose as={Button} variant="outline">
                Cancel
              </DialogClose>
              <Button>Save</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </section>
    </div>
  )
}
