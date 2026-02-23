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
}

const Avatar: Component<AvatarProps> = (props) => {
  const [local, others] = splitProps(props, ["class"])

  return (
    <AvatarPrimitive
      data-slot="avatar"
      class={cn("relative flex size-10 shrink-0 overflow-hidden rounded-full", local.class)}
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
    <AvatarPrimitive.Image data-slot="avatar-image" class={cn("aspect-square size-full", local.class)} {...others} />
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
      class={cn("flex size-full items-center justify-center rounded-full bg-muted text-sm font-medium", local.class)}
      {...others}
    />
  )
}

export { Avatar, AvatarImage, AvatarFallback }
export type { AvatarProps, AvatarImageProps, AvatarFallbackProps }
