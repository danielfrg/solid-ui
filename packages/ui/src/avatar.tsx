import type { Component, JSX } from "solid-js"
import { splitProps } from "solid-js"
import { Avatar as AvatarPrimitive } from "@danielfrg/solid-ui-core/avatar"
import type {
  AvatarRootProps as CoreAvatarRootProps,
  AvatarImageProps as CoreAvatarImageProps,
  AvatarFallbackProps as CoreAvatarFallbackProps,
} from "@danielfrg/solid-ui-core/avatar"
import { cn } from "./utils"

type AvatarProps = CoreAvatarRootProps & {
  class?: string
  children?: JSX.Element
  size?: "sm" | "default" | "lg"
}

const Avatar: Component<AvatarProps> = (props) => {
  const [local, others] = splitProps(props, ["class", "size"])

  return (
    <AvatarPrimitive
      data-slot="avatar"
      data-size={local.size ?? "default"}
      class={cn(
        "group/avatar relative flex shrink-0 select-none rounded-full",
        local.size === "sm" ? "size-7" : local.size === "lg" ? "size-14" : "size-10",
        local.class,
      )}
      {...others}
    />
  )
}

type AvatarImageProps = CoreAvatarImageProps & {
  class?: string
}

const AvatarImage: Component<AvatarImageProps> = (props) => {
  const [local, others] = splitProps(props, ["class"])

  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      class={cn("aspect-square size-full rounded-full object-cover", local.class)}
      {...others}
    />
  )
}

type AvatarFallbackProps = CoreAvatarFallbackProps & {
  class?: string
  children?: JSX.Element
}

const AvatarFallback: Component<AvatarFallbackProps> = (props) => {
  const [local, others] = splitProps(props, ["class"])

  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      class={cn(
        "flex size-full items-center justify-center rounded-full bg-muted text-sm group-data-[size=sm]/avatar:text-xs font-medium",
        local.class,
      )}
      {...others}
    />
  )
}

type AvatarBadgeProps = {
  class?: string
  children?: JSX.Element
}

const AvatarBadge: Component<AvatarBadgeProps> = (props) => {
  const [local, others] = splitProps(props, ["class"])

  return (
    <span
      data-slot="avatar-badge"
      class={cn(
        "absolute right-0 bottom-0 z-10 inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground ring-2 ring-background select-none",
        "group-data-[size=sm]/avatar:size-2 group-data-[size=sm]/avatar:[&>svg]:hidden",
        "group-data-[size=default]/avatar:size-2.5 group-data-[size=default]/avatar:[&>svg]:size-2",
        "group-data-[size=lg]/avatar:size-3 group-data-[size=lg]/avatar:[&>svg]:size-2",
        local.class,
      )}
      {...others}
    />
  )
}

type AvatarGroupProps = {
  class?: string
  children?: JSX.Element
}

const AvatarGroup: Component<AvatarGroupProps> = (props) => {
  const [local, others] = splitProps(props, ["class"])

  return (
    <div
      data-slot="avatar-group"
      class={cn(
        "group/avatar-group flex -space-x-2 *:data-[slot=avatar]:ring-background *:data-[slot=avatar]:ring-2",
        local.class,
      )}
      {...others}
    />
  )
}

type AvatarGroupCountProps = {
  class?: string
  children?: JSX.Element
}

const AvatarGroupCount: Component<AvatarGroupCountProps> = (props) => {
  const [local, others] = splitProps(props, ["class"])

  return (
    <div
      data-slot="avatar-group-count"
      class={cn(
        "relative flex shrink-0 items-center justify-center rounded-full bg-muted text-sm font-medium ring-2 ring-background select-none",
        // default size matches Avatar default (size-10)
        "size-10",
        // shrink to sm when the group contains sm avatars
        "group-has-data-[size=sm]/avatar-group:size-7 group-has-data-[size=sm]/avatar-group:text-xs",
        // grow to lg when the group contains lg avatars
        "group-has-data-[size=lg]/avatar-group:size-14",
        // icon sizing
        "[&>svg]:size-4 group-has-data-[size=sm]/avatar-group:[&>svg]:size-3 group-has-data-[size=lg]/avatar-group:[&>svg]:size-5",
        local.class,
      )}
      {...others}
    />
  )
}

export { Avatar, AvatarImage, AvatarFallback, AvatarBadge, AvatarGroup, AvatarGroupCount }
export type {
  AvatarProps,
  AvatarImageProps,
  AvatarFallbackProps,
  AvatarBadgeProps,
  AvatarGroupProps,
  AvatarGroupCountProps,
}
