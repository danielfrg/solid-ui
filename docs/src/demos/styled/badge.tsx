import { Badge } from "@danielfrg/solid-ui/badge"
import { BadgeCheck, BookmarkIcon, Loader2 } from "lucide-solid"

export function BadgeVariants() {
  return (
    <div class="flex flex-wrap gap-2">
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="ghost">Ghost</Badge>
    </div>
  )
}

export function BadgeWithIcon() {
  return (
    <div class="flex flex-wrap gap-2">
      <Badge variant="secondary">
        <BadgeCheck class="mr-1 size-3" />
        Verified
      </Badge>
      <Badge variant="outline">
        Bookmark
        <BookmarkIcon class="ml-1 size-3" />
      </Badge>
    </div>
  )
}

export function BadgeWithSpinner() {
  return (
    <div class="flex flex-wrap gap-2">
      <Badge variant="destructive">
        <Loader2 class="mr-1 size-3 animate-spin" />
        Deleting
      </Badge>
      <Badge variant="secondary">
        Generating
        <Loader2 class="ml-1 size-3 animate-spin" />
      </Badge>
    </div>
  )
}

export function BadgeLink() {
  return (
    <div class="flex flex-wrap gap-2">
      <Badge variant="link">
        <a href="#badge-link">View changelog</a>
      </Badge>
    </div>
  )
}

export function BadgeCustomColors() {
  return (
    <div class="flex flex-wrap gap-2">
      <Badge class="bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300">Blue</Badge>
      <Badge class="bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300">Green</Badge>
      <Badge class="bg-sky-50 text-sky-700 dark:bg-sky-950 dark:text-sky-300">Sky</Badge>
      <Badge class="bg-purple-50 text-purple-700 dark:bg-purple-950 dark:text-purple-300">Purple</Badge>
      <Badge class="bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300">Red</Badge>
    </div>
  )
}
