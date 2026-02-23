import { For, createSignal } from "solid-js"
import { Badge } from "@danielfrg/ui/badge"
import { Button } from "@danielfrg/ui/button"
import { Checkbox } from "@danielfrg/ui/checkbox"
import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
} from "@danielfrg/ui/table"

const invoices = [
  { invoice: "INV001", status: "Paid", method: "Credit Card", amount: "$250.00" },
  { invoice: "INV002", status: "Pending", method: "PayPal", amount: "$150.00" },
  { invoice: "INV003", status: "Unpaid", method: "Bank Transfer", amount: "$350.00" },
  { invoice: "INV004", status: "Paid", method: "Credit Card", amount: "$450.00" },
  { invoice: "INV005", status: "Paid", method: "PayPal", amount: "$550.00" },
]

export function TableShowcase() {
  return (
    <div class="flex flex-col gap-12">
      <section class="flex flex-col gap-4">
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
              <TableCell class="text-right">$1,750.00</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </section>

      <section class="flex flex-col gap-4">
        <h3 class="text-sm font-semibold">Simple Table</h3>
        <TableSimple />
      </section>

      <section class="flex flex-col gap-4">
        <h3 class="text-sm font-semibold">With Badges</h3>
        <TableWithBadges />
      </section>

      <section class="flex flex-col gap-4">
        <h3 class="text-sm font-semibold">With Actions</h3>
        <TableWithActions />
      </section>

      <section class="flex flex-col gap-4">
        <h3 class="text-sm font-semibold">With Selection</h3>
        <TableWithSelection />
      </section>
    </div>
  )
}

const people = [
  { name: "Sarah Chen", email: "sarah@example.com", role: "Admin" },
  { name: "Marc Rodriguez", email: "marc@example.com", role: "Developer" },
  { name: "Emily Watson", email: "emily@example.com", role: "Designer" },
]

function TableSimple() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <For each={people}>
          {(person) => (
            <TableRow>
              <TableCell class="font-medium">{person.name}</TableCell>
              <TableCell>{person.email}</TableCell>
              <TableCell>{person.role}</TableCell>
            </TableRow>
          )}
        </For>
      </TableBody>
    </Table>
  )
}

const tasks = [
  { task: "Design review", status: "Completed", priority: "High" },
  { task: "API integration", status: "In Progress", priority: "Medium" },
  { task: "Documentation", status: "Pending", priority: "Low" },
  { task: "Testing", status: "In Progress", priority: "High" },
]

function statusColor(status: string) {
  switch (status) {
    case "Completed":
      return "bg-emerald-500/10 text-emerald-600 border-emerald-500/20"
    case "In Progress":
      return "bg-amber-500/10 text-amber-600 border-amber-500/20"
    default:
      return "bg-muted text-muted-foreground"
  }
}

function priorityColor(priority: string) {
  switch (priority) {
    case "High":
      return "bg-blue-500/10 text-blue-600 border-blue-500/20"
    default:
      return "bg-muted text-muted-foreground"
  }
}

function TableWithBadges() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Task</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Priority</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <For each={tasks}>
          {(task) => (
            <TableRow>
              <TableCell class="font-medium">{task.task}</TableCell>
              <TableCell>
                <Badge variant="outline" class={statusColor(task.status)}>
                  {task.status}
                </Badge>
              </TableCell>
              <TableCell>
                <Badge variant="outline" class={priorityColor(task.priority)}>
                  {task.priority}
                </Badge>
              </TableCell>
            </TableRow>
          )}
        </For>
      </TableBody>
    </Table>
  )
}

const products = [
  { name: "Wireless Mouse", category: "Accessories", price: "$29.99" },
  { name: "Mechanical Keyboard", category: "Accessories", price: "$89.99" },
  { name: "USB-C Hub", category: "Peripherals", price: "$49.99" },
]

function TableWithActions() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Product</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Price</TableHead>
          <TableHead class="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <For each={products}>
          {(product) => (
            <TableRow>
              <TableCell class="font-medium">{product.name}</TableCell>
              <TableCell>{product.category}</TableCell>
              <TableCell>{product.price}</TableCell>
              <TableCell class="text-right">
                <Button variant="ghost" size="sm">
                  Edit
                </Button>
                <Button variant="ghost" size="sm" class="text-destructive">
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          )}
        </For>
      </TableBody>
    </Table>
  )
}

const users = [
  { id: "1", name: "Sarah Chen", email: "sarah@example.com", role: "Admin" },
  { id: "2", name: "Marcus Rodriguez", email: "marcus@example.com", role: "Developer" },
  { id: "3", name: "Priya Patel", email: "priya@example.com", role: "Designer" },
  { id: "4", name: "David Kim", email: "david@example.com", role: "Developer" },
]

function TableWithSelection() {
  const [selected, setSelected] = createSignal<Set<string>>(new Set(["1"]))

  const allSelected = () => selected().size === users.length
  const someSelected = () => selected().size > 0 && selected().size < users.length

  function toggleAll() {
    if (allSelected()) {
      setSelected(new Set<string>())
    } else {
      setSelected(new Set<string>(users.map((u) => u.id)))
    }
  }

  function toggleRow(id: string) {
    setSelected((prev) => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead class="w-[40px]">
            <Checkbox checked={allSelected()} indeterminate={someSelected()} onChange={toggleAll} />
          </TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <For each={users}>
          {(user) => (
            <TableRow data-state={selected().has(user.id) ? "selected" : undefined}>
              <TableCell>
                <Checkbox checked={selected().has(user.id)} onChange={() => toggleRow(user.id)} />
              </TableCell>
              <TableCell class="font-medium">{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
            </TableRow>
          )}
        </For>
      </TableBody>
    </Table>
  )
}
