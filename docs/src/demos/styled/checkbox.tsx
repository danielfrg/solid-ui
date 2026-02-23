import { createSignal, For } from "solid-js"
import { Checkbox, CheckboxLabel, CheckboxDescription } from "@danielfrg/solid-ui/checkbox"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@danielfrg/solid-ui/table"

export function CheckboxBasic() {
  return (
    <Checkbox id="terms">
      <CheckboxLabel>Accept terms and conditions</CheckboxLabel>
    </Checkbox>
  )
}

export function CheckboxDescriptionDemo() {
  return (
    <Checkbox id="terms-2" defaultChecked>
      <CheckboxLabel>Accept terms and conditions</CheckboxLabel>
      <CheckboxDescription>By clicking this checkbox, you agree to the terms and conditions.</CheckboxDescription>
    </Checkbox>
  )
}

export function CheckboxInvalid() {
  return (
    <Checkbox id="terms-3" aria-invalid>
      <CheckboxLabel>Accept terms and conditions</CheckboxLabel>
    </Checkbox>
  )
}

export function CheckboxDisabled() {
  return (
    <Checkbox id="toggle" disabled>
      <CheckboxLabel>Enable notifications</CheckboxLabel>
    </Checkbox>
  )
}

export function CheckboxWithTitle() {
  return (
    <div class="flex flex-col gap-4">
      <Checkbox id="toggle-2" defaultChecked>
        <div class="flex flex-col gap-1">
          <CheckboxLabel class="font-medium">Enable notifications</CheckboxLabel>
          <CheckboxDescription>You can enable or disable notifications at any time.</CheckboxDescription>
        </div>
      </Checkbox>
      <Checkbox id="toggle-4" disabled>
        <div class="flex flex-col gap-1">
          <CheckboxLabel class="font-medium">Enable notifications</CheckboxLabel>
          <CheckboxDescription>You can enable or disable notifications at any time.</CheckboxDescription>
        </div>
      </Checkbox>
    </div>
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

export function CheckboxTable() {
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
  )
}

export function CheckboxGroup() {
  return (
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
  )
}
