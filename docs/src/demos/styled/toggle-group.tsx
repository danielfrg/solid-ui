import { ToggleGroup, ToggleGroupItem } from "@danielfrg/solid-ui/toggle-group"
import { AlignCenter, AlignLeft, AlignRight, Bold, Italic, Underline } from "lucide-solid"

export function ToggleGroupShowcase() {
  return (
    <div class="flex flex-col gap-6">
      {/* Single selection */}
      <ToggleGroup defaultValue="center">
        <ToggleGroupItem value="left" aria-label="Align left">
          <AlignLeft />
        </ToggleGroupItem>
        <ToggleGroupItem value="center" aria-label="Align center">
          <AlignCenter />
        </ToggleGroupItem>
        <ToggleGroupItem value="right" aria-label="Align right">
          <AlignRight />
        </ToggleGroupItem>
      </ToggleGroup>

      {/* Outline variant */}
      <ToggleGroup variant="outline" defaultValue="bold">
        <ToggleGroupItem value="bold" aria-label="Toggle bold">
          <Bold />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="Toggle italic">
          <Italic />
        </ToggleGroupItem>
        <ToggleGroupItem value="underline" aria-label="Toggle underline">
          <Underline />
        </ToggleGroupItem>
      </ToggleGroup>

      {/* Sizes */}
      <ToggleGroup size="sm" variant="outline" defaultValue="center">
        <ToggleGroupItem value="left" aria-label="Align left"><AlignLeft /></ToggleGroupItem>
        <ToggleGroupItem value="center" aria-label="Align center"><AlignCenter /></ToggleGroupItem>
        <ToggleGroupItem value="right" aria-label="Align right"><AlignRight /></ToggleGroupItem>
      </ToggleGroup>
      <ToggleGroup size="lg" variant="outline" defaultValue="center">
        <ToggleGroupItem value="left" aria-label="Align left"><AlignLeft /></ToggleGroupItem>
        <ToggleGroupItem value="center" aria-label="Align center"><AlignCenter /></ToggleGroupItem>
        <ToggleGroupItem value="right" aria-label="Align right"><AlignRight /></ToggleGroupItem>
      </ToggleGroup>

      {/* Multiple selection */}
      <ToggleGroup multiple defaultValue={["bold", "italic"]}>
        <ToggleGroupItem value="bold" aria-label="Toggle bold"><Bold /></ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="Toggle italic"><Italic /></ToggleGroupItem>
        <ToggleGroupItem value="underline" aria-label="Toggle underline"><Underline /></ToggleGroupItem>
      </ToggleGroup>

      {/* Disabled */}
      <ToggleGroup disabled variant="outline">
        <ToggleGroupItem value="bold" aria-label="Toggle bold"><Bold /></ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="Toggle italic"><Italic /></ToggleGroupItem>
        <ToggleGroupItem value="underline" aria-label="Toggle underline"><Underline /></ToggleGroupItem>
      </ToggleGroup>
    </div>
  )
}
