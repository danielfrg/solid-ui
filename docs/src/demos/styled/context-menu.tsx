import { createSignal } from "solid-js"
import {
  Button,
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuLabel,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubTrigger,
  ContextMenuSubContent,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@danielfrg/solid-ui"

const IconStub = (props: { class?: string }) => (
  <span
    aria-hidden="true"
    class={`inline-flex size-4 items-center justify-center rounded-sm bg-muted ${props.class ?? ""}`}
  />
)

export function ContextMenuShowcase() {
  const [showBookmarks, setShowBookmarks] = createSignal(true)
  const [showUrls, setShowUrls] = createSignal(false)
  const [person, setPerson] = createSignal("pedro")
  const [theme, setTheme] = createSignal("light")

  const placements = [
    { label: "inline start", value: "left-start" },
    { label: "left", value: "left-start" },
    { label: "top", value: "top" },
    { label: "bottom", value: "bottom" },
    { label: "right", value: "right-start" },
    { label: "inline end", value: "right-start" },
  ] as const

  return (
    <div class="flex flex-col gap-12">
      <section class="flex flex-col gap-4">
        <h3 class="text-sm font-semibold">Basic</h3>
        <ContextMenu>
          <ContextMenuTrigger class="flex aspect-[2/0.5] w-full items-center justify-center rounded-lg border text-sm">
            Right click here
          </ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuGroup>
              <ContextMenuItem>Back</ContextMenuItem>
              <ContextMenuItem disabled>Forward</ContextMenuItem>
              <ContextMenuItem>Reload</ContextMenuItem>
            </ContextMenuGroup>
          </ContextMenuContent>
        </ContextMenu>
      </section>

      <section class="flex flex-col gap-4">
        <h3 class="text-sm font-semibold">With Icons</h3>
        <ContextMenu>
          <ContextMenuTrigger class="flex aspect-[2/0.5] w-full items-center justify-center rounded-lg border text-sm">
            Right click here
          </ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuGroup>
              <ContextMenuItem>
                <IconStub />
                Copy
              </ContextMenuItem>
              <ContextMenuItem>
                <IconStub />
                Cut
              </ContextMenuItem>
              <ContextMenuItem>
                <IconStub />
                Paste
              </ContextMenuItem>
            </ContextMenuGroup>
            <ContextMenuSeparator />
            <ContextMenuGroup>
              <ContextMenuItem class="text-destructive focus:text-destructive">
                <IconStub class="bg-destructive/20" />
                Delete
              </ContextMenuItem>
            </ContextMenuGroup>
          </ContextMenuContent>
        </ContextMenu>
      </section>

      <section class="flex flex-col gap-4">
        <h3 class="text-sm font-semibold">With Sides</h3>
        <div class="flex flex-wrap justify-center gap-2">
          {placements.map((placement) => (
            <ContextMenu placement={placement.value}>
              <ContextMenuTrigger class="flex aspect-[2/0.5] items-center justify-center rounded-lg border p-4 text-sm capitalize">
                {placement.label}
              </ContextMenuTrigger>
              <ContextMenuContent>
                <ContextMenuGroup>
                  <ContextMenuItem>Back</ContextMenuItem>
                  <ContextMenuItem>Forward</ContextMenuItem>
                  <ContextMenuItem>Reload</ContextMenuItem>
                </ContextMenuGroup>
              </ContextMenuContent>
            </ContextMenu>
          ))}
        </div>
      </section>

      <section class="flex flex-col gap-4">
        <h3 class="text-sm font-semibold">With Shortcuts</h3>
        <ContextMenu>
          <ContextMenuTrigger class="flex aspect-[2/0.5] w-full items-center justify-center rounded-lg border text-sm">
            Right click here
          </ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuGroup>
              <ContextMenuItem>
                Back
                <ContextMenuShortcut>Ctrl+[</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem disabled>
                Forward
                <ContextMenuShortcut>Ctrl+]</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem>
                Reload
                <ContextMenuShortcut>Ctrl+R</ContextMenuShortcut>
              </ContextMenuItem>
            </ContextMenuGroup>
            <ContextMenuSeparator />
            <ContextMenuGroup>
              <ContextMenuItem>
                Save
                <ContextMenuShortcut>Ctrl+S</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem>
                Save As...
                <ContextMenuShortcut>Ctrl+Shift+S</ContextMenuShortcut>
              </ContextMenuItem>
            </ContextMenuGroup>
          </ContextMenuContent>
        </ContextMenu>
      </section>

      <section class="flex flex-col gap-4">
        <h3 class="text-sm font-semibold">With Submenu</h3>
        <ContextMenu>
          <ContextMenuTrigger class="flex aspect-[2/0.5] w-full items-center justify-center rounded-lg border text-sm">
            Right click here
          </ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuGroup>
              <ContextMenuItem>
                Copy
                <ContextMenuShortcut>Ctrl+C</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem>
                Cut
                <ContextMenuShortcut>Ctrl+X</ContextMenuShortcut>
              </ContextMenuItem>
            </ContextMenuGroup>
            <ContextMenuSub>
              <ContextMenuSubTrigger>More Tools</ContextMenuSubTrigger>
              <ContextMenuSubContent>
                <ContextMenuGroup>
                  <ContextMenuItem>Save Page...</ContextMenuItem>
                  <ContextMenuItem>Create Shortcut...</ContextMenuItem>
                  <ContextMenuItem>Name Window...</ContextMenuItem>
                </ContextMenuGroup>
                <ContextMenuSeparator />
                <ContextMenuGroup>
                  <ContextMenuItem>Developer Tools</ContextMenuItem>
                </ContextMenuGroup>
                <ContextMenuSeparator />
                <ContextMenuGroup>
                  <ContextMenuItem class="text-destructive focus:text-destructive">Delete</ContextMenuItem>
                </ContextMenuGroup>
              </ContextMenuSubContent>
            </ContextMenuSub>
          </ContextMenuContent>
        </ContextMenu>
      </section>

      <section class="flex flex-col gap-4">
        <h3 class="text-sm font-semibold">With Groups, Labels & Separators</h3>
        <ContextMenu>
          <ContextMenuTrigger class="flex aspect-[2/0.5] w-full items-center justify-center rounded-lg border text-sm">
            Right click here
          </ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuGroup>
              <ContextMenuLabel>File</ContextMenuLabel>
              <ContextMenuItem>
                New File
                <ContextMenuShortcut>Ctrl+N</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem>
                Open File
                <ContextMenuShortcut>Ctrl+O</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem>
                Save
                <ContextMenuShortcut>Ctrl+S</ContextMenuShortcut>
              </ContextMenuItem>
            </ContextMenuGroup>
            <ContextMenuSeparator />
            <ContextMenuGroup>
              <ContextMenuLabel>Edit</ContextMenuLabel>
              <ContextMenuItem>
                Undo
                <ContextMenuShortcut>Ctrl+Z</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem>
                Redo
                <ContextMenuShortcut>Ctrl+Shift+Z</ContextMenuShortcut>
              </ContextMenuItem>
            </ContextMenuGroup>
            <ContextMenuSeparator />
            <ContextMenuGroup>
              <ContextMenuItem>
                Cut
                <ContextMenuShortcut>Ctrl+X</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem>
                Copy
                <ContextMenuShortcut>Ctrl+C</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem>
                Paste
                <ContextMenuShortcut>Ctrl+V</ContextMenuShortcut>
              </ContextMenuItem>
            </ContextMenuGroup>
            <ContextMenuSeparator />
            <ContextMenuGroup>
              <ContextMenuItem class="text-destructive focus:text-destructive">
                Delete
                <ContextMenuShortcut>Del</ContextMenuShortcut>
              </ContextMenuItem>
            </ContextMenuGroup>
          </ContextMenuContent>
        </ContextMenu>
      </section>

      <section class="flex flex-col gap-4">
        <h3 class="text-sm font-semibold">With Checkboxes</h3>
        <ContextMenu>
          <ContextMenuTrigger class="flex aspect-[2/0.5] w-full items-center justify-center rounded-lg border text-sm">
            Right click here
          </ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuGroup>
              <ContextMenuCheckboxItem defaultChecked>Show Bookmarks Bar</ContextMenuCheckboxItem>
              <ContextMenuCheckboxItem>Show Full URLs</ContextMenuCheckboxItem>
              <ContextMenuCheckboxItem defaultChecked>Show Developer Tools</ContextMenuCheckboxItem>
            </ContextMenuGroup>
          </ContextMenuContent>
        </ContextMenu>
      </section>

      <section class="flex flex-col gap-4">
        <h3 class="text-sm font-semibold">With Radio Group</h3>
        <ContextMenu>
          <ContextMenuTrigger class="flex aspect-[2/0.5] w-full items-center justify-center rounded-lg border text-sm">
            Right click here
          </ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuGroup>
              <ContextMenuLabel>People</ContextMenuLabel>
              <ContextMenuRadioGroup value={person()} onChange={setPerson}>
                <ContextMenuRadioItem value="pedro">Pedro Duarte</ContextMenuRadioItem>
                <ContextMenuRadioItem value="colm">Colm Tuite</ContextMenuRadioItem>
              </ContextMenuRadioGroup>
            </ContextMenuGroup>
            <ContextMenuSeparator />
            <ContextMenuGroup>
              <ContextMenuLabel>Theme</ContextMenuLabel>
              <ContextMenuRadioGroup value={theme()} onChange={setTheme}>
                <ContextMenuRadioItem value="light">Light</ContextMenuRadioItem>
                <ContextMenuRadioItem value="dark">Dark</ContextMenuRadioItem>
                <ContextMenuRadioItem value="system">System</ContextMenuRadioItem>
              </ContextMenuRadioGroup>
            </ContextMenuGroup>
          </ContextMenuContent>
        </ContextMenu>
      </section>

      <section class="flex flex-col gap-4">
        <h3 class="text-sm font-semibold">With Destructive Items</h3>
        <ContextMenu>
          <ContextMenuTrigger class="flex aspect-[2/0.5] w-full items-center justify-center rounded-lg border text-sm">
            Right click here
          </ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuGroup>
              <ContextMenuItem>
                <IconStub />
                Edit
              </ContextMenuItem>
              <ContextMenuItem>
                <IconStub />
                Share
              </ContextMenuItem>
            </ContextMenuGroup>
            <ContextMenuSeparator />
            <ContextMenuGroup>
              <ContextMenuItem>
                <IconStub />
                Archive
              </ContextMenuItem>
              <ContextMenuItem class="text-destructive focus:text-destructive">
                <IconStub class="bg-destructive/20" />
                Delete
              </ContextMenuItem>
            </ContextMenuGroup>
          </ContextMenuContent>
        </ContextMenu>
      </section>

      <section class="flex flex-col gap-4">
        <h3 class="text-sm font-semibold">In Dialog</h3>
        <Dialog>
          <DialogTrigger as={Button} variant="outline">
            Open Dialog
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Context Menu Example</DialogTitle>
              <DialogDescription>Right click on the area below to see the context menu.</DialogDescription>
            </DialogHeader>
            <ContextMenu>
              <ContextMenuTrigger class="flex aspect-[2/0.5] w-full items-center justify-center rounded-lg border text-sm">
                Right click here
              </ContextMenuTrigger>
              <ContextMenuContent>
                <ContextMenuGroup>
                  <ContextMenuItem>
                    <IconStub />
                    Copy
                  </ContextMenuItem>
                  <ContextMenuItem>
                    <IconStub />
                    Cut
                  </ContextMenuItem>
                  <ContextMenuItem>
                    <IconStub />
                    Paste
                  </ContextMenuItem>
                </ContextMenuGroup>
                <ContextMenuSeparator />
                <ContextMenuSub>
                  <ContextMenuSubTrigger>More Options</ContextMenuSubTrigger>
                  <ContextMenuSubContent>
                    <ContextMenuGroup>
                      <ContextMenuItem>Save Page...</ContextMenuItem>
                      <ContextMenuItem>Create Shortcut...</ContextMenuItem>
                      <ContextMenuItem>Name Window...</ContextMenuItem>
                    </ContextMenuGroup>
                    <ContextMenuSeparator />
                    <ContextMenuGroup>
                      <ContextMenuItem>Developer Tools</ContextMenuItem>
                    </ContextMenuGroup>
                  </ContextMenuSubContent>
                </ContextMenuSub>
                <ContextMenuSeparator />
                <ContextMenuGroup>
                  <ContextMenuItem class="text-destructive focus:text-destructive">
                    <IconStub class="bg-destructive/20" />
                    Delete
                  </ContextMenuItem>
                </ContextMenuGroup>
              </ContextMenuContent>
            </ContextMenu>
          </DialogContent>
        </Dialog>
      </section>

      <section class="flex flex-col gap-4">
        <h3 class="text-sm font-semibold">With Inset</h3>
        <ContextMenu>
          <ContextMenuTrigger class="flex aspect-[2/0.5] w-full items-center justify-center rounded-lg border text-sm">
            Right click here
          </ContextMenuTrigger>
          <ContextMenuContent class="w-44">
            <ContextMenuGroup>
              <ContextMenuLabel>Actions</ContextMenuLabel>
              <ContextMenuItem>
                <IconStub />
                Copy
              </ContextMenuItem>
              <ContextMenuItem>
                <IconStub />
                Cut
              </ContextMenuItem>
              <ContextMenuItem inset>Paste</ContextMenuItem>
            </ContextMenuGroup>
            <ContextMenuSeparator />
            <ContextMenuGroup>
              <ContextMenuLabel inset>Appearance</ContextMenuLabel>
              <ContextMenuCheckboxItem class="pl-8" checked={showBookmarks()} onChange={setShowBookmarks}>
                Bookmarks
              </ContextMenuCheckboxItem>
              <ContextMenuCheckboxItem class="pl-8" checked={showUrls()} onChange={setShowUrls}>
                Full URLs
              </ContextMenuCheckboxItem>
            </ContextMenuGroup>
            <ContextMenuSeparator />
            <ContextMenuGroup>
              <ContextMenuLabel inset>Theme</ContextMenuLabel>
              <ContextMenuRadioGroup value={theme()} onChange={setTheme}>
                <ContextMenuRadioItem class="pl-8" value="light">
                  Light
                </ContextMenuRadioItem>
                <ContextMenuRadioItem class="pl-8" value="dark">
                  Dark
                </ContextMenuRadioItem>
                <ContextMenuRadioItem class="pl-8" value="system">
                  System
                </ContextMenuRadioItem>
              </ContextMenuRadioGroup>
            </ContextMenuGroup>
            <ContextMenuSeparator />
            <ContextMenuSub>
              <ContextMenuSubTrigger inset>More Options</ContextMenuSubTrigger>
              <ContextMenuSubContent>
                <ContextMenuGroup>
                  <ContextMenuItem>Save Page...</ContextMenuItem>
                  <ContextMenuItem>Create Shortcut...</ContextMenuItem>
                </ContextMenuGroup>
              </ContextMenuSubContent>
            </ContextMenuSub>
          </ContextMenuContent>
        </ContextMenu>
      </section>
    </div>
  )
}
