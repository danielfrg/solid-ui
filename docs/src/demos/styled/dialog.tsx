import { createSignal } from "solid-js"
import {
  Button,
  buttonVariants,
  Checkbox,
  CheckboxLabel,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Input,
  InputDescription,
  InputField,
  InputLabel,
  InputTextArea,
  Switch,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@danielfrg/ui"

const selectClass =
  "border-input bg-transparent h-9 w-full rounded-md border px-3 py-1 text-sm shadow-xs outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"

const spokenLanguages = [
  "Auto",
  "English",
  "Spanish",
  "French",
  "German",
  "Italian",
  "Portuguese",
  "Russian",
  "Chinese",
  "Japanese",
  "Korean",
]

const voices = ["Samantha", "Alex", "Fred", "Victoria"]
const themes = ["Light", "Dark", "System"]
const accents = ["Default", "Red", "Blue", "Green"]

export function DialogShowcase() {
  const [tab, setTab] = createSignal("general")
  const [theme, setTheme] = createSignal("System")
  const [accent, setAccent] = createSignal("Default")
  const [language, setLanguage] = createSignal("English")
  const [voice, setVoice] = createSignal("Samantha")

  return (
    <div class="flex flex-col gap-12">
      <section class="flex flex-col gap-4">
        <h3 class="text-sm font-semibold">With Form</h3>
        <Dialog>
          <form>
            <DialogTrigger as={Button} variant="outline">
              Edit Profile
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Edit profile</DialogTitle>
                <DialogDescription>Make changes to your profile here. Click save when you are done.</DialogDescription>
              </DialogHeader>
              <div class="grid gap-4">
                <Input defaultValue="Pedro Duarte">
                  <InputLabel>Name</InputLabel>
                  <InputField />
                </Input>
                <Input defaultValue="@peduarte">
                  <InputLabel>Username</InputLabel>
                  <InputField />
                </Input>
              </div>
              <DialogFooter>
                <DialogClose class={buttonVariants({ variant: "outline" })}>Cancel</DialogClose>
                <Button type="submit">Save changes</Button>
              </DialogFooter>
            </DialogContent>
          </form>
        </Dialog>
      </section>

      <section class="flex flex-col gap-4">
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
            <div class="max-h-[70vh] space-y-4 overflow-y-auto">
              {Array.from({ length: 10 }).map((_, index) => (
                <p class="text-sm leading-relaxed" data-index={index}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.
                </p>
              ))}
            </div>
          </DialogContent>
        </Dialog>
      </section>

      <section class="flex flex-col gap-4">
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
            <div class="max-h-[70vh] space-y-4 overflow-y-auto">
              {Array.from({ length: 10 }).map((_, index) => (
                <p class="text-sm leading-relaxed" data-index={index}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.
                </p>
              ))}
            </div>
            <DialogFooter>
              <DialogClose class={buttonVariants({ variant: "outline" })}>Close</DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </section>

      <section class="flex flex-col gap-4">
        <h3 class="text-sm font-semibold">No Close Button</h3>
        <Dialog>
          <DialogTrigger as={Button} variant="outline">
            No Close Button
          </DialogTrigger>
          <DialogContent showCloseButton={false}>
            <DialogHeader>
              <DialogTitle>No Close Button</DialogTitle>
              <DialogDescription>This dialog does not show a close icon.</DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose class={buttonVariants({ variant: "outline" })}>Close</DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </section>

      <section class="flex flex-col gap-4">
        <h3 class="text-sm font-semibold">Chat Settings</h3>
        <Dialog>
          <DialogTrigger as={Button} variant="outline">
            Chat Settings
          </DialogTrigger>
          <DialogContent class="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Chat Settings</DialogTitle>
              <DialogDescription>
                Customize your chat settings: theme, accent color, language, voice, and preferences.
              </DialogDescription>
            </DialogHeader>
            <Tabs value={tab()} onChange={setTab}>
              <TabsList class="w-full">
                <TabsTrigger value="general">General</TabsTrigger>
                <TabsTrigger value="notifications">Notifications</TabsTrigger>
                <TabsTrigger value="personalization">Personalization</TabsTrigger>
                <TabsTrigger value="security">Security</TabsTrigger>
              </TabsList>
              <div class="border mt-4 rounded-lg p-4">
                <TabsContent value="general">
                  <div class="grid gap-4">
                    <Input>
                      <InputLabel>Theme</InputLabel>
                      <select
                        class={selectClass}
                        value={theme()}
                        onChange={(event) => setTheme(event.currentTarget.value)}
                      >
                        {themes.map((item) => (
                          <option value={item}>{item}</option>
                        ))}
                      </select>
                    </Input>
                    <Input>
                      <InputLabel>Accent Color</InputLabel>
                      <select
                        class={selectClass}
                        value={accent()}
                        onChange={(event) => setAccent(event.currentTarget.value)}
                      >
                        {accents.map((item) => (
                          <option value={item}>{item}</option>
                        ))}
                      </select>
                    </Input>
                    <Input>
                      <InputLabel>Spoken Language</InputLabel>
                      <InputDescription>
                        Select the language you mainly speak. Auto-detection is available.
                      </InputDescription>
                      <select
                        class={selectClass}
                        value={language()}
                        onChange={(event) => setLanguage(event.currentTarget.value)}
                      >
                        {spokenLanguages.map((item) => (
                          <option value={item}>{item}</option>
                        ))}
                      </select>
                    </Input>
                    <Input>
                      <InputLabel>Voice</InputLabel>
                      <select
                        class={selectClass}
                        value={voice()}
                        onChange={(event) => setVoice(event.currentTarget.value)}
                      >
                        {voices.map((item) => (
                          <option value={item}>{item}</option>
                        ))}
                      </select>
                    </Input>
                  </div>
                </TabsContent>
                <TabsContent value="notifications">
                  <div class="grid gap-4">
                    <Checkbox defaultChecked disabled>
                      <CheckboxLabel class="font-normal">Push notifications</CheckboxLabel>
                    </Checkbox>
                    <Checkbox>
                      <CheckboxLabel class="font-normal">Email notifications</CheckboxLabel>
                    </Checkbox>
                  </div>
                </TabsContent>
                <TabsContent value="personalization">
                  <div class="grid gap-4">
                    <Input>
                      <InputLabel>Nickname</InputLabel>
                      <InputField placeholder="Broski" />
                    </Input>
                    <Input>
                      <InputLabel>More about you</InputLabel>
                      <InputDescription>Tell us more to personalize your experience.</InputDescription>
                      <InputTextArea placeholder="I am a software engineer..." />
                    </Input>
                    <div class="flex items-center justify-between rounded-md border px-3 py-2">
                      <div>
                        <p class="text-sm font-medium">Enable customizations</p>
                        <p class="text-muted-foreground text-sm">Make responses more personalized.</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="security">
                  <div class="grid gap-4">
                    <div class="flex items-center justify-between rounded-md border px-3 py-2">
                      <div>
                        <p class="text-sm font-medium">Multi-factor authentication</p>
                        <p class="text-muted-foreground text-sm">Add an extra layer of security to your account.</p>
                      </div>
                      <Switch />
                    </div>
                    <div class="flex items-center justify-between rounded-md border px-3 py-2">
                      <div>
                        <p class="text-sm font-medium">Log out</p>
                        <p class="text-muted-foreground text-sm">Log out of your account on this device.</p>
                      </div>
                      <Button variant="outline" size="sm">
                        Log Out
                      </Button>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </DialogContent>
        </Dialog>
      </section>
    </div>
  )
}
