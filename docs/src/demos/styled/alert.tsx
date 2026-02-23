import { Alert, AlertAction, AlertTitle, AlertDescription } from "@danielfrg/ui/alert"
import { Button } from "@danielfrg/ui/button"
import { AlertCircle, Info, Terminal } from "lucide-solid"

export function AlertBasic() {
  return (
    <Alert>
      <Terminal />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>You can add components to your app using the cli.</AlertDescription>
    </Alert>
  )
}

export function AlertDestructive() {
  return (
    <Alert variant="destructive">
      <AlertCircle />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>Your session has expired. Please log in again.</AlertDescription>
    </Alert>
  )
}

export function AlertActionDemo() {
  return (
    <Alert>
      <Info />
      <AlertTitle>Update available</AlertTitle>
      <AlertDescription>We just shipped a new version with improved performance.</AlertDescription>
      <AlertAction>
        <Button size="sm" variant="secondary">
          Dismiss
        </Button>
      </AlertAction>
    </Alert>
  )
}

export function AlertCustomColors() {
  return (
    <Alert class="border-emerald-200/70 bg-emerald-50 text-emerald-900 dark:border-emerald-900/40 dark:bg-emerald-950 dark:text-emerald-100">
      <Info />
      <AlertTitle>Custom color</AlertTitle>
      <AlertDescription>Use utility classes to match your product tone.</AlertDescription>
    </Alert>
  )
}
