import type { Component, JSX } from "solid-js"
import { splitProps } from "solid-js"
import { ContextMenu as ContextMenuPrimitive } from "@danielfrg/solid-ui/context-menu"
import type {
  ContextMenuRootProps as CoreContextMenuRootProps,
  ContextMenuTriggerProps as CoreContextMenuTriggerProps,
  ContextMenuPopupProps as CoreContextMenuPopupProps,
  ContextMenuItemProps as CoreContextMenuItemProps,
  ContextMenuCheckboxItemProps as CoreContextMenuCheckboxItemProps,
  ContextMenuRadioGroupProps as CoreContextMenuRadioGroupProps,
  ContextMenuRadioItemProps as CoreContextMenuRadioItemProps,
  ContextMenuGroupProps as CoreContextMenuGroupProps,
  ContextMenuGroupLabelProps as CoreContextMenuGroupLabelProps,
  ContextMenuSeparatorProps as CoreContextMenuSeparatorProps,
  ContextMenuSubmenuRootProps as CoreContextMenuSubmenuRootProps,
  ContextMenuSubmenuTriggerProps as CoreContextMenuSubmenuTriggerProps,
  ContextMenuSubmenuPopupProps as CoreContextMenuSubmenuPopupProps,
} from "@danielfrg/solid-ui/context-menu"
import { cn } from "@danielfrg/solid-ui/utils"

const ContextMenu = ContextMenuPrimitive.Root
const ContextMenuTrigger = ContextMenuPrimitive.Trigger

type ContextMenuContentProps = CoreContextMenuPopupProps & {
  class?: string
  children?: JSX.Element
}

const ContextMenuContent: Component<ContextMenuContentProps> = (props) => {
  const [local, others] = splitProps(props, ["class", "children"])

  return (
    <ContextMenuPrimitive.Portal>
      <ContextMenuPrimitive.Popup
        data-slot="context-menu-content"
        class={cn(
          "z-50 min-w-36 origin-[var(--kb-menu-content-transform-origin)] overflow-hidden rounded-lg border-0 ring-1 ring-foreground/10 bg-popover p-1 text-popover-foreground shadow-md outline-none",
          "data-[expanded]:animate-in data-[closed]:animate-out data-[closed]:fade-out-0 data-[expanded]:fade-in-0 data-[closed]:zoom-out-95 data-[expanded]:zoom-in-95",
          local.class,
        )}
        {...others}
      >
        {local.children}
      </ContextMenuPrimitive.Popup>
    </ContextMenuPrimitive.Portal>
  )
}

type ContextMenuItemProps = CoreContextMenuItemProps & {
  class?: string
  children?: JSX.Element
  inset?: boolean
  variant?: "default" | "destructive"
}

const ContextMenuItem: Component<ContextMenuItemProps> = (props) => {
  const [local, others] = splitProps(props, ["class", "inset", "variant"])

  return (
    <ContextMenuPrimitive.Item
      data-slot="context-menu-item"
      data-inset={local.inset || undefined}
      data-variant={local.variant ?? "default"}
      class={cn(
        "relative flex cursor-default select-none items-center gap-1.5 rounded-md px-1.5 py-1 text-sm outline-none transition-colors",
        "focus:bg-accent focus:text-accent-foreground",
        "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        "data-[inset]:pl-7",
        "data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive",
        "[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        local.class,
      )}
      {...others}
    />
  )
}

type ContextMenuCheckboxItemProps = CoreContextMenuCheckboxItemProps & {
  class?: string
  children?: JSX.Element
  inset?: boolean
}

const ContextMenuCheckboxItem: Component<ContextMenuCheckboxItemProps> = (props) => {
  const [local, others] = splitProps(props, ["class", "children", "inset"])

  return (
    <ContextMenuPrimitive.CheckboxItem
      data-slot="context-menu-checkbox-item"
      data-inset={local.inset || undefined}
      class={cn(
        "relative flex cursor-default select-none items-center gap-1.5 rounded-md py-1 pr-8 pl-1.5 text-sm outline-none transition-colors",
        "focus:bg-accent focus:text-accent-foreground",
        "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        "data-[inset]:pl-7",
        "[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        local.class,
      )}
      {...others}
    >
      <span class="pointer-events-none absolute right-2 flex size-3.5 items-center justify-center">
        <ContextMenuPrimitive.ItemIndicator>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="size-3.5"
          >
            <path d="M5 12l5 5l10 -10" />
          </svg>
        </ContextMenuPrimitive.ItemIndicator>
      </span>
      {local.children}
    </ContextMenuPrimitive.CheckboxItem>
  )
}

type ContextMenuRadioGroupProps = CoreContextMenuRadioGroupProps & {
  class?: string
  children?: JSX.Element
}

const ContextMenuRadioGroup: Component<ContextMenuRadioGroupProps> = (props) => {
  return <ContextMenuPrimitive.RadioGroup data-slot="context-menu-radio-group" {...props} />
}

type ContextMenuRadioItemProps = CoreContextMenuRadioItemProps & {
  class?: string
  children?: JSX.Element
  inset?: boolean
}

