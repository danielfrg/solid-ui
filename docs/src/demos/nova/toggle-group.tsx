import { ToggleGroup, ToggleGroupItem } from "@danielfrg/solid-ui-nova/toggle-group"
import { Bold, Italic, Underline, Star, Heart, Bookmark, ArrowDown, ArrowUp, TrendingUp } from "lucide-solid"
import { ExampleWrapper, Example } from "@/components/example"

export default function ToggleGroupExample() {
  return (
    <ExampleWrapper>
      <ToggleGroupBasic />
      <ToggleGroupOutline />
      <ToggleGroupOutlineWithIcons />
      <ToggleGroupSizes />
      <ToggleGroupWithIcons />
      <ToggleGroupFilter />
      <ToggleGroupDateRange />
      <ToggleGroupSort />
    </ExampleWrapper>
  )
}

function ToggleGroupBasic() {
  return (
    <Example title="Basic">
      <ToggleGroup multiple>
        <ToggleGroupItem value="bold" aria-label="Toggle bold">
          <Bold class="size-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="Toggle italic">
          <Italic class="size-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="underline" aria-label="Toggle underline">
          <Underline class="size-4" />
        </ToggleGroupItem>
      </ToggleGroup>
    </Example>
  )
}

function ToggleGroupOutline() {
  return (
    <Example title="Outline">
      <ToggleGroup variant="outline" defaultValue="all">
        <ToggleGroupItem value="all" aria-label="Toggle all">
          All
        </ToggleGroupItem>
        <ToggleGroupItem value="missed" aria-label="Toggle missed">
          Missed
        </ToggleGroupItem>
      </ToggleGroup>
    </Example>
  )
}

function ToggleGroupOutlineWithIcons() {
  return (
    <Example title="Outline With Icons">
      <ToggleGroup variant="outline" multiple size="sm">
        <ToggleGroupItem value="bold" aria-label="Toggle bold">
          <Bold class="size-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="Toggle italic">
          <Italic class="size-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="underline" aria-label="Toggle underline">
          <Underline class="size-4" />
        </ToggleGroupItem>
      </ToggleGroup>
    </Example>
  )
}

function ToggleGroupSizes() {
  return (
    <Example title="Sizes">
      <div class="flex flex-col gap-4">
        <ToggleGroup size="sm" defaultValue="top" variant="outline">
          <ToggleGroupItem value="top" aria-label="Toggle top">
            Top
          </ToggleGroupItem>
          <ToggleGroupItem value="bottom" aria-label="Toggle bottom">
            Bottom
          </ToggleGroupItem>
          <ToggleGroupItem value="left" aria-label="Toggle left">
            Left
          </ToggleGroupItem>
          <ToggleGroupItem value="right" aria-label="Toggle right">
            Right
          </ToggleGroupItem>
        </ToggleGroup>
        <ToggleGroup defaultValue="top" variant="outline">
          <ToggleGroupItem value="top" aria-label="Toggle top">
            Top
          </ToggleGroupItem>
          <ToggleGroupItem value="bottom" aria-label="Toggle bottom">
            Bottom
          </ToggleGroupItem>
          <ToggleGroupItem value="left" aria-label="Toggle left">
            Left
          </ToggleGroupItem>
          <ToggleGroupItem value="right" aria-label="Toggle right">
            Right
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
    </Example>
  )
}

function ToggleGroupWithIcons() {
  return (
    <Example title="With Icons">
      <ToggleGroup multiple variant="outline" size="sm">
        <ToggleGroupItem value="star" aria-label="Toggle star">
          <Star class="size-4 data-[pressed]:fill-current" />
          Star
        </ToggleGroupItem>
        <ToggleGroupItem value="heart" aria-label="Toggle heart">
          <Heart class="size-4 data-[pressed]:fill-current" />
          Heart
        </ToggleGroupItem>
        <ToggleGroupItem value="bookmark" aria-label="Toggle bookmark">
          <Bookmark class="size-4 data-[pressed]:fill-current" />
          Bookmark
        </ToggleGroupItem>
      </ToggleGroup>
    </Example>
  )
}

function ToggleGroupFilter() {
  return (
    <Example title="Filter">
      <ToggleGroup defaultValue="all" variant="outline" size="sm">
        <ToggleGroupItem value="all" aria-label="All">
          All
        </ToggleGroupItem>
        <ToggleGroupItem value="active" aria-label="Active">
          Active
        </ToggleGroupItem>
        <ToggleGroupItem value="completed" aria-label="Completed">
          Completed
        </ToggleGroupItem>
        <ToggleGroupItem value="archived" aria-label="Archived">
          Archived
        </ToggleGroupItem>
      </ToggleGroup>
    </Example>
  )
}

function ToggleGroupDateRange() {
  return (
    <Example title="Date Range">
      <ToggleGroup defaultValue="today" variant="outline" size="sm">
        <ToggleGroupItem value="today" aria-label="Today">
          Today
        </ToggleGroupItem>
        <ToggleGroupItem value="week" aria-label="This Week">
          This Week
        </ToggleGroupItem>
        <ToggleGroupItem value="month" aria-label="This Month">
          This Month
        </ToggleGroupItem>
        <ToggleGroupItem value="year" aria-label="This Year">
          This Year
        </ToggleGroupItem>
      </ToggleGroup>
    </Example>
  )
}

function ToggleGroupSort() {
  return (
    <Example title="Sort">
      <ToggleGroup defaultValue="newest" variant="outline" size="sm">
        <ToggleGroupItem value="newest" aria-label="Newest">
          <ArrowDown class="size-4" />
          Newest
        </ToggleGroupItem>
        <ToggleGroupItem value="oldest" aria-label="Oldest">
          <ArrowUp class="size-4" />
          Oldest
        </ToggleGroupItem>
        <ToggleGroupItem value="popular" aria-label="Popular">
          <TrendingUp class="size-4" />
          Popular
        </ToggleGroupItem>
      </ToggleGroup>
    </Example>
  )
}
