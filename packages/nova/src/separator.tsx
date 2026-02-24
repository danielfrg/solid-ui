import type { Component, ComponentProps } from "solid-js"
import { splitProps } from "solid-js"
import { Separator as SeparatorPrimitive } from "@danielfrg/solid-ui/separator"
import { cn } from "./utils"

type SeparatorProps = ComponentProps<"hr"> & {
  class?: string
  orientation?: "horizontal" | "vertical"
  decorative?: boolean
}

const Separator: Component<SeparatorProps> = (props) => {
  const [local, others] = splitProps(props, ["class", "orientation", "decorative"])

  return (
    <SeparatorPrimitive
      data-slot="separator"
      orientation={local.orientation ?? "horizontal"}
      class={cn(
        "bg-border shrink-0",
        (local.orientation ?? "horizontal") === "horizontal" ? "h-px w-full" : "h-full w-px",
        local.class,
      )}
      {...others}
    />
  )
}

export { Separator }
export type { SeparatorProps }
