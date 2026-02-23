import { Tabs, TabsList, TabsTrigger, TabsContent } from "@danielfrg/solid-ui/tabs"
import { Button } from "@danielfrg/solid-ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@danielfrg/solid-ui/card"

export function TabsShowcase() {
  return (
    <div class="flex flex-col gap-10">
      <section class="flex flex-col gap-3">
        <h3 class="text-sm font-semibold">With Cards</h3>
        <Tabs defaultValue="overview" class="w-full max-w-md">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          <TabsContent value="overview">
            <Card>
              <CardHeader>
                <CardTitle>Overview</CardTitle>
                <CardDescription>
                  View your key metrics and recent project activity. Track progress across all your active projects.
                </CardDescription>
              </CardHeader>
              <CardContent class="text-muted-foreground text-sm">
                You have 12 active projects and 3 pending tasks.
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="analytics">
            <Card>
              <CardHeader>
                <CardTitle>Analytics</CardTitle>
                <CardDescription>
                  Track performance and user engagement metrics. Monitor trends and identify growth opportunities.
                </CardDescription>
              </CardHeader>
              <CardContent class="text-muted-foreground text-sm">
                Page views are up 25% compared to last month.
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="reports">
            <Card>
              <CardHeader>
                <CardTitle>Reports</CardTitle>
                <CardDescription>
                  Generate and download detailed reports. Export data in multiple formats for analysis.
                </CardDescription>
              </CardHeader>
              <CardContent class="text-muted-foreground text-sm">
                You have 5 reports ready to export.
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle>Settings</CardTitle>
                <CardDescription>
                  Manage your account preferences and options. Customize your experience to fit your needs.
                </CardDescription>
              </CardHeader>
              <CardContent class="text-muted-foreground text-sm">
                Configure notifications, security, and themes.
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      <section class="flex flex-col gap-3">
        <h3 class="text-sm font-semibold">Form Tabs</h3>
        <Tabs defaultValue="account" class="w-full max-w-md">
          <TabsList class="grid w-full grid-cols-2">
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <Card>
              <CardHeader>
                <CardTitle>Account</CardTitle>
                <CardDescription>Make changes to your account here. Click save when you're done.</CardDescription>
              </CardHeader>
              <CardContent>
                <div class="flex flex-col gap-4">
                  <div class="flex flex-col gap-2">
                    <label class="text-sm font-medium">Name</label>
                    <input class="h-9 rounded-md border border-input bg-transparent px-3 text-sm" value="Pedro Duarte" />
                  </div>
                  <div class="flex flex-col gap-2">
                    <label class="text-sm font-medium">Username</label>
                    <input class="h-9 rounded-md border border-input bg-transparent px-3 text-sm" value="@peduarte" />
                  </div>
                  <Button class="w-fit">Save changes</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="password">
            <Card>
              <CardHeader>
                <CardTitle>Password</CardTitle>
                <CardDescription>Change your password here. After saving, you'll be logged out.</CardDescription>
              </CardHeader>
              <CardContent>
                <div class="flex flex-col gap-4">
                  <div class="flex flex-col gap-2">
                    <label class="text-sm font-medium">Current password</label>
                    <input class="h-9 rounded-md border border-input bg-transparent px-3 text-sm" type="password" />
                  </div>
                  <div class="flex flex-col gap-2">
                    <label class="text-sm font-medium">New password</label>
                    <input class="h-9 rounded-md border border-input bg-transparent px-3 text-sm" type="password" />
                  </div>
                  <Button class="w-fit">Save password</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>
    </div>
  )
}
