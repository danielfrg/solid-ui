import type { Component, JSX } from "solid-js"
import { splitProps } from "solid-js"
import { Collapsible as CollapsiblePrimitive } from "@danielfrg/solid-ui-core/collapsible"
import type {
  CollapsibleRootProps as CoreCollapsibleRootProps,
  CollapsibleTriggerProps as CoreCollapsibleTriggerProps,
  CollapsibleContentProps as CoreCollapsibleContentProps,
} from "@danielfrg/solid-ui-core/collapsible"
import { cn } from "./utils"

type CollapsibleProps = CoreCollapsibleRootProps & {
  class?: string
  children?: JSX.Element
}

const Collapsible: Component<CollapsibleProps> = (props) => {
  const [local, others] = splitProps(props, ["class"])

  return <CollapsiblePrimitive data-slot="collapsible" class={cn(local.class)} {...others} />
}

type CollapsibleTriggerProps = CoreCollapsibleTriggerProps & {
  class?: string
  children?: JSX.Element
}

const CollapsibleTrigger: Component<CollapsibleTriggerProps> = (props) => {
  const [local, others] = splitProps(props, ["class"])

  return <CollapsiblePrimitive.Trigger data-slot="collapsible-trigger" class={cn(local.class)} {...others} />
}

type CollapsibleContentProps = CoreCollapsibleContentProps & {
  class?: string
  children?: JSX.Element
}

const CollapsibleContent: Component<CollapsibleContentProps> = (props) => {
  const [local, others] = splitProps(props, ["class"])

  return <CollapsiblePrimitive.Content data-slot="collapsible-content" class={cn(local.class)} {...others} />
}

export { Collapsible, CollapsibleTrigger, CollapsibleContent }
export type { CollapsibleProps, CollapsibleTriggerProps, CollapsibleContentProps }