const ContextMenuRadioItem: Component<ContextMenuRadioItemProps> = (props) => {
  const [local, others] = splitProps(props, ["class", "children", "inset"])

  return (
    <ContextMenuPrimitive.RadioItem
      data-slot="context-menu-radio-item"
      data-inset={local.inset || undefined}
      class={cn(
        "relative flex cursor-default select-none items-center gap-1.5 rounded-md py-1 pr-8 pl-1.5 text-sm outline-none transition-colors",
        "focus:bg-accent focus:text-accent-foreground",
        "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        "data-[inset]:pl-7",
        "[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        local.class,
      )}
      {...others}
    >
      <span class="pointer-events-none absolute right-2 flex size-3.5 items-center justify-center">
        <ContextMenuPrimitive.ItemIndicator>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-2">
            <circle cx="12" cy="12" r="10" />
          </svg>
        </ContextMenuPrimitive.ItemIndicator>
      </span>
      {local.children}
    </ContextMenuPrimitive.RadioItem>
  )
}

type ContextMenuGroupProps = CoreContextMenuGroupProps & {
  class?: string
  children?: JSX.Element
}

const ContextMenuGroup: Component<ContextMenuGroupProps> = (props) => {
  return <ContextMenuPrimitive.Group data-slot="context-menu-group" {...props} />
}

type ContextMenuLabelProps = CoreContextMenuGroupLabelProps & {
  class?: string
  children?: JSX.Element
  inset?: boolean
}

const ContextMenuLabel: Component<ContextMenuLabelProps> = (props) => {
  const [local, others] = splitProps(props, ["class", "inset"])

  return (
    <ContextMenuPrimitive.GroupLabel
      data-slot="context-menu-label"
      data-inset={local.inset || undefined}
      class={cn("px-1.5 py-1 text-xs font-medium text-muted-foreground data-[inset]:pl-7", local.class)}
      {...others}
    />
  )
}

type ContextMenuSeparatorProps = CoreContextMenuSeparatorProps & {
  class?: string
}

const ContextMenuSeparator: Component<ContextMenuSeparatorProps> = (props) => {
  const [local, others] = splitProps(props, ["class"])

  return (
    <ContextMenuPrimitive.Separator
      data-slot="context-menu-separator"
      class={cn("-mx-1 my-1 h-px bg-border", local.class)}
      {...others}
    />
  )
}

type ContextMenuShortcutProps = {
  class?: string
  children?: JSX.Element
}

const ContextMenuShortcut: Component<ContextMenuShortcutProps> = (props) => {
  const [local, others] = splitProps(props, ["class"])

  return (
    <span
      data-slot="context-menu-shortcut"
      class={cn("ml-auto text-xs tracking-widest text-muted-foreground", local.class)}
      {...others}
    />
  )
}

const ContextMenuSub = ContextMenuPrimitive.SubmenuRoot

type ContextMenuSubTriggerProps = CoreContextMenuSubmenuTriggerProps & {
  class?: string
  children?: JSX.Element
  inset?: boolean
}

const ContextMenuSubTrigger: Component<ContextMenuSubTriggerProps> = (props) => {
  const [local, others] = splitProps(props, ["class", "children", "inset"])

  return (
    <ContextMenuPrimitive.SubmenuTrigger
      data-slot="context-menu-sub-trigger"
      data-inset={local.inset || undefined}
      class={cn(
        "flex cursor-default select-none items-center gap-1.5 rounded-md px-1.5 py-1 text-sm outline-none transition-colors",
        "focus:bg-accent focus:text-accent-foreground",
        "data-[expanded]:bg-accent data-[expanded]:text-accent-foreground",
        "data-[inset]:pl-7",
        "[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        local.class,
      )}
      {...others}
    >
      {local.children}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="ml-auto size-4"
      >
        <path d="M9 6l6 6l-6 6" />
      </svg>
    </ContextMenuPrimitive.SubmenuTrigger>
  )
}

type ContextMenuSubContentProps = CoreContextMenuSubmenuPopupProps & {
  class?: string
  children?: JSX.Element
}

const ContextMenuSubContent: Component<ContextMenuSubContentProps> = (props) => {
  const [local, others] = splitProps(props, ["class", "children"])

  return (
    <ContextMenuPrimitive.Portal>
      <ContextMenuPrimitive.SubmenuPopup
        data-slot="context-menu-sub-content"
        class={cn(
          "z-50 min-w-32 origin-[var(--kb-menu-content-transform-origin)] overflow-hidden rounded-lg border bg-popover p-1 text-popover-foreground shadow-lg outline-none",
          "data-[expanded]:animate-in data-[closed]:animate-out data-[closed]:fade-out-0 data-[expanded]:fade-in-0 data-[closed]:zoom-out-95 data-[expanded]:zoom-in-95",
          local.class,
        )}
        {...others}
      >
        {local.children}
      </ContextMenuPrimitive.SubmenuPopup>
    </ContextMenuPrimitive.Portal>
  )
}

export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuLabel,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubTrigger,
  ContextMenuSubContent,
}
export type {
  ContextMenuContentProps,
  ContextMenuItemProps,
  ContextMenuCheckboxItemProps,
  ContextMenuRadioGroupProps,
  ContextMenuRadioItemProps,
  ContextMenuGroupProps,
  ContextMenuLabelProps,
  ContextMenuSeparatorProps,
  ContextMenuShortcutProps,
  ContextMenuSubTriggerProps,
  ContextMenuSubContentProps,
}
