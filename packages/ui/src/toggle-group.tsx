import type { Component, JSX } from "solid-js"
import { createContext, splitProps, useContext } from "solid-js"
import type { VariantProps } from "class-variance-authority"
import { ToggleGroup as ToggleGroupPrimitive } from "@danielfrg/solid-ui-core/toggle-group"
import type {
  ToggleGroupRootProps as CoreToggleGroupRootProps,
  ToggleGroupItemProps as CoreToggleGroupItemProps,
} from "@danielfrg/solid-ui-core/toggle-group"
import { cn } from "./utils"
import { toggleVariants } from "./toggle"

const ToggleGroupContext = createContext<{
  size?: VariantProps<typeof toggleVariants>["size"]
  variant?: VariantProps<typeof toggleVariants>["variant"]
  spacing?: number
}>({
  size: "default",
  variant: "default",
  spacing: 1,
})

type ToggleGroupProps = CoreToggleGroupRootProps &
  VariantProps<typeof toggleVariants> & {
    class?: string
    children?: JSX.Element
    spacing?: number
  }

const ToggleGroup: Component<ToggleGroupProps> = (props) => {
  const [local, others] = splitProps(props, ["class", "children", "size", "variant", "spacing"])
  const spacing = () => local.spacing ?? 1

  return (
    <ToggleGroupPrimitive
      data-slot="toggle-group"
      data-variant={local.variant ?? "default"}
      data-size={local.size ?? "default"}
      data-spacing={spacing()}
      class={cn(
        "flex items-center justify-center",
        spacing() === 0 ? "gap-0" : spacing() === 1 ? "gap-1" : "gap-2",
        "rounded-lg",
        local.class,
      )}
      {...others}
    >
      <ToggleGroupContext.Provider
        value={{
          get size() {
            return local.size
          },
          get variant() {
            return local.variant
          },
          get spacing() {
            return spacing()
          },
        }}
      >
        {local.children}
      </ToggleGroupContext.Provider>
    </ToggleGroupPrimitive>
  )
}

type ToggleGroupItemProps = CoreToggleGroupItemProps &
  VariantProps<typeof toggleVariants> & {
    class?: string
    children?: JSX.Element
  }

const ToggleGroupItem: Component<ToggleGroupItemProps> = (props) => {
  const [local, others] = splitProps(props, ["class", "size", "variant"])
  const context = useContext(ToggleGroupContext)
  const spacing = () => context.spacing ?? 1

  return (
    <ToggleGroupPrimitive.Item
      data-slot="toggle-group-item"
      class={cn(
        toggleVariants({
          variant: context.variant || local.variant,
          size: context.size || local.size,
        }),
        spacing() === 0 && "rounded-none border-r-0 last:border-r",
        spacing() === 0 && "first:rounded-l-lg last:rounded-r-lg",
        local.class,
      )}
      {...others}
    />
  )
}

export { ToggleGroup, ToggleGroupItem }
export type { ToggleGroupProps, ToggleGroupItemProps }
