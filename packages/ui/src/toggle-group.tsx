import type { Component, JSX } from "solid-js"
import { createContext, splitProps, useContext } from "solid-js"
import type { VariantProps } from "class-variance-authority"
import { ToggleGroup as ToggleGroupPrimitive } from "@danielfrg/ui-core/toggle-group"
import type {
  ToggleGroupRootProps as CoreToggleGroupRootProps,
  ToggleGroupItemProps as CoreToggleGroupItemProps,
} from "@danielfrg/ui-core/toggle-group"
import { cn } from "./utils"
import { toggleVariants } from "./toggle"

const ToggleGroupContext = createContext<VariantProps<typeof toggleVariants>>({
  size: "default",
  variant: "default",
})

type ToggleGroupProps = CoreToggleGroupRootProps &
  VariantProps<typeof toggleVariants> & {
    class?: string
    children?: JSX.Element
  }

const ToggleGroup: Component<ToggleGroupProps> = (props) => {
  const [local, others] = splitProps(props, ["class", "children", "size", "variant"])

  return (
    <ToggleGroupPrimitive
      data-slot="toggle-group"
      data-variant={local.variant ?? "default"}
      data-size={local.size ?? "default"}
      class={cn("flex items-center justify-center gap-1", local.class)}
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

  return (
    <ToggleGroupPrimitive.Item
      data-slot="toggle-group-item"
      class={cn(
        toggleVariants({
          variant: context.variant || local.variant,
          size: context.size || local.size,
        }),
        local.class,
      )}
      {...others}
    />
  )
}

export { ToggleGroup, ToggleGroupItem }
export type { ToggleGroupProps, ToggleGroupItemProps }
