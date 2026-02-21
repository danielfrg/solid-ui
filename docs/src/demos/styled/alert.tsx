import { Alert, AlertTitle, AlertDescription } from "@danielfrg/ui/alert"
import { AlertCircle, Info, Terminal } from "lucide-solid"

export function AlertShowcase() {
  return (
    <div class="flex flex-col gap-8">
      <section class="flex flex-col gap-4">
        <div>
          <h2 class="text-xl font-semibold tracking-tight text-foreground">Variants</h2>
          <p class="text-sm text-muted-foreground mt-1">Alerts communicate important messages to the user.</p>
        </div>
        <div class="flex flex-col gap-4">
          <Alert>
            <Terminal />
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>You can add components to your app using the cli.</AlertDescription>
          </Alert>

          <Alert variant="destructive">
            <AlertCircle />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>Your session has expired. Please log in again.</AlertDescription>
          </Alert>
        </div>
      </section>
    </div>
  )
}
