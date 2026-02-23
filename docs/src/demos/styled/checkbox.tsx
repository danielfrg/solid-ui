import { createSignal } from "solid-js"
import { Checkbox, CheckboxLabel, CheckboxDescription } from "@danielfrg/solid-ui/checkbox"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@danielfrg/solid-ui/table"

const tableData = [
  { id: "1", name: "Sarah Chen", email: "sarah.chen@example.com", role: "Admin" },
  { id: "2", name: "Marcus Rodriguez", email: "marcus.rodriguez@example.com", role: "User" },
  { id: "3", name: "Priya Patel", email: "priya.patel@example.com", role: "User" },
  { id: "4", name: "David Kim", email: "david.kim@example.com", role: "Editor" },
]

export function CheckboxBasic() {
  return (
    <Checkbox>
      <CheckboxLabel>Accept terms and conditions</CheckboxLabel>
    </Checkbox>
  )
}

export function CheckboxDescriptionDemo() {
  return (
    <Checkbox defaultChecked>
      <div class="grid gap-1.5 leading-none">
        <CheckboxLabel>Accept terms and conditions</CheckboxLabel>
        <CheckboxDescription>By clicking this checkbox, you agree to the terms and conditions.</CheckboxDescription>
      </div>
    </Checkbox>
  )
}

export function CheckboxDisabled() {
  return (
    <Checkbox disabled>
      <CheckboxLabel>Enable notifications</CheckboxLabel>
    </Checkbox>
  )
}

export function CheckboxGroup() {
  return (
    <div class="flex flex-col gap-3">
      <Checkbox>
        <CheckboxLabel class="font-normal">Hard disks</CheckboxLabel>
      </Checkbox>
      <Checkbox>
        <CheckboxLabel class="font-normal">External disks</CheckboxLabel>
      </Checkbox>
      <Checkbox>
        <CheckboxLabel class="font-normal">CDs, DVDs, and iPods</CheckboxLabel>
      </Checkbox>
      <Checkbox>
        <CheckboxLabel class="font-normal">Connected servers</CheckboxLabel>
      </Checkbox>
    </div>
  )
}

export function CheckboxTable() {
  const [selectedRows, setSelectedRows] = createSignal<Set<string>>(new Set<string>(["1"]))

  const selectAll = () => selectedRows().size === tableData.length

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedRows(new Set<string>(tableData.map((row) => row.id)))
      return
    }

    setSelectedRows(new Set<string>())
  }

  const handleSelectRow = (id: string, checked: boolean) => {
    const next = new Set(selectedRows())
    if (checked) {
      next.add(id)
    } else {
      next.delete(id)
    }
    setSelectedRows(next)
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead class="w-8">
            <Checkbox checked={selectAll()} onChange={handleSelectAll} />
          </TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tableData.map((row) => (
          <TableRow data-state={selectedRows().has(row.id) ? "selected" : undefined}>
            <TableCell>
              <Checkbox checked={selectedRows().has(row.id)} onChange={(checked) => handleSelectRow(row.id, checked)} />
            </TableCell>
            <TableCell class="font-medium">{row.name}</TableCell>
            <TableCell>{row.email}</TableCell>
            <TableCell>{row.role}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
