import { createSignal } from "solid-js"
import { Button } from "@danielfrg/solid-ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@danielfrg/solid-ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@danielfrg/solid-ui/collapsible"
import { Input, InputField, InputLabel } from "@danielfrg/solid-ui/input"
import { Tabs, TabsList, TabsTrigger } from "@danielfrg/solid-ui/tabs"

type FileTreeItem = { name: string; items?: FileTreeItem[] }

const fileTree: FileTreeItem[] = [
  {
    name: "components",
    items: [
      { name: "ui", items: [{ name: "button.tsx" }, { name: "card.tsx" }, { name: "dialog.tsx" }] },
      { name: "login-form.tsx" },
      { name: "register-form.tsx" },
    ],
  },
  { name: "lib", items: [{ name: "utils.ts" }, { name: "api.ts" }] },
  { name: "hooks", items: [{ name: "use-debounce.ts" }, { name: "use-local-storage.ts" }] },
  { name: "types", items: [{ name: "index.d.ts" }] },
  { name: "public", items: [{ name: "logo.svg" }, { name: "images" }] },
  { name: "app.tsx" },
  { name: "README.md" },
]

const renderItem = (item: FileTreeItem) => {
  if (item.items) {
    return (
      <Collapsible defaultOpen class="group">
        <CollapsibleTrigger class="inline-flex w-full items-center justify-start gap-2 rounded-md px-3 py-1 text-sm hover:bg-accent">
          <span class="text-muted-foreground w-3 transition-transform group-data-[expanded]:rotate-90">&gt;</span>
          <span class="font-medium">{item.name}</span>
        </CollapsibleTrigger>
        <CollapsibleContent class="ml-5 mt-1 flex flex-col gap-1">
          {item.items.map((child) => renderItem(child))}
        </CollapsibleContent>
      </Collapsible>
    )
  }

  return (
    <Button variant="ghost" size="sm" class="w-full justify-start text-sm">
      {item.name}
    </Button>
  )
}

export function CollapsibleBasic() {
  return (
    <Collapsible class="w-full max-w-sm">
      <div class="flex items-center justify-between rounded-md border px-4 py-2">
        <div>
          <p class="text-sm font-medium">@danielfrg</p>
          <p class="text-xs text-muted-foreground">3 new notifications</p>
        </div>
        <CollapsibleTrigger class="inline-flex h-8 items-center justify-center rounded-md px-3 text-sm font-medium transition-colors hover:bg-accent">
          Details
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent class="mt-2 rounded-md border px-4 py-2 text-sm text-muted-foreground">
        You can view notifications for mentions, comments, and build updates.
      </CollapsibleContent>
    </Collapsible>
  )
}

export function CollapsibleSettingsPanel() {
  const [isOpen, setIsOpen] = createSignal(false)

  return (
    <Card class="mx-auto w-full max-w-sm">
      <CardHeader>
        <CardTitle>Radius</CardTitle>
        <CardDescription>Set the corner radius of the element.</CardDescription>
      </CardHeader>
      <CardContent>
        <Collapsible open={isOpen()} onOpenChange={setIsOpen} class="flex items-start gap-2">
          <div class="grid w-full grid-cols-2 gap-2">
            <Input>
              <InputLabel class="sr-only">Radius X</InputLabel>
              <InputField />
            </Input>
            <Input>
              <InputLabel class="sr-only">Radius Y</InputLabel>
              <InputField />
            </Input>
            <CollapsibleContent class="col-span-full grid grid-cols-2 gap-2">
              <Input>
                <InputLabel class="sr-only">Radius X</InputLabel>
                <InputField />
              </Input>
              <Input>
                <InputLabel class="sr-only">Radius Y</InputLabel>
                <InputField />
              </Input>
            </CollapsibleContent>
          </div>
          <CollapsibleTrigger class="inline-flex size-9 items-center justify-center rounded-md border bg-background text-sm shadow-xs hover:bg-accent">
            {isOpen() ? "-" : "+"}
          </CollapsibleTrigger>
        </Collapsible>
      </CardContent>
    </Card>
  )
}

export function CollapsibleFileTree() {
  return (
    <Card class="mx-auto w-full max-w-xs">
      <CardHeader>
        <Tabs defaultValue="explorer">
          <TabsList class="w-full">
            <TabsTrigger value="explorer">Explorer</TabsTrigger>
            <TabsTrigger value="settings">Outline</TabsTrigger>
          </TabsList>
        </Tabs>
      </CardHeader>
      <CardContent class="flex flex-col gap-1">{fileTree.map((item) => renderItem(item))}</CardContent>
    </Card>
  )
}
