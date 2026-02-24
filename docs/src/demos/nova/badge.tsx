import { Badge } from "@danielfrg/solid-ui-nova/badge"
import { ArrowRight, ArrowUpRight, BadgeCheck, Loader2 } from "lucide-solid"
import { ExampleWrapper, Example } from "@/components/example"

export default function BadgeExample() {
  return (
    <ExampleWrapper class="lg:grid-cols-1">
      <BadgeVariants />
      <BadgeWithIconLeft />
      <BadgeWithIconRight />
      <BadgeWithSpinner />
      <BadgeAsLink />
      <BadgeLongText />
      <BadgeCustomColors />
    </ExampleWrapper>
  )
}

function BadgeVariants() {
  return (
    <Example title="Variants">
      <div class="flex flex-wrap gap-2">
        <Badge>Default</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="destructive">Destructive</Badge>
        <Badge variant="outline">Outline</Badge>
        <Badge variant="ghost">Ghost</Badge>
        <Badge variant="link">Link</Badge>
      </div>
    </Example>
  )
}

function BadgeWithIconLeft() {
  return (
    <Example title="Icon Left">
      <div class="flex flex-wrap gap-2">
        <Badge>
          <BadgeCheck />
          Default
        </Badge>
        <Badge variant="secondary">
          <BadgeCheck />
          Secondary
        </Badge>
        <Badge variant="destructive">
          <BadgeCheck />
          Destructive
        </Badge>
        <Badge variant="outline">
          <BadgeCheck />
          Outline
        </Badge>
        <Badge variant="ghost">
          <BadgeCheck />
          Ghost
        </Badge>
        <Badge variant="link">
          <BadgeCheck />
          Link
        </Badge>
      </div>
    </Example>
  )
}

function BadgeWithIconRight() {
  return (
    <Example title="Icon Right">
      <div class="flex flex-wrap gap-2">
        <Badge>
          Default
          <ArrowRight />
        </Badge>
        <Badge variant="secondary">
          Secondary
          <ArrowRight />
        </Badge>
        <Badge variant="destructive">
          Destructive
          <ArrowRight />
        </Badge>
        <Badge variant="outline">
          Outline
          <ArrowRight />
        </Badge>
        <Badge variant="ghost">
          Ghost
          <ArrowRight />
        </Badge>
        <Badge variant="link">
          Link
          <ArrowRight />
        </Badge>
      </div>
    </Example>
  )
}

function BadgeWithSpinner() {
  return (
    <Example title="With Spinner">
      <div class="flex flex-wrap gap-2">
        <Badge>
          <Loader2 class="animate-spin" />
          Default
        </Badge>
        <Badge variant="secondary">
          <Loader2 class="animate-spin" />
          Secondary
        </Badge>
        <Badge variant="destructive">
          <Loader2 class="animate-spin" />
          Destructive
        </Badge>
        <Badge variant="outline">
          <Loader2 class="animate-spin" />
          Outline
        </Badge>
        <Badge variant="ghost">
          <Loader2 class="animate-spin" />
          Ghost
        </Badge>
        <Badge variant="link">
          <Loader2 class="animate-spin" />
          Link
        </Badge>
      </div>
    </Example>
  )
}

function BadgeAsLink() {
  return (
    <Example title="asChild">
      <div class="flex flex-wrap gap-2">
        <Badge>
          <a href="#" class="inline-flex items-center gap-1">
            Link <ArrowUpRight class="size-3" />
          </a>
        </Badge>
        <Badge variant="secondary">
          <a href="#" class="inline-flex items-center gap-1">
            Link <ArrowUpRight class="size-3" />
          </a>
        </Badge>
        <Badge variant="destructive">
          <a href="#" class="inline-flex items-center gap-1">
            Link <ArrowUpRight class="size-3" />
          </a>
        </Badge>
        <Badge variant="ghost">
          <a href="#" class="inline-flex items-center gap-1">
            Link <ArrowUpRight class="size-3" />
          </a>
        </Badge>
      </div>
    </Example>
  )
}

function BadgeLongText() {
  return (
    <Example title="Long Text">
      <div class="flex flex-wrap gap-2">
        <Badge variant="secondary">A badge with a lot of text to see how it wraps</Badge>
      </div>
    </Example>
  )
}

function BadgeCustomColors() {
  return (
    <Example title="Custom Colors">
      <div class="flex flex-wrap gap-2">
        <Badge class="bg-blue-600 text-blue-50 dark:bg-blue-600 dark:text-blue-50">Blue</Badge>
        <Badge class="bg-green-600 text-green-50 dark:bg-green-600 dark:text-green-50">Green</Badge>
        <Badge class="bg-sky-600 text-sky-50 dark:bg-sky-600 dark:text-sky-50">Sky</Badge>
        <Badge class="bg-purple-600 text-purple-50 dark:bg-purple-600 dark:text-purple-50">Purple</Badge>
        <Badge class="bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300">Blue</Badge>
        <Badge class="bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300">Green</Badge>
        <Badge class="bg-sky-50 text-sky-700 dark:bg-sky-950 dark:text-sky-300">Sky</Badge>
        <Badge class="bg-purple-50 text-purple-700 dark:bg-purple-950 dark:text-purple-300">Purple</Badge>
        <Badge class="bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300">Red</Badge>
      </div>
    </Example>
  )
}
