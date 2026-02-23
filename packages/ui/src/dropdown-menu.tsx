import type { Component, JSX } from "solid-js"
import { splitProps } from "solid-js"
import { Menu as MenuPrimitive } from "@danielfrg/solid-ui-core/menu"
import type {
  MenuRootProps as CoreMenuRootProps,
  MenuPopupProps as CoreMenuPopupProps,
  MenuItemProps as CoreMenuItemProps,
  MenuCheckboxItemProps as CoreMenuCheckboxItemProps,
  MenuRadioGroupProps as CoreMenuRadioGroupProps,
  MenuRadioItemProps as CoreMenuRadioItemProps,
  MenuGroupProps as CoreMenuGroupProps,
  MenuGroupLabelProps as CoreMenuGroupLabelProps,
  MenuSeparatorProps as CoreMenuSeparatorProps,
  MenuSubmenuRootProps as CoreMenuSubmenuRootProps,
  MenuSubmenuTriggerProps as CoreMenuSubmenuTriggerProps,
  MenuSubmenuPopupProps as CoreMenuSubmenuPopupProps,
} from "@danielfrg/solid-ui-core/menu"
import { cn } from "./utils"

const DropdownMenu = MenuPrimitive.Root
const DropdownMenuTrigger = MenuPrimitive.Trigger
const DropdownMenuPortal = MenuPrimitive.Portal

type DropdownMenuContentProps = CoreMenuPopupProps & {
  class?: string
  children?: JSX.Element
}

const DropdownMenuContent: Component<DropdownMenuContentProps> = (props) => {
  const [local, others] = splitProps(props, ["class", "children"])

  return (
    <MenuPrimitive.Portal>
      <MenuPrimitive.Popup
        data-slot="dropdown-menu-content"
        class={cn(
          "z-50 min-w-32 origin-[var(--kb-menu-content-transform-origin)] overflow-hidden rounded-lg border-0 ring-1 ring-foreground/10 bg-popover p-1 text-popover-foreground shadow-md outline-none",
          "data-[expanded]:animate-in data-[closed]:animate-out data-[closed]:fade-out-0 data-[expanded]:fade-in-0 data-[closed]:zoom-out-95 data-[expanded]:zoom-in-95",
          local.class,
        )}
        {...others}
      >
        {local.children}
      </MenuPrimitive.Popup>
    </MenuPrimitive.Portal>
  )
}

type DropdownMenuItemProps = CoreMenuItemProps & {
  class?: string
  children?: JSX.Element
  inset?: boolean
  variant?: "default" | "destructive"
}

