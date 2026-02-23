import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
} from "@danielfrg/ui/alert-dialog"
import { Button } from "@danielfrg/ui/button"

export function AlertDialogBasic() {
  return (
    <AlertDialog>
      <AlertDialogTrigger as={Button} variant="outline">
        Delete Account
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your account and remove your data from our
            servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export function AlertDialogSmall() {
  return (
    <AlertDialog>
      <AlertDialogTrigger as={Button} variant="outline">
        Delete Project
      </AlertDialogTrigger>
      <AlertDialogContent class="max-w-sm">
        <AlertDialogHeader>
          <AlertDialogTitle>Delete this project?</AlertDialogTitle>
          <AlertDialogDescription>
            All project data will be removed. This action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Delete</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export function AlertDialogMedia() {
  return (
    <AlertDialog>
      <AlertDialogTrigger as={Button} variant="outline">
        View details
      </AlertDialogTrigger>
      <AlertDialogContent class="gap-6">
        <div class="overflow-hidden rounded-lg border">
          <img
            src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800&auto=format&fit=crop"
            alt="Product preview"
            class="aspect-[4/3] w-full object-cover"
          />
        </div>
        <AlertDialogHeader>
          <AlertDialogTitle>Continue with purchase?</AlertDialogTitle>
          <AlertDialogDescription>
            You will be charged immediately and receive instant access to your download.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Confirm</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export function AlertDialogSmallMedia() {
  return (
    <AlertDialog>
      <AlertDialogTrigger as={Button} variant="outline">
        View plan
      </AlertDialogTrigger>
      <AlertDialogContent class="max-w-sm gap-6">
        <div class="overflow-hidden rounded-lg border">
          <img
            src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=800&auto=format&fit=crop"
            alt="Plan preview"
            class="aspect-[4/3] w-full object-cover"
          />
        </div>
        <AlertDialogHeader>
          <AlertDialogTitle>Upgrade to Pro?</AlertDialogTitle>
          <AlertDialogDescription>Get unlimited projects and priority support for your team.</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Not now</AlertDialogCancel>
          <AlertDialogAction>Upgrade</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export function AlertDialogDestructive() {
  return (
    <AlertDialog>
      <AlertDialogTrigger as={Button} variant="destructive">
        Delete Everything
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete all data?</AlertDialogTitle>
          <AlertDialogDescription>
            This will permanently delete all projects, users, and audit logs from your account.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction class="bg-destructive text-destructive-foreground hover:bg-destructive/90">
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
