import type { Component, JSX } from "solid-js"
import { splitProps } from "solid-js"
import { Tabs as TabsPrimitive } from "@danielfrg/solid-ui-core/tabs"
import type {
  TabsRootProps as CoreTabsRootProps,
  TabsListProps as CoreTabsListProps,
  TabsTriggerProps as CoreTabsTriggerProps,
  TabsContentProps as CoreTabsContentProps,
} from "@danielfrg/solid-ui-core/tabs"
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
}

const TabsList: Component<TabsListProps> = (props) => {
  const [local, others] = splitProps(props, ["class"])

  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      class={cn(
        "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
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
        "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all",
        "outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "disabled:pointer-events-none disabled:opacity-50",
        "data-[selected]:bg-background data-[selected]:text-foreground data-[selected]:shadow-sm",
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
        "mt-2 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        local.class,
      )}
      {...others}
    />
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent }
export type { TabsProps, TabsListProps, TabsTriggerProps, TabsContentProps }
