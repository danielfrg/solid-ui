import { Alert, AlertAction, AlertDescription, AlertTitle } from "@danielfrg/solid-ui/alert"
import { Button } from "@danielfrg/solid-ui/button"
import { AlertCircle, CheckCircle2, Info, Terminal } from "lucide-solid"

export function AlertBasic() {
  return (
    <div class="grid w-full max-w-md items-start gap-4">
      <Alert>
        <CheckCircle2 />
        <AlertTitle>Payment successful</AlertTitle>
        <AlertDescription>
          Your payment of $29.99 has been processed. A receipt has been sent to your email address.
        </AlertDescription>
      </Alert>
      <Alert>
        <Info />
        <AlertTitle>New feature available</AlertTitle>
        <AlertDescription>We've added dark mode support. You can enable it in your account settings.</AlertDescription>
      </Alert>
    </div>
  )
}

export function AlertDestructive() {
  return (
    <Alert variant="destructive" class="max-w-md">
      <AlertCircle />
      <AlertTitle>Payment failed</AlertTitle>
      <AlertDescription>
        Your payment could not be processed. Please check your payment method and try again.
      </AlertDescription>
    </Alert>
  )
}

export function AlertActionDemo() {
  return (
    <Alert class="max-w-md">
      <AlertTitle>Dark mode is now available</AlertTitle>
      <AlertDescription>Enable it under your profile settings to get started.</AlertDescription>
      <AlertAction>
        <Button size="xs" variant="default">
          Enable
        </Button>
      </AlertAction>
    </Alert>
  )
}

export function AlertCustomColors() {
  return (
    <div class="grid w-full max-w-md items-start gap-4">
      <Alert class="border-amber-200 bg-amber-50 text-amber-900 dark:border-amber-900 dark:bg-amber-950 dark:text-amber-50">
        <Terminal />
        <AlertTitle>Your subscription will expire in 3 days</AlertTitle>
        <AlertDescription>Renew now to avoid service interruption.</AlertDescription>
      </Alert>
      <Alert class="border-emerald-200 bg-emerald-50 text-emerald-900 dark:border-emerald-900 dark:bg-emerald-950 dark:text-emerald-50">
        <CheckCircle2 />
        <AlertTitle>Account verified</AlertTitle>
        <AlertDescription>Your email address has been verified successfully.</AlertDescription>
      </Alert>
    </div>
  )
}
