import type { Component, JSX } from "solid-js"
import { splitProps } from "solid-js"
import { Tabs as TabsPrimitive } from "@danielfrg/solid-ui/tabs"
import type {
  TabsRootProps as CoreTabsRootProps,
  TabsListProps as CoreTabsListProps,
  TabsTriggerProps as CoreTabsTriggerProps,
  TabsContentProps as CoreTabsContentProps,
} from "@danielfrg/solid-ui/tabs"
import { cn } from "./utils"

type TabsProps = CoreTabsRootProps & {
  class?: string
  children?: JSX.Element
}

const Tabs: Component<TabsProps> = (props) => {
  const [local, others] = splitProps(props, ["class"])

  return <TabsPrimitive data-slot="tabs" class={cn("flex flex-col gap-2", local.class)} {...others} />
}

type TabsListProps = CoreTabsListProps & {
  class?: string
  children?: JSX.Element
  "data-variant"?: "default" | "line"
}

const TabsList: Component<TabsListProps> = (props) => {
  const [local, others] = splitProps(props, ["class", "data-variant"])
  const variant = () => local["data-variant"] ?? "default"

  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      data-variant={variant()}
      class={cn(
        "group/tabs-list inline-flex h-10 items-center justify-center rounded-lg bg-muted p-[3px] text-muted-foreground",
        "data-[variant=line]:rounded-none data-[variant=line]:bg-transparent data-[variant=line]:p-0",
        local.class,
      )}
      {...others}
    />
  )
}

type TabsTriggerProps = CoreTabsTriggerProps & {
  class?: string
  children?: JSX.Element
}

const TabsTrigger: Component<TabsTriggerProps> = (props) => {
  const [local, others] = splitProps(props, ["class"])

  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      class={cn(
        "inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-md px-1.5 py-0.5 text-sm font-medium ring-offset-background transition-all",
        "outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50",
        "disabled:pointer-events-none disabled:opacity-50",
        "data-[selected]:bg-background data-[selected]:text-foreground data-[selected]:shadow-sm data-[selected]:border-transparent",
        "group-data-[variant=line]/tabs-list:rounded-none group-data-[variant=line]/tabs-list:border-0 group-data-[variant=line]/tabs-list:border-b-2 group-data-[variant=line]/tabs-list:border-b-transparent group-data-[variant=line]/tabs-list:data-[selected]:bg-transparent group-data-[variant=line]/tabs-list:data-[selected]:shadow-none group-data-[variant=line]/tabs-list:data-[selected]:border-b-primary",
        local.class,
      )}
      {...others}
    />
  )
}

type TabsContentProps = CoreTabsContentProps & {
  class?: string
  children?: JSX.Element
}

const TabsContent: Component<TabsContentProps> = (props) => {
  const [local, others] = splitProps(props, ["class"])

  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      class={cn(
        "mt-2 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50",
        local.class,
      )}
      {...others}
    />
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent }
export type { TabsProps, TabsListProps, TabsTriggerProps, TabsContentProps }
