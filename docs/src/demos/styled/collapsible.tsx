import { createSignal, For } from "solid-js"
import { Button } from "@danielfrg/solid-ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@danielfrg/solid-ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@danielfrg/solid-ui/collapsible"
import { Input, InputField, InputLabel } from "@danielfrg/solid-ui/input"
import { Tabs, TabsList, TabsTrigger } from "@danielfrg/solid-ui/tabs"
import { ChevronRight, Folder, File, Minus, Plus } from "lucide-solid"

type FileTreeItem = { name: string } | { name: string; items: FileTreeItem[] }

const fileTree: FileTreeItem[] = [
  {
    name: "components",
    items: [
      {
        name: "ui",
        items: [
          { name: "button.tsx" },
          { name: "card.tsx" },
          { name: "dialog.tsx" },
          { name: "input.tsx" },
          { name: "select.tsx" },
          { name: "table.tsx" },
        ],
      },
      { name: "login-form.tsx" },
      { name: "register-form.tsx" },
    ],
  },
  {
    name: "lib",
    items: [{ name: "utils.ts" }, { name: "cn.ts" }, { name: "api.ts" }],
  },
  {
    name: "hooks",
    items: [{ name: "use-media-query.ts" }, { name: "use-debounce.ts" }, { name: "use-local-storage.ts" }],
  },
  {
    name: "types",
    items: [{ name: "index.d.ts" }, { name: "api.d.ts" }],
  },
  {
    name: "public",
    items: [{ name: "favicon.ico" }, { name: "logo.svg" }, { name: "images" }],
  },
  { name: "app.tsx" },
  { name: "layout.tsx" },
  { name: "globals.css" },
  { name: "package.json" },
  { name: "tsconfig.json" },
  { name: "README.md" },
  { name: ".gitignore" },
]

function renderItem(fileItem: FileTreeItem, index: number) {
  if ("items" in fileItem) {
    return (
      <Collapsible defaultOpen>
        <CollapsibleTrigger
          as={Button}
          variant="ghost"
          size="sm"
          class="group w-full justify-start hover:bg-accent hover:text-accent-foreground transition-none"
        >
          <ChevronRight class="size-4 transition-transform group-data-[expanded]:rotate-90" />
          <Folder class="size-4" />
          {fileItem.name}
        </CollapsibleTrigger>
        <CollapsibleContent class="ml-4 mt-1 pl-4 border-l">
          <div class="flex flex-col gap-1">
            <For each={fileItem.items}>{(child, i) => renderItem(child, i())}</For>
          </div>
        </CollapsibleContent>
      </Collapsible>
    )
  }
  return (
    <Button variant="link" size="sm" class="w-full justify-start gap-2 text-foreground">
      <File class="size-4" />
      <span>{fileItem.name}</span>
    </Button>
  )
}

export function CollapsibleBasic() {
  const [isOpen, setIsOpen] = createSignal(false)

  return (
    <Collapsible open={isOpen()} onOpenChange={setIsOpen} class="w-full max-w-sm space-y-2">
      <div class="flex items-center justify-between space-x-4 px-4">
        <h4 class="text-sm font-semibold">@peduarte starred 3 repositories</h4>
        <CollapsibleTrigger as={Button} variant="ghost" size="sm">
          <ChevronRight class="size-4 transition-transform" classList={{ "rotate-90": isOpen() }} />
          <span class="sr-only">Toggle</span>
        </CollapsibleTrigger>
      </div>
      <div class="rounded-md border px-4 py-2 font-mono text-sm shadow-xs">@radix-ui/primitives</div>
      <CollapsibleContent class="space-y-2">
        <div class="rounded-md border px-4 py-2 font-mono text-sm shadow-xs">@radix-ui/colors</div>
        <div class="rounded-md border px-4 py-2 font-mono text-sm shadow-xs">@stitches/react</div>
      </CollapsibleContent>
    </Collapsible>
  )
}

export function CollapsibleFileTree() {
  return (
    <Card class="mx-auto w-full max-w-[16rem]">
      <CardHeader>
        <Tabs defaultValue="explorer">
          <TabsList class="w-full">
            <TabsTrigger value="explorer">Explorer</TabsTrigger>
            <TabsTrigger value="settings">Outline</TabsTrigger>
          </TabsList>
        </Tabs>
      </CardHeader>
      <CardContent>
        <div class="flex flex-col gap-1">
          <For each={fileTree}>{(item, i) => renderItem(item, i())}</For>
        </div>
      </CardContent>
    </Card>
  )
}

export function CollapsibleSettingsPanel() {
  const [isOpen, setIsOpen] = createSignal(false)

  return (
    <Card class="mx-auto w-full max-w-xs">
      <CardHeader>
        <CardTitle>Radius</CardTitle>
        <CardDescription>Set the corner radius of the element.</CardDescription>
      </CardHeader>
      <CardContent>
        <Collapsible open={isOpen()} onOpenChange={setIsOpen} class="flex items-start gap-2">
          <div class="grid w-full grid-cols-2 gap-2">
            <Input>
              <InputLabel class="sr-only">Radius X</InputLabel>
              <InputField value="0" />
            </Input>
            <Input>
              <InputLabel class="sr-only">Radius Y</InputLabel>
              <InputField value="0" />
            </Input>
            <CollapsibleContent class="col-span-full grid grid-cols-subgrid gap-2">
              <Input>
                <InputLabel class="sr-only">Radius X</InputLabel>
                <InputField value="0" />
              </Input>
              <Input>
                <InputLabel class="sr-only">Radius Y</InputLabel>
                <InputField value="0" />
              </Input>
            </CollapsibleContent>
          </div>
          <CollapsibleTrigger as={Button} variant="outline" size="icon">
            {isOpen() ? <Minus class="size-4" /> : <Plus class="size-4" />}
          </CollapsibleTrigger>
        </Collapsible>
      </CardContent>
    </Card>
  )
}
