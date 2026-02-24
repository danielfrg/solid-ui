import {
  CompositeItem as Item,
  type CompositeItemCommonProps,
  type CompositeItemOptions,
  type CompositeItemProps,
  type CompositeItemRenderProps,
} from "./composite-item"
import {
  CompositeRoot as Root,
  type CompositeRootCommonProps,
  type CompositeRootOptions,
  type CompositeRootProps,
  type CompositeRootRenderProps,
} from "./composite-root"

export type {
  CompositeItemOptions,
  CompositeItemCommonProps,
  CompositeItemRenderProps,
  CompositeItemProps,
  CompositeRootOptions,
  CompositeRootCommonProps,
  CompositeRootRenderProps,
  CompositeRootProps,
}

export { Item, Root }

export const Composite = Object.assign(Root, {
  Item,
})

export { useCompositeContext, type CompositeContextValue } from "./composite-context"
