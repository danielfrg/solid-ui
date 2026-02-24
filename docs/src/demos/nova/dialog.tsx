import { For, createSignal } from "solid-js"
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@danielfrg/solid-ui-nova/dialog"
import { Button, buttonVariants } from "@danielfrg/solid-ui-nova/button"
import { Input, InputField, InputLabel } from "@danielfrg/solid-ui-nova/input"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@danielfrg/solid-ui-nova/tabs"
import { Switch, SwitchLabel } from "@danielfrg/solid-ui-nova/switch"
import { ExampleWrapper, Example } from "@/components/example"

export default function DialogExample() {
  return (
    <ExampleWrapper>
      <DialogWithForm />
      <DialogScrollableContent />
      <DialogWithStickyFooter />
      <DialogNoCloseButton />
      <DialogChatSettings />
    </ExampleWrapper>
  )
}

function DialogWithForm() {
  return (
    <Example title="With Form" class="items-center justify-center">
      <Dialog>
        <DialogTrigger class={buttonVariants({ variant: "outline" })}>Edit Profile</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done. Your profile will be updated immediately.
            </DialogDescription>
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
            <DialogClose class={buttonVariants({ variant: "outline" })}>Cancel</DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Example>
  )
}

function DialogScrollableContent() {
  return (
    <Example title="Scrollable Content" class="items-center justify-center">
      <Dialog>
        <DialogTrigger class={buttonVariants({ variant: "outline" })}>Scrollable Content</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Scrollable Content</DialogTitle>
            <DialogDescription>This is a dialog with scrollable content.</DialogDescription>
          </DialogHeader>
          <div class="-mx-4 max-h-[70vh] overflow-y-auto px-4">
            <For each={Array.from({ length: 10 })}>
              {() => (
                <p class="mb-4 text-sm leading-relaxed text-muted-foreground">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum.
                </p>
              )}
            </For>
          </div>
        </DialogContent>
      </Dialog>
    </Example>
  )
}

function DialogWithStickyFooter() {
  return (
    <Example title="With Sticky Footer" class="items-center justify-center">
      <Dialog>
        <DialogTrigger class={buttonVariants({ variant: "outline" })}>Sticky Footer</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Scrollable Content</DialogTitle>
            <DialogDescription>This is a dialog with scrollable content.</DialogDescription>
          </DialogHeader>
          <div class="-mx-4 max-h-[70vh] overflow-y-auto px-4">
            <For each={Array.from({ length: 10 })}>
              {() => (
                <p class="mb-4 text-sm leading-relaxed text-muted-foreground">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum.
                </p>
              )}
            </For>
          </div>
          <DialogFooter>
            <DialogClose class={buttonVariants({ variant: "outline" })}>Close</DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Example>
  )
}

function DialogNoCloseButton() {
  return (
    <Example title="No Close Button" class="items-center justify-center">
      <Dialog>
        <DialogTrigger class={buttonVariants({ variant: "outline" })}>No Close Button</DialogTrigger>
        <DialogContent showCloseButton={false}>
          <DialogHeader>
            <DialogTitle>No Close Button</DialogTitle>
            <DialogDescription>This dialog doesn't have a close button in the top-right corner.</DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose class={buttonVariants({ variant: "outline" })}>Close</DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Example>
  )
}

function DialogChatSettings() {
  const [tab, setTab] = createSignal("general")
  const [notifications, setNotifications] = createSignal(false)
  const [tasks, setTasks] = createSignal(false)
  const [twoFactor, setTwoFactor] = createSignal(false)

  return (
    <Example title="Chat Settings" class="items-center justify-center">
      <Dialog>
        <DialogTrigger class={buttonVariants({ variant: "outline" })}>Chat Settings</DialogTrigger>
        <DialogContent class="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Chat Settings</DialogTitle>
            <DialogDescription>Customize your chat settings: theme, notifications, and security.</DialogDescription>
          </DialogHeader>
          <Tabs value={tab()} onChange={setTab}>
            <TabsList class="w-full">
              <TabsTrigger value="general">General</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
            </TabsList>
            <TabsContent value="general">
              <div class="flex flex-col gap-4 py-2">
                <div class="flex flex-col gap-1.5">
                  <label class="text-sm font-medium">Theme</label>
                  <select class="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs transition-colors focus:outline-none focus:ring-1 focus:ring-ring">
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                    <option value="system" selected>
                      System
                    </option>
                  </select>
                </div>
                <div class="flex flex-col gap-1.5">
                  <label class="text-sm font-medium">Language</label>
                  <select class="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs transition-colors focus:outline-none focus:ring-1 focus:ring-ring">
                    <option value="en" selected>
                      English
                    </option>
                    <option value="es">Spanish</option>
                    <option value="fr">French</option>
                    <option value="de">German</option>
                  </select>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="notifications">
              <div class="flex flex-col gap-4 py-2">
                <div class="flex flex-col gap-2">
                  <p class="text-sm font-medium">Responses</p>
                  <p class="text-xs text-muted-foreground">
                    Get notified when ChatGPT responds to requests that take time.
                  </p>
                  <Switch checked={notifications()} onChange={setNotifications}>
                    <SwitchLabel>Push notifications</SwitchLabel>
                  </Switch>
                </div>
                <div class="flex flex-col gap-2">
                  <p class="text-sm font-medium">Tasks</p>
                  <p class="text-xs text-muted-foreground">Get notified when tasks you've created have updates.</p>
                  <Switch checked={tasks()} onChange={setTasks}>
                    <SwitchLabel>Push notifications</SwitchLabel>
                  </Switch>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="security">
              <div class="flex flex-col gap-4 py-2">
                <div class="flex items-center justify-between gap-4">
                  <div class="flex flex-col gap-1">
                    <p class="text-sm font-medium">Multi-factor authentication</p>
                    <p class="text-xs text-muted-foreground">Enable MFA to secure your account.</p>
                  </div>
                  <Switch checked={twoFactor()} onChange={setTwoFactor} />
                </div>
                <div class="flex items-center justify-between gap-4">
                  <div class="flex flex-col gap-1">
                    <p class="text-sm font-medium">Log out</p>
                    <p class="text-xs text-muted-foreground">Log out of your account on this device.</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Log Out
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
          <DialogFooter>
            <DialogClose class={buttonVariants({ variant: "outline" })}>Cancel</DialogClose>
            <Button>Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Example>
  )
}
