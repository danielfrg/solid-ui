import { For, createSignal } from "solid-js"
import { Badge } from "@danielfrg/solid-ui/badge"
import { Button } from "@danielfrg/solid-ui/button"
import { Checkbox } from "@danielfrg/solid-ui/checkbox"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@danielfrg/solid-ui/table"

const invoices = [
  { invoice: "INV001", status: "Paid", method: "Credit Card", amount: "$250.00" },
  { invoice: "INV002", status: "Pending", method: "PayPal", amount: "$150.00" },
  { invoice: "INV003", status: "Unpaid", method: "Bank Transfer", amount: "$350.00" },
  { invoice: "INV004", status: "Paid", method: "Credit Card", amount: "$450.00" },
  { invoice: "INV005", status: "Paid", method: "PayPal", amount: "$550.00" },
  { invoice: "INV006", status: "Pending", method: "Bank Transfer", amount: "$200.00" },
]

const tasks = [
  { id: "TASK-1", title: "Update documentation", status: "Done", priority: "Low" },
  { id: "TASK-2", title: "Fix login bug", status: "In Progress", priority: "High" },
  { id: "TASK-3", title: "Add dark mode support", status: "Todo", priority: "Medium" },
  { id: "TASK-4", title: "Write integration tests", status: "In Progress", priority: "High" },
  { id: "TASK-5", title: "Optimize bundle size", status: "Todo", priority: "Medium" },
]

const statusColor: Record<string, string> = {
  Done: "bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300",
  "In Progress": "bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300",
  Todo: "bg-muted text-muted-foreground",
}

const priorityColor: Record<string, string> = {
  High: "bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300",
  Medium: "bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300",
  Low: "bg-muted text-muted-foreground",
}

export function TableShowcase() {
  const [selected, setSelected] = createSignal<Set<string>>(new Set())
  const allSelected = () => selected().size === tasks.length
  const someSelected = () => selected().size > 0 && selected().size < tasks.length

  const toggleAll = () => {
    if (allSelected()) setSelected(new Set())
    else setSelected(new Set(tasks.map((t) => t.id)))
  }
  const toggleRow = (id: string) => {
    const next = new Set(selected())
    if (next.has(id)) next.delete(id)
    else next.add(id)
    setSelected(next)
  }

  return (
    <div class="flex flex-col gap-10">
      {/* Invoice table */}
      <section class="flex flex-col gap-3">
        <h3 class="text-sm font-semibold">Invoice Table</h3>
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead class="w-[100px]">Invoice</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Method</TableHead>
              <TableHead class="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <For each={invoices}>
              {(inv) => (
                <TableRow>
                  <TableCell class="font-medium">{inv.invoice}</TableCell>
                  <TableCell>{inv.status}</TableCell>
                  <TableCell>{inv.method}</TableCell>
                  <TableCell class="text-right">{inv.amount}</TableCell>
                </TableRow>
              )}
            </For>
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total</TableCell>
              <TableCell class="text-right">$1,950.00</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </section>

      {/* Tasks with badges */}
      <section class="flex flex-col gap-3">
        <h3 class="text-sm font-semibold">With Badges</h3>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead class="w-[100px]">ID</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Priority</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <For each={tasks}>
              {(task) => (
                <TableRow>
                  <TableCell class="font-mono text-xs">{task.id}</TableCell>
                  <TableCell class="font-medium">{task.title}</TableCell>
                  <TableCell>
                    <Badge class={statusColor[task.status]} variant="secondary">{task.status}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge class={priorityColor[task.priority]} variant="secondary">{task.priority}</Badge>
                  </TableCell>
                </TableRow>
              )}
            </For>
          </TableBody>
        </Table>
      </section>

      {/* With actions */}
      <section class="flex flex-col gap-3">
        <h3 class="text-sm font-semibold">With Actions</h3>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Product</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Stock</TableHead>
              <TableHead class="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell class="font-medium">Wireless Headphones</TableCell>
              <TableCell>$99.00</TableCell>
              <TableCell>45</TableCell>
              <TableCell class="text-right">
                <Button variant="ghost" size="xs">Edit</Button>
                <Button variant="ghost" size="xs" class="text-destructive">Delete</Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell class="font-medium">USB-C Cable</TableCell>
              <TableCell>$12.00</TableCell>
              <TableCell>200</TableCell>
              <TableCell class="text-right">
                <Button variant="ghost" size="xs">Edit</Button>
                <Button variant="ghost" size="xs" class="text-destructive">Delete</Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell class="font-medium">Laptop Stand</TableCell>
              <TableCell>$45.00</TableCell>
              <TableCell>12</TableCell>
              <TableCell class="text-right">
                <Button variant="ghost" size="xs">Edit</Button>
                <Button variant="ghost" size="xs" class="text-destructive">Delete</Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </section>

      {/* With selection */}
      <section class="flex flex-col gap-3">
        <h3 class="text-sm font-semibold">With Selection</h3>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead class="w-10">
                <Checkbox checked={allSelected()} indeterminate={someSelected()} onChange={toggleAll} aria-label="Select all" />
              </TableHead>
              <TableHead>Task</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Priority</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <For each={tasks}>
              {(task) => (
                <TableRow class={selected().has(task.id) ? "bg-muted/50" : ""}>
                  <TableCell>
                    <Checkbox checked={selected().has(task.id)} onChange={() => toggleRow(task.id)} aria-label={`Select ${task.title}`} />
                  </TableCell>
                  <TableCell class="font-medium">{task.title}</TableCell>
                  <TableCell>{task.status}</TableCell>
                  <TableCell>{task.priority}</TableCell>
                </TableRow>
              )}
            </For>
          </TableBody>
        </Table>
        <p class="text-xs text-muted-foreground">{selected().size} of {tasks.length} row(s) selected.</p>
      </section>
    </div>
  )
}
