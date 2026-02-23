import { Alert, AlertAction, AlertDescription, AlertTitle } from "@danielfrg/solid-ui/alert"
import { Badge } from "@danielfrg/solid-ui/badge"
import { Button } from "@danielfrg/solid-ui/button"
import { CircleAlert } from "lucide-solid"

export function AlertBasic() {
  return (
    <div class="mx-auto flex w-full max-w-lg flex-col gap-4">
      <Alert>
        <AlertTitle>Success! Your changes have been saved.</AlertTitle>
      </Alert>
      <Alert>
        <AlertTitle>Success! Your changes have been saved.</AlertTitle>
        <AlertDescription>This is an alert with title and description.</AlertDescription>
      </Alert>
      <Alert>
        <AlertDescription>This one has a description only. No title. No icon.</AlertDescription>
      </Alert>
    </div>
  )
}

export function AlertWithIcons() {
  return (
    <div class="mx-auto flex w-full max-w-lg flex-col gap-4">
      <Alert>
        <CircleAlert class="h-4 w-4" />
        <AlertTitle>
          Let's try one with icon, title and a <a href="#">link</a>.
        </AlertTitle>
      </Alert>
      <Alert>
        <CircleAlert class="h-4 w-4" />
        <AlertDescription>
          This one has an icon and a description only. No title.{" "}
          <a href="#">But it has a link</a> and a <a href="#">second link</a>.
        </AlertDescription>
      </Alert>

      <Alert>
        <CircleAlert class="h-4 w-4" />
        <AlertTitle>Success! Your changes have been saved</AlertTitle>
        <AlertDescription>This is an alert with icon, title and description.</AlertDescription>
      </Alert>
      <Alert>
        <CircleAlert class="h-4 w-4" />
        <AlertTitle>
          This is a very long alert title that demonstrates how the component handles extended text content and
          potentially wraps across multiple lines
        </AlertTitle>
      </Alert>
      <Alert>
        <CircleAlert class="h-4 w-4" />
        <AlertDescription>
          This is a very long alert description that demonstrates how the component handles extended text content and
          potentially wraps across multiple lines
        </AlertDescription>
      </Alert>
      <Alert>
        <CircleAlert class="h-4 w-4" />
        <AlertTitle>
          This is an extremely long alert title that spans multiple lines to demonstrate how the component handles very
          lengthy headings while maintaining readability and proper text wrapping behavior
        </AlertTitle>
        <AlertDescription>
          This is an equally long description that contains detailed information about the alert. It shows how the
          component can accommodate extensive content while preserving proper spacing, alignment, and readability across
          different screen sizes and viewport widths. This helps ensure the user experience remains consistent regardless
          of the content length.
        </AlertDescription>
      </Alert>
    </div>
  )
}

export function AlertDestructive() {
  return (
    <div class="mx-auto flex w-full max-w-lg flex-col gap-4">
      <Alert variant="destructive">
        <CircleAlert class="h-4 w-4" />
        <AlertTitle>Something went wrong!</AlertTitle>
        <AlertDescription>Your session has expired. Please log in again.</AlertDescription>
      </Alert>
      <Alert variant="destructive">
        <CircleAlert class="h-4 w-4" />
        <AlertTitle>Unable to process your payment.</AlertTitle>
        <AlertDescription>
          <p>
            Please verify your <a href="#">billing information</a> and try again.
          </p>
          <ul class="list-inside list-disc">
            <li>Check your card details</li>
            <li>Ensure sufficient funds</li>
            <li>Verify billing address</li>
          </ul>
        </AlertDescription>
      </Alert>
    </div>
  )
}

export function AlertWithActions() {
  return (
    <div class="mx-auto flex w-full max-w-lg flex-col gap-4">
      <Alert>
        <CircleAlert class="h-4 w-4" />
        <AlertTitle>The selected emails have been marked as spam.</AlertTitle>
        <AlertAction>
          <Button size="xs">Undo</Button>
        </AlertAction>
      </Alert>
      <Alert>
        <CircleAlert class="h-4 w-4" />
        <AlertTitle>The selected emails have been marked as spam.</AlertTitle>
        <AlertDescription>
          This is a very long alert title that demonstrates how the component handles extended text content.
        </AlertDescription>
        <AlertAction>
          <Badge variant="secondary">Badge</Badge>
        </AlertAction>
      </Alert>
    </div>
  )
}
