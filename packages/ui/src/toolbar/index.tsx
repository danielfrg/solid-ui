import {
  ToolbarButton as Button,
  type ToolbarButtonCommonProps,
  type ToolbarButtonOptions,
  type ToolbarButtonProps,
  type ToolbarButtonRenderProps,
} from "./toolbar-button"
import {
  ToolbarGroup as Group,
  type ToolbarGroupCommonProps,
  type ToolbarGroupOptions,
  type ToolbarGroupProps,
  type ToolbarGroupRenderProps,
} from "./toolbar-group"
import {
  ToolbarInput as Input,
  type ToolbarInputCommonProps,
  type ToolbarInputOptions,
  type ToolbarInputProps,
  type ToolbarInputRenderProps,
} from "./toolbar-input"
import {
  ToolbarLink as Link,
  type ToolbarLinkCommonProps,
  type ToolbarLinkOptions,
  type ToolbarLinkProps,
  type ToolbarLinkRenderProps,
} from "./toolbar-link"
import {
  ToolbarRoot as Root,
  type ToolbarRootCommonProps,
  type ToolbarRootOptions,
  type ToolbarRootProps,
  type ToolbarRootRenderProps,
} from "./toolbar-root"
import {
  ToolbarSeparator as Separator,
  type ToolbarSeparatorCommonProps,
  type ToolbarSeparatorOptions,
  type ToolbarSeparatorProps,
  type ToolbarSeparatorRenderProps,
} from "./toolbar-separator"

export type {
  ToolbarButtonOptions,
  ToolbarButtonCommonProps,
  ToolbarButtonRenderProps,
  ToolbarButtonProps,
  ToolbarGroupOptions,
  ToolbarGroupCommonProps,
  ToolbarGroupRenderProps,
  ToolbarGroupProps,
  ToolbarInputOptions,
  ToolbarInputCommonProps,
  ToolbarInputRenderProps,
  ToolbarInputProps,
  ToolbarLinkOptions,
  ToolbarLinkCommonProps,
  ToolbarLinkRenderProps,
  ToolbarLinkProps,
  ToolbarRootOptions,
  ToolbarRootCommonProps,
  ToolbarRootRenderProps,
  ToolbarRootProps,
  ToolbarSeparatorOptions,
  ToolbarSeparatorCommonProps,
  ToolbarSeparatorRenderProps,
  ToolbarSeparatorProps,
}

export { Button, Group, Input, Link, Root, Separator }

export const Toolbar = Object.assign(Root, {
  Button,
  Group,
  Input,
  Link,
  Separator,
})

export { useToolbarContext, type ToolbarContextValue } from "./toolbar-context"
