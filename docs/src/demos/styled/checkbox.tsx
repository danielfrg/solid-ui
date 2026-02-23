import { createSignal, For } from "solid-js"
import { Checkbox, CheckboxLabel, CheckboxDescription } from "@danielfrg/solid-ui/checkbox"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@danielfrg/solid-ui/table"
import { ExampleWrapper, Example } from "@/components/example"

export default function CheckboxExample() {
  return (
    <ExampleWrapper>
      <CheckboxBasic />
      <CheckboxWithDescription />
      <CheckboxInvalid />
      <CheckboxDisabled />
      <CheckboxWithTitle />
      <CheckboxInTable />
      <CheckboxGroup />
    </ExampleWrapper>
  )
}

function CheckboxBasic() {
  return (
    <Example title="Basic">
      <Checkbox id="terms">
        <CheckboxLabel>Accept terms and conditions</CheckboxLabel>
      </Checkbox>
    </Example>
  )
}

function CheckboxWithDescription() {
  return (
    <Example title="With Description">
      <Checkbox id="terms-2" defaultChecked>
        <div class="flex flex-col gap-1">
          <CheckboxLabel>Accept terms and conditions</CheckboxLabel>
          <CheckboxDescription>By clicking this checkbox, you agree to the terms and conditions.</CheckboxDescription>
        </div>
      </Checkbox>
    </Example>
  )
}

function CheckboxInvalid() {
  return (
    <Example title="Invalid">
      <Checkbox id="terms-3" aria-invalid>
        <CheckboxLabel>Accept terms and conditions</CheckboxLabel>
      </Checkbox>
    </Example>
  )
}

function CheckboxDisabled() {
  return (
    <Example title="Disabled">
      <Checkbox id="toggle" disabled>
        <CheckboxLabel>Enable notifications</CheckboxLabel>
      </Checkbox>
    </Example>
  )
}

function CheckboxWithTitle() {
  return (
    <Example title="With Title">
      <div class="flex flex-col gap-3">
        <label
          for="toggle-2"
          class="flex cursor-pointer items-start gap-3 rounded-lg border p-3 has-[:checked]:border-primary/30 has-[:checked]:bg-primary/5 hover:bg-muted/50"
        >
          <Checkbox id="toggle-2" defaultChecked />
          <div class="flex flex-col gap-1">
            <span class="text-sm font-medium">Enable notifications</span>
            <span class="text-sm text-muted-foreground">You can enable or disable notifications at any time.</span>
          </div>
        </label>
        <label for="toggle-4" class="flex cursor-pointer items-start gap-3 rounded-lg border p-3 opacity-60">
          <Checkbox id="toggle-4" disabled />
          <div class="flex flex-col gap-1">
            <span class="text-sm font-medium">Enable notifications</span>
            <span class="text-sm text-muted-foreground">You can enable or disable notifications at any time.</span>
          </div>
        </label>
      </div>
    </Example>
  )
}

const tableData = [
  {
    id: "1",
    name: "Sarah Chen",
    email: "sarah.chen@example.com",
    role: "Admin",
  },
  {
    id: "2",
    name: "Marcus Rodriguez",
    email: "marcus.rodriguez@example.com",
    role: "User",
  },
  {
    id: "3",
    name: "Priya Patel",
    email: "priya.patel@example.com",
    role: "User",
  },
  {
    id: "4",
    name: "David Kim",
    email: "david.kim@example.com",
    role: "Editor",
  },
]

function CheckboxInTable() {
  const [selectedRows, setSelectedRows] = createSignal<Set<string>>(new Set(["1"]))

  const selectAll = () => selectedRows().size === tableData.length

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedRows(new Set(tableData.map((row) => row.id)))
    } else {
      setSelectedRows(new Set<string>())
    }
  }

  const handleSelectRow = (id: string, checked: boolean) => {
    const newSelected = new Set(selectedRows())
    if (checked) {
      newSelected.add(id)
    } else {
      newSelected.delete(id)
    }
    setSelectedRows(newSelected)
  }

  return (
    <Example title="In Table">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead class="w-8">
              <Checkbox checked={selectAll()} onChange={handleSelectAll} aria-label="Select all" />
            </TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <For each={tableData}>
            {(row) => (
              <TableRow data-state={selectedRows().has(row.id) ? "selected" : undefined}>
                <TableCell>
                  <Checkbox
                    checked={selectedRows().has(row.id)}
                    onChange={(checked: boolean) => handleSelectRow(row.id, checked)}
                    aria-label={`Select ${row.name}`}
                  />
                </TableCell>
                <TableCell class="font-medium">{row.name}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.role}</TableCell>
              </TableRow>
            )}
          </For>
        </TableBody>
      </Table>
    </Example>
  )
}

function CheckboxGroup() {
  return (
    <Example title="Group">
      <div class="flex flex-col gap-4">
        <span class="text-sm font-medium">Show these items on the desktop:</span>
        <Checkbox id="finder-pref-hard-disks">
          <CheckboxLabel class="font-normal">Hard disks</CheckboxLabel>
        </Checkbox>
        <Checkbox id="finder-pref-external-disks">
          <CheckboxLabel class="font-normal">External disks</CheckboxLabel>
        </Checkbox>
        <Checkbox id="finder-pref-cds-dvds">
          <CheckboxLabel class="font-normal">CDs, DVDs, and iPods</CheckboxLabel>
        </Checkbox>
        <Checkbox id="finder-pref-connected-servers">
          <CheckboxLabel class="font-normal">Connected servers</CheckboxLabel>
        </Checkbox>
      </div>
    </Example>
  )
}
