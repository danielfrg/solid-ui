import { Tabs, TabsList, TabsTrigger, TabsContent } from "@danielfrg/solid-ui-nova/tabs"
import { ExampleWrapper, Example } from "@/components/example"

export default function TabsExample() {
  return (
    <ExampleWrapper>
      <TabsBasic />
      <TabsLine />
      <TabsVariantsComparison />
      <TabsDisabled />
      <TabsMultiple />
      <TabsWithContent />
      <TabsLineWithContent />
      <TabsLineDisabled />
    </ExampleWrapper>
  )
}

function TabsBasic() {
  return (
    <Example title="Basic">
      <Tabs defaultValue="home">
        <TabsList>
          <TabsTrigger value="home">Home</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
      </Tabs>
    </Example>
  )
}

function TabsLine() {
  return (
    <Example title="Line">
      <Tabs defaultValue="overview">
        <TabsList data-variant="line">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>
      </Tabs>
    </Example>
  )
}

function TabsVariantsComparison() {
  return (
    <Example title="Variants Alignment">
      <div class="flex gap-4">
        <Tabs defaultValue="overview">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>
        </Tabs>
        <Tabs defaultValue="overview">
          <TabsList data-variant="line">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </Example>
  )
}

function TabsDisabled() {
  return (
    <Example title="Disabled">
      <Tabs defaultValue="home">
        <TabsList>
          <TabsTrigger value="home">Home</TabsTrigger>
          <TabsTrigger value="settings" disabled>
            Disabled
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </Example>
  )
}

function TabsMultiple() {
  return (
    <Example title="Multiple">
      <Tabs defaultValue="overview">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
      </Tabs>
    </Example>
  )
}

function TabsWithContent() {
  return (
    <Example title="With Content">
      <Tabs defaultValue="account">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>
        <div class="rounded-lg border p-4">
          <TabsContent value="account">Manage your account preferences and profile information.</TabsContent>
          <TabsContent value="password">Update your password to keep your account secure.</TabsContent>
          <TabsContent value="notifications">Configure how you receive notifications and alerts.</TabsContent>
        </div>
      </Tabs>
    </Example>
  )
}

function TabsLineWithContent() {
  return (
    <Example title="Line With Content">
      <Tabs defaultValue="account">
        <TabsList data-variant="line">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>
        <div class="rounded-lg border p-4">
          <TabsContent value="account">Manage your account preferences and profile information.</TabsContent>
          <TabsContent value="password">Update your password to keep your account secure.</TabsContent>
          <TabsContent value="notifications">Configure how you receive notifications and alerts.</TabsContent>
        </div>
      </Tabs>
    </Example>
  )
}

function TabsLineDisabled() {
  return (
    <Example title="Line Disabled">
      <Tabs defaultValue="overview">
        <TabsList data-variant="line">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="reports" disabled>
            Reports
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </Example>
  )
}
