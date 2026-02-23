import { Badge } from "@danielfrg/ui/badge"
import { Check, Loader2, Mail } from "lucide-solid"

export function BadgeVariants() {
  return (
    <div class="flex flex-wrap items-center gap-3">
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="ghost">Ghost</Badge>
      <Badge variant="link">Link</Badge>
    </div>
  )
}

export function BadgeWithIcon() {
  return (
    <div class="flex flex-wrap items-center gap-3">
      <Badge>
        <Check class="size-3" />
        Verified
      </Badge>
      <Badge variant="secondary">
        <Mail class="size-3" />
        Inbox
      </Badge>
      <Badge variant="outline">
        <Check class="size-3" />
        Approved
      </Badge>
    </div>
  )
}

export function BadgeWithSpinner() {
  return (
    <div class="flex flex-wrap items-center gap-3">
      <Badge>
        <Loader2 class="size-3 animate-spin" />
        Syncing
      </Badge>
      <Badge variant="secondary">
        <Loader2 class="size-3 animate-spin" />
        Processing
      </Badge>
    </div>
  )
}

export function BadgeLink() {
  return (
    <Badge variant="link" class="cursor-pointer">
      View release notes
    </Badge>
  )
}

export function BadgeCustomColors() {
  return (
    <div class="flex flex-wrap items-center gap-3">
      <Badge class="bg-emerald-500 text-white">Paid</Badge>
      <Badge class="bg-sky-500 text-white">Beta</Badge>
      <Badge class="bg-amber-500 text-white">Pending</Badge>
    </div>
  )
}