const DropdownMenuItem: Component<DropdownMenuItemProps> = (props) => {
  const [local, others] = splitProps(props, ["class", "inset", "variant"])

  return (
    <MenuPrimitive.Item
      data-slot="dropdown-menu-item"
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

type DropdownMenuCheckboxItemProps = CoreMenuCheckboxItemProps & {
  class?: string
  children?: JSX.Element
  inset?: boolean
}

const DropdownMenuCheckboxItem: Component<DropdownMenuCheckboxItemProps> = (props) => {
  const [local, others] = splitProps(props, ["class", "children", "inset"])

  return (
    <MenuPrimitive.CheckboxItem
      data-slot="dropdown-menu-checkbox-item"
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
        <MenuPrimitive.ItemIndicator>
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
        </MenuPrimitive.ItemIndicator>
      </span>
      {local.children}
    </MenuPrimitive.CheckboxItem>
  )
}

type DropdownMenuRadioGroupProps = CoreMenuRadioGroupProps & {
  class?: string
  children?: JSX.Element
}

const DropdownMenuRadioGroup: Component<DropdownMenuRadioGroupProps> = (props) => {
  return <MenuPrimitive.RadioGroup data-slot="dropdown-menu-radio-group" {...props} />
}

type DropdownMenuRadioItemProps = CoreMenuRadioItemProps & {
  class?: string
  children?: JSX.Element
  inset?: boolean
}

const DropdownMenuRadioItem: Component<DropdownMenuRadioItemProps> = (props) => {
  const [local, others] = splitProps(props, ["class", "children", "inset"])

  return (
    <MenuPrimitive.RadioItem
      data-slot="dropdown-menu-radio-item"
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
        <MenuPrimitive.ItemIndicator>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="size-2 fill-current"
          >
            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
          </svg>
        </MenuPrimitive.ItemIndicator>
      </span>
      {local.children}
    </MenuPrimitive.RadioItem>
  )
}

type DropdownMenuGroupProps = CoreMenuGroupProps & {
  class?: string
  children?: JSX.Element
}

const DropdownMenuGroup: Component<DropdownMenuGroupProps> = (props) => {
  return <MenuPrimitive.Group data-slot="dropdown-menu-group" {...props} />
}

type DropdownMenuLabelProps = CoreMenuGroupLabelProps & {
  class?: string
  children?: JSX.Element
  inset?: boolean
}

const DropdownMenuLabel: Component<DropdownMenuLabelProps> = (props) => {
  const [local, others] = splitProps(props, ["class", "inset"])

  return (
    <MenuPrimitive.GroupLabel
      data-slot="dropdown-menu-label"
      data-inset={local.inset || undefined}
      class={cn("px-1.5 py-1 text-xs font-medium text-muted-foreground data-[inset]:pl-7", local.class)}
      {...others}
    />
  )
}

type DropdownMenuSeparatorProps = CoreMenuSeparatorProps & {
  class?: string
}

const DropdownMenuSeparator: Component<DropdownMenuSeparatorProps> = (props) => {
  const [local, others] = splitProps(props, ["class"])

  return (
    <MenuPrimitive.Separator
      data-slot="dropdown-menu-separator"
      class={cn("-mx-1 my-1 h-px bg-border", local.class)}
      {...others}
    />
  )
}

type DropdownMenuShortcutProps = {
  class?: string
  children?: JSX.Element
}

const DropdownMenuShortcut: Component<DropdownMenuShortcutProps> = (props) => {
  const [local, others] = splitProps(props, ["class"])

  return (
    <span
      data-slot="dropdown-menu-shortcut"
      class={cn("ml-auto text-xs tracking-widest text-muted-foreground", local.class)}
      {...others}
    />
  )
}

const DropdownMenuSub = MenuPrimitive.SubmenuRoot

type DropdownMenuSubTriggerProps = CoreMenuSubmenuTriggerProps & {
  class?: string
  children?: JSX.Element
  inset?: boolean
}

const DropdownMenuSubTrigger: Component<DropdownMenuSubTriggerProps> = (props) => {
  const [local, others] = splitProps(props, ["class", "children", "inset"])

  return (
    <MenuPrimitive.SubmenuTrigger
      data-slot="dropdown-menu-sub-trigger"
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
    </MenuPrimitive.SubmenuTrigger>
  )
}

type DropdownMenuSubContentProps = CoreMenuSubmenuPopupProps & {
  class?: string
  children?: JSX.Element
}

const DropdownMenuSubContent: Component<DropdownMenuSubContentProps> = (props) => {
  const [local, others] = splitProps(props, ["class", "children"])

  return (
    <MenuPrimitive.Portal>
      <MenuPrimitive.SubmenuPopup
        data-slot="dropdown-menu-sub-content"
        class={cn(
          "z-50 min-w-24 origin-[var(--kb-menu-content-transform-origin)] overflow-hidden rounded-lg border bg-popover p-1 text-popover-foreground shadow-lg outline-none",
          "data-[expanded]:animate-in data-[closed]:animate-out data-[closed]:fade-out-0 data-[expanded]:fade-in-0 data-[closed]:zoom-out-95 data-[expanded]:zoom-in-95",
          local.class,
        )}
        {...others}
      >
        {local.children}
      </MenuPrimitive.SubmenuPopup>
    </MenuPrimitive.Portal>
  )
}

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuPortal,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
}
export type {
  DropdownMenuContentProps,
  DropdownMenuItemProps,
  DropdownMenuCheckboxItemProps,
  DropdownMenuRadioGroupProps,
  DropdownMenuRadioItemProps,
  DropdownMenuGroupProps,
  DropdownMenuLabelProps,
  DropdownMenuSeparatorProps,
  DropdownMenuShortcutProps,
  DropdownMenuSubTriggerProps,
  DropdownMenuSubContentProps,
}
