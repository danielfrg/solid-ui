import type { Component, ComponentProps, JSX } from "solid-js"
import { splitProps } from "solid-js"
import { cn } from "./utils"

type CardProps = ComponentProps<"div"> & { class?: string; children?: JSX.Element }

const Card: Component<CardProps> = (props) => {
  const [local, others] = splitProps(props, ["class"])
  return (
    <div
      data-slot="card"
      class={cn("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm", local.class)}
      {...others}
    />
  )
}

type CardHeaderProps = ComponentProps<"div"> & { class?: string; children?: JSX.Element }

const CardHeader: Component<CardHeaderProps> = (props) => {
  const [local, others] = splitProps(props, ["class"])
  return (
    <div
      data-slot="card-header"
      class={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        local.class,
      )}
      {...others}
    />
  )
}

type CardTitleProps = ComponentProps<"div"> & { class?: string; children?: JSX.Element }

const CardTitle: Component<CardTitleProps> = (props) => {
  const [local, others] = splitProps(props, ["class"])
  return <div data-slot="card-title" class={cn("leading-none font-semibold", local.class)} {...others} />
}

type CardDescriptionProps = ComponentProps<"div"> & { class?: string; children?: JSX.Element }

const CardDescription: Component<CardDescriptionProps> = (props) => {
  const [local, others] = splitProps(props, ["class"])
  return <div data-slot="card-description" class={cn("text-muted-foreground text-sm", local.class)} {...others} />
}

type CardActionProps = ComponentProps<"div"> & { class?: string; children?: JSX.Element }

const CardAction: Component<CardActionProps> = (props) => {
  const [local, others] = splitProps(props, ["class"])
  return (
    <div
      data-slot="card-action"
      class={cn("col-start-2 row-span-2 row-start-1 self-start justify-self-end", local.class)}
      {...others}
    />
  )
}

type CardContentProps = ComponentProps<"div"> & { class?: string; children?: JSX.Element }

const CardContent: Component<CardContentProps> = (props) => {
  const [local, others] = splitProps(props, ["class"])
  return <div data-slot="card-content" class={cn("px-6", local.class)} {...others} />
}

type CardFooterProps = ComponentProps<"div"> & { class?: string; children?: JSX.Element }

const CardFooter: Component<CardFooterProps> = (props) => {
  const [local, others] = splitProps(props, ["class"])
  return <div data-slot="card-footer" class={cn("flex items-center px-6 [.border-t]:pt-6", local.class)} {...others} />
}

export { Card, CardHeader, CardFooter, CardTitle, CardAction, CardDescription, CardContent }
export type {
  CardProps,
  CardHeaderProps,
  CardFooterProps,
  CardTitleProps,
  CardActionProps,
  CardDescriptionProps,
  CardContentProps,
}
