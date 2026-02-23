import { createSignal, For } from "solid-js"
import { Checkbox, CheckboxLabel, CheckboxDescription } from "@danielfrg/solid-ui/checkbox"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@danielfrg/solid-ui/table"

export function CheckboxBasic() {
  return (
    <div class="flex items-start gap-3">
      <Checkbox id="terms" />
      <CheckboxLabel for="terms">Accept terms and conditions</CheckboxLabel>
    </div>
  )
}

export function CheckboxDescriptionDemo() {
  return (
    <div class="flex items-start gap-3">
      <Checkbox id="notifications" defaultChecked />
      <div class="flex flex-col gap-1">
        <CheckboxLabel for="notifications">Enable notifications</CheckboxLabel>
        <CheckboxDescription>You can enable or disable notifications at any time.</CheckboxDescription>
      </div>
    </div>
  )
}

export function CheckboxDisabled() {
  return (
    <div class="flex flex-col gap-4">
      <div class="flex items-start gap-3">
        <Checkbox id="disabled-unchecked" disabled />
        <CheckboxLabel for="disabled-unchecked" class="text-muted-foreground">Disabled unchecked</CheckboxLabel>
      </div>
      <div class="flex items-start gap-3">
        <Checkbox id="disabled-checked" disabled defaultChecked />
        <CheckboxLabel for="disabled-checked" class="text-muted-foreground">Disabled checked</CheckboxLabel>
      </div>
    </div>
  )
}

export function CheckboxGroup() {
  return (
    <fieldset class="flex flex-col gap-4">
      <legend class="text-sm font-medium">Sidebar preferences</legend>
      <div class="flex items-start gap-3">
        <Checkbox id="recents" defaultChecked />
        <CheckboxLabel for="recents">Recents</CheckboxLabel>
      </div>
      <div class="flex items-start gap-3">
        <Checkbox id="home" defaultChecked />
        <CheckboxLabel for="home">Home</CheckboxLabel>
      </div>
      <div class="flex items-start gap-3">
        <Checkbox id="apps" />
        <CheckboxLabel for="apps">Applications</CheckboxLabel>
      </div>
      <div class="flex items-start gap-3">
        <Checkbox id="desktop" />
        <CheckboxLabel for="desktop">Desktop</CheckboxLabel>
      </div>
    </fieldset>
  )
}

const tableData = [
  { id: "task-1", title: "Update documentation", status: "In Progress" },
  { id: "task-2", title: "Fix login bug", status: "Done" },
  { id: "task-3", title: "Add dark mode", status: "Todo" },
  { id: "task-4", title: "Write tests", status: "In Progress" },
]

export function CheckboxTable() {
  const [selected, setSelected] = createSignal<Set<string>>(new Set())

  const allSelected = () => selected().size === tableData.length
  const someSelected = () => selected().size > 0 && selected().size < tableData.length

  const toggleAll = () => {
    if (allSelected()) {
      setSelected(new Set())
    } else {
      setSelected(new Set(tableData.map((r) => r.id)))
    }
  }

  const toggleRow = (id: string) => {
    const next = new Set(selected())
    if (next.has(id)) next.delete(id)
    else next.add(id)
    setSelected(next)
  }

  return (
    <Table class="max-w-lg">
      <TableHeader>
        <TableRow>
          <TableHead class="w-10">
            <Checkbox checked={allSelected()} indeterminate={someSelected()} onChange={toggleAll} aria-label="Select all" />
          </TableHead>
          <TableHead>Task</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <For each={tableData}>
          {(row) => (
            <TableRow>
              <TableCell>
                <Checkbox checked={selected().has(row.id)} onChange={() => toggleRow(row.id)} aria-label={`Select ${row.title}`} />
              </TableCell>
              <TableCell class="font-medium">{row.title}</TableCell>
              <TableCell>{row.status}</TableCell>
            </TableRow>
          )}
        </For>
      </TableBody>
    </Table>
  )
}
