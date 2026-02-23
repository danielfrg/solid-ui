import { createSignal } from "solid-js"
import { Button } from "@danielfrg/solid-ui/button"
import { Card, CardContent } from "@danielfrg/solid-ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@danielfrg/solid-ui/collapsible"

export function CollapsibleBasic() {
  const [isOpen, setIsOpen] = createSignal(false)

  return (
    <Collapsible open={isOpen()} onOpenChange={setIsOpen} class="flex w-[350px] flex-col gap-2">
      <div class="flex items-center justify-between gap-4 px-4">
        <h4 class="text-sm font-semibold">Order #4189</h4>
        <CollapsibleTrigger as={Button} variant="ghost" size="icon" class="size-8">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-4"><path d="m7 15 5 5 5-5" /><path d="m7 9 5-5 5 5" /></svg>
          <span class="sr-only">Toggle details</span>
        </CollapsibleTrigger>
      </div>
      <div class="flex items-center justify-between rounded-md border px-4 py-2 text-sm">
        <span class="text-muted-foreground">Status</span>
        <span class="font-medium">Shipped</span>
      </div>
      <CollapsibleContent class="flex flex-col gap-2">
        <div class="rounded-md border px-4 py-2 text-sm">
          <p class="font-medium">Shipping address</p>
          <p class="text-muted-foreground">100 Market St, San Francisco</p>
        </div>
        <div class="rounded-md border px-4 py-2 text-sm">
          <p class="font-medium">Items</p>
          <p class="text-muted-foreground">2x Studio Headphones</p>
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}

export function CollapsibleSettingsPanel() {
  return (
    <Card class="mx-auto w-full max-w-sm">
      <CardContent>
        <Collapsible>
          <CollapsibleTrigger as={Button} variant="ghost" class="group w-full justify-between">
            Product details
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-auto size-4 transition-transform group-data-[expanded]:rotate-180"><path d="m6 9 6 6 6-6" /></svg>
          </CollapsibleTrigger>
          <CollapsibleContent class="flex flex-col items-start gap-2 px-2.5 pt-0 pb-2.5 text-sm">
            <p>This panel can be expanded or collapsed to reveal additional content.</p>
            <Button size="xs">Learn More</Button>
          </CollapsibleContent>
        </Collapsible>
      </CardContent>
    </Card>
  )
}

export function CollapsibleFileTree() {
  return (
    <Card class="w-full max-w-xs">
      <CardContent class="py-3">
        <Collapsible defaultOpen>
          <CollapsibleTrigger class="flex w-full items-center gap-2 rounded px-2 py-1 text-sm font-medium hover:bg-muted">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-4"><path d="m6 9 6 6 6-6" /></svg>
            src
          </CollapsibleTrigger>
          <CollapsibleContent class="ml-4 flex flex-col border-l pl-2">
            <Collapsible>
              <CollapsibleTrigger class="flex w-full items-center gap-2 rounded px-2 py-1 text-sm hover:bg-muted">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-4"><path d="m6 9 6 6 6-6" /></svg>
                components
              </CollapsibleTrigger>
              <CollapsibleContent class="ml-4 flex flex-col border-l pl-2">
                <span class="rounded px-2 py-1 text-sm text-muted-foreground hover:bg-muted">button.tsx</span>
                <span class="rounded px-2 py-1 text-sm text-muted-foreground hover:bg-muted">card.tsx</span>
                <span class="rounded px-2 py-1 text-sm text-muted-foreground hover:bg-muted">dialog.tsx</span>
              </CollapsibleContent>
            </Collapsible>
            <span class="rounded px-2 py-1 text-sm text-muted-foreground hover:bg-muted">app.tsx</span>
            <span class="rounded px-2 py-1 text-sm text-muted-foreground hover:bg-muted">index.tsx</span>
          </CollapsibleContent>
        </Collapsible>
      </CardContent>
    </Card>
  )
}
