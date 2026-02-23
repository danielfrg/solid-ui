import { For } from "solid-js"
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

      {/* Scrollable Content */}
      <section class="flex flex-col gap-3">
        <h3 class="text-sm font-semibold">Scrollable Content</h3>
        <Dialog>
          <DialogTrigger as={Button} variant="outline">
            Scrollable Content
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Scrollable Content</DialogTitle>
              <DialogDescription>This is a dialog with scrollable content.</DialogDescription>
            </DialogHeader>
            <div class="-mx-4 max-h-[70vh] overflow-y-auto px-4">
              <For each={Array.from({ length: 10 })}>
                {() => (
                  <p class="mb-4 text-sm leading-relaxed text-muted-foreground">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                )}
              </For>
            </div>
          </DialogContent>
        </Dialog>
      </section>

      {/* Sticky footer */}
      <section class="flex flex-col gap-3">
        <h3 class="text-sm font-semibold">With Sticky Footer</h3>
        <Dialog>
          <DialogTrigger as={Button} variant="outline">
            Sticky Footer
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Scrollable Content</DialogTitle>
              <DialogDescription>This is a dialog with scrollable content.</DialogDescription>
            </DialogHeader>
            <div class="-mx-4 max-h-[70vh] overflow-y-auto px-4">
              <For each={Array.from({ length: 10 })}>
                {() => (
                  <p class="mb-4 text-sm leading-relaxed text-muted-foreground">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                )}
              </For>
            </div>
            <DialogFooter>
              <DialogClose as={Button} variant="outline">
                Close
              </DialogClose>
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
              <DialogTitle>No Close Button</DialogTitle>
              <DialogDescription>This dialog doesn't have a close button in the top-right corner.</DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose as={Button} variant="outline">
                Close
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </section>
    </div>
  )
}
