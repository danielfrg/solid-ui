import type { Component, ComponentProps } from "solid-js"
import { splitProps } from "solid-js"
import { cn } from "./utils"

type SkeletonProps = ComponentProps<"div"> & { class?: string }

const Skeleton: Component<SkeletonProps> = (props) => {
  const [local, others] = splitProps(props, ["class"])
  return <div data-slot="skeleton" class={cn("bg-muted animate-pulse rounded-md", local.class)} {...others} />
}

export { Skeleton }
export type { SkeletonProps }
