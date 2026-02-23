import { Tabs, TabsList, TabsTrigger, TabsContent } from "@danielfrg/solid-ui/tabs"
import { Button } from "@danielfrg/solid-ui/button"

export function TabsShowcase() {
  return (
    <div class="flex flex-col gap-8">
      {/* Default (matches shadcn tabs demo) */}
      <Tabs defaultValue="account" class="w-full max-w-md">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <div class="rounded-lg border p-4 space-y-4">
            <div>
              <h3 class="text-lg font-semibold">Account</h3>
              <p class="text-sm text-muted-foreground">
                Make changes to your account here. Click save when you're done.
              </p>
            </div>
            <div class="space-y-2">
              <label class="text-sm font-medium">Name</label>
              <input class="flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-sm shadow-xs" value="Pedro Duarte" />
            </div>
            <div class="space-y-2">
              <label class="text-sm font-medium">Username</label>
              <input class="flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-sm shadow-xs" value="@peduarte" />
            </div>
            <Button class="w-fit">Save changes</Button>
          </div>
        </TabsContent>
        <TabsContent value="password">
          <div class="rounded-lg border p-4 space-y-4">
            <div>
              <h3 class="text-lg font-semibold">Password</h3>
              <p class="text-sm text-muted-foreground">
                Change your password here. After saving, you'll be logged out.
              </p>
            </div>
            <div class="space-y-2">
              <label class="text-sm font-medium">Current password</label>
              <input type="password" class="flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-sm shadow-xs" />
            </div>
            <div class="space-y-2">
              <label class="text-sm font-medium">New password</label>
              <input type="password" class="flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-sm shadow-xs" />
            </div>
            <Button class="w-fit">Save password</Button>
          </div>
        </TabsContent>
      </Tabs>

      {/* Multiple tabs + disabled */}
      <Tabs defaultValue="overview" class="w-full max-w-md">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="reports" disabled>Reports</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <p class="text-sm text-muted-foreground p-4">Your project overview and summary.</p>
        </TabsContent>
        <TabsContent value="analytics">
          <p class="text-sm text-muted-foreground p-4">Detailed analytics and metrics.</p>
        </TabsContent>
        <TabsContent value="notifications">
          <p class="text-sm text-muted-foreground p-4">Manage your notification preferences.</p>
        </TabsContent>
      </Tabs>
    </div>
  )
}
