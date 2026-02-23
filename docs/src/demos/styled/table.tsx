import { For } from "solid-js"
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
import { Badge } from "@danielfrg/solid-ui/badge"
import { Button } from "@danielfrg/solid-ui/button"
import { ExampleWrapper, Example } from "@/components/example"

const invoices = [
  { invoice: "INV001", paymentStatus: "Paid", totalAmount: "$250.00", paymentMethod: "Credit Card" },
  { invoice: "INV002", paymentStatus: "Pending", totalAmount: "$150.00", paymentMethod: "PayPal" },
  { invoice: "INV003", paymentStatus: "Unpaid", totalAmount: "$350.00", paymentMethod: "Bank Transfer" },
  { invoice: "INV004", paymentStatus: "Paid", totalAmount: "$450.00", paymentMethod: "Credit Card" },
  { invoice: "INV005", paymentStatus: "Paid", totalAmount: "$550.00", paymentMethod: "PayPal" },
  { invoice: "INV006", paymentStatus: "Pending", totalAmount: "$200.00", paymentMethod: "Bank Transfer" },
  { invoice: "INV007", paymentStatus: "Unpaid", totalAmount: "$300.00", paymentMethod: "Credit Card" },
]

const people = [
  { name: "Sarah Chen", email: "sarah.chen@acme.com", role: "Admin" },
  { name: "Marc Rodriguez", email: "marcus.rodriguez@acme.com", role: "User" },
  { name: "Emily Watson", email: "emily.watson@acme.com", role: "User" },
]

const tasks = [
  { task: "Design homepage", status: "Completed", priority: "High" },
  { task: "Implement API", status: "In Progress", priority: "Medium" },
  { task: "Write tests", status: "Pending", priority: "Low" },
]

const products = [
  { name: "Wireless Mouse", price: "$29.99" },
  { name: "Mechanical Keyboard", price: "$129.99" },
  { name: "USB-C Hub", price: "$49.99" },
]

export default function TableExample() {
  return (
    <ExampleWrapper>
      <TableBasic />
      <TableWithFooter />
      <TableSimple />
      <TableWithBadges />
      <TableWithActions />
    </ExampleWrapper>
  )
}

function TableBasic() {
  return (
    <Example title="Basic">
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
          <For each={invoices.slice(0, 3)}>
            {(invoice) => (
              <TableRow>
                <TableCell class="font-medium">{invoice.invoice}</TableCell>
                <TableCell>{invoice.paymentStatus}</TableCell>
                <TableCell>{invoice.paymentMethod}</TableCell>
                <TableCell class="text-right">{invoice.totalAmount}</TableCell>
              </TableRow>
            )}
          </For>
        </TableBody>
      </Table>
    </Example>
  )
}

function TableWithFooter() {
  return (
    <Example title="With Footer">
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
          <For each={invoices.slice(0, 3)}>
            {(invoice) => (
              <TableRow>
                <TableCell class="font-medium">{invoice.invoice}</TableCell>
                <TableCell>{invoice.paymentStatus}</TableCell>
                <TableCell>{invoice.paymentMethod}</TableCell>
                <TableCell class="text-right">{invoice.totalAmount}</TableCell>
              </TableRow>
            )}
          </For>
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell class="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </Example>
  )
}

function TableSimple() {
  return (
    <Example title="Simple">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead class="text-right">Role</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <For each={people}>
            {(person) => (
              <TableRow>
                <TableCell class="font-medium">{person.name}</TableCell>
                <TableCell>{person.email}</TableCell>
                <TableCell class="text-right">{person.role}</TableCell>
              </TableRow>
            )}
          </For>
        </TableBody>
      </Table>
    </Example>
  )
}

function TableWithBadges() {
  return (
    <Example title="With Badges">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Task</TableHead>
            <TableHead>Status</TableHead>
            <TableHead class="text-right">Priority</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell class="font-medium">{tasks[0].task}</TableCell>
            <TableCell>
              <Badge class="bg-green-500/10 text-green-700 dark:text-green-400" variant="secondary">
                {tasks[0].status}
              </Badge>
            </TableCell>
            <TableCell class="text-right">
              <Badge class="bg-blue-500/10 text-blue-700 dark:text-blue-400" variant="secondary">
                {tasks[0].priority}
              </Badge>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell class="font-medium">{tasks[1].task}</TableCell>
            <TableCell>
              <Badge class="bg-amber-500/10 text-amber-700 dark:text-amber-400" variant="secondary">
                {tasks[1].status}
              </Badge>
            </TableCell>
            <TableCell class="text-right">
              <Badge class="bg-gray-500/10 text-gray-700 dark:text-gray-400" variant="secondary">
                {tasks[1].priority}
              </Badge>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell class="font-medium">{tasks[2].task}</TableCell>
            <TableCell>
              <Badge class="bg-gray-500/10 text-gray-700 dark:text-gray-400" variant="secondary">
                {tasks[2].status}
              </Badge>
            </TableCell>
            <TableCell class="text-right">
              <Badge class="bg-gray-500/10 text-gray-700 dark:text-gray-400" variant="secondary">
                {tasks[2].priority}
              </Badge>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Example>
  )
}

function TableWithActions() {
  return (
    <Example title="With Actions">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Product</TableHead>
            <TableHead>Price</TableHead>
            <TableHead class="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <For each={products}>
            {(product) => (
              <TableRow>
                <TableCell class="font-medium">{product.name}</TableCell>
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
    </Example>
  )
}
