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

// Re-export Root and Trigger directly to preserve typing
const DropdownMenu = MenuPrimitive.Root
const DropdownMenuTrigger = MenuPrimitive.Trigger

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
          "z-50 min-w-32 origin-[var(--kb-menu-content-transform-origin)] animate-content-hide overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md outline-none data-[expanded]:animate-content-show",
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
}

const DropdownMenuItem: Component<DropdownMenuItemProps> = (props) => {
  const [local, others] = splitProps(props, ["class", "inset"])

  return (
    <MenuPrimitive.Item
      data-slot="dropdown-menu-item"
      data-inset={local.inset || undefined}
      class={cn(
        "relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg:not([class*='text-'])]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        local.class,
      )}
      {...others}
    />
  )
}

type DropdownMenuCheckboxItemProps = CoreMenuCheckboxItemProps & {
  class?: string
  children?: JSX.Element
}

const DropdownMenuCheckboxItem: Component<DropdownMenuCheckboxItemProps> = (props) => {
  const [local, others] = splitProps(props, ["class", "children"])

  return (
    <MenuPrimitive.CheckboxItem
      data-slot="dropdown-menu-checkbox-item"
      class={cn(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        local.class,
      )}
      {...others}
    >
      <span class="absolute left-2 flex size-3.5 items-center justify-center">
        <MenuPrimitive.ItemIndicator>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="size-4"
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
}

const DropdownMenuRadioItem: Component<DropdownMenuRadioItemProps> = (props) => {
  const [local, others] = splitProps(props, ["class", "children"])

  return (
    <MenuPrimitive.RadioItem
      data-slot="dropdown-menu-radio-item"
      class={cn(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        local.class,
      )}
      {...others}
    >
      <span class="absolute left-2 flex size-3.5 items-center justify-center">
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
      class={cn("px-2 py-1.5 text-sm font-semibold", local.class)}
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
      class={cn("-mx-1 my-1 h-px bg-muted", local.class)}
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
      class={cn("ml-auto text-xs tracking-widest opacity-60", local.class)}
      {...others}
    />
  )
}

// Re-export SubmenuRoot directly
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
        "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[expanded]:bg-accent",
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
          "z-50 min-w-32 origin-[var(--kb-menu-content-transform-origin)] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md outline-none animate-in",
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
