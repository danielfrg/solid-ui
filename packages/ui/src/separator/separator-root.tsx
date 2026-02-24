import { type Orientation, mergeDefaultProps, mergeProps, mergeRefs } from "../utils"
import { type ValidComponent, splitProps } from "solid-js"

import { type ElementOf, Polymorphic, type PolymorphicProps } from "../polymorphic"
import { createTagName } from "../primitives"

export interface SeparatorRootOptions {
  /** The orientation of the separator. */
  orientation?: Orientation
}

export interface SeparatorRootCommonProps<T extends HTMLElement = HTMLElement> {
  ref: T | ((el: T) => void)
}

export interface SeparatorRootRenderProps extends SeparatorRootCommonProps {
  role: "separator" | undefined
  "aria-orientation": "vertical" | undefined
  "data-orientation": Orientation | undefined
}

export type SeparatorRootProps<T extends ValidComponent | HTMLElement = HTMLElement> = SeparatorRootOptions &
  Partial<SeparatorRootCommonProps<ElementOf<T>>>

/**
 * A separator visually or semantically separates content.
 */
export function SeparatorRoot<T extends ValidComponent = "hr">(props: PolymorphicProps<T, SeparatorRootProps<T>>) {
  let ref: HTMLElement | undefined

  const mergedProps = mergeDefaultProps(
    {
      orientation: "horizontal",
    },
    props as SeparatorRootProps,
  )

  const [local, others] = splitProps(mergedProps, ["ref", "orientation"])

  const tagName = createTagName(
    () => ref,
    () => "hr",
  )

  const rootProps = mergeProps(
    {
      ref: mergeRefs((el) => (ref = el), local.ref),
      get role() {
        return tagName() !== "hr" ? "separator" : undefined
      },
      get "aria-orientation"() {
        return local.orientation === "vertical" ? "vertical" : undefined
      },
      get "data-orientation"() {
        return local.orientation
      },
    },
    others,
  ) as unknown as SeparatorRootRenderProps & typeof others

  return <Polymorphic<SeparatorRootRenderProps> as="hr" {...rootProps} />
}
