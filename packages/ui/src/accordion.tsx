import type { Component, JSX } from "solid-js"
import { splitProps } from "solid-js"
import { Accordion as AccordionPrimitive } from "@danielfrg/solid-ui-core/accordion"
import type {
  AccordionRootProps as CoreAccordionRootProps,
  AccordionItemProps as CoreAccordionItemProps,
  AccordionTriggerProps as CoreAccordionTriggerProps,
  AccordionContentProps as CoreAccordionContentProps,
} from "@danielfrg/solid-ui-core/accordion"
import { cn } from "./utils"

type AccordionProps = CoreAccordionRootProps & {
  class?: string
  children?: JSX.Element
}

const Accordion: Component<AccordionProps> = (props) => {
  const [local, others] = splitProps(props, ["class"])

  return <AccordionPrimitive data-slot="accordion" class={cn(local.class)} {...others} />
}

type AccordionItemProps = CoreAccordionItemProps & {
  class?: string
  children?: JSX.Element
}

const AccordionItem: Component<AccordionItemProps> = (props) => {
  const [local, others] = splitProps(props, ["class"])

  return <AccordionPrimitive.Item data-slot="accordion-item" class={cn("border-b", local.class)} {...others} />
}

type AccordionTriggerProps = CoreAccordionTriggerProps & {
  class?: string
  children?: JSX.Element
}

const AccordionTrigger: Component<AccordionTriggerProps> = (props) => {
  const [local, others] = splitProps(props, ["class", "children"])

  return (
    <AccordionPrimitive.Header class="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        class={cn(
          "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-expanded]>svg]:rotate-180",
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
          class="size-4 shrink-0 transition-transform duration-200"
        >
          <path d="M6 9l6 6l6 -6" />
        </svg>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

type AccordionContentProps = CoreAccordionContentProps & {
  class?: string
  children?: JSX.Element
}

const AccordionContent: Component<AccordionContentProps> = (props) => {
  const [local, others] = splitProps(props, ["class", "children"])

  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      class={cn(
        "animate-accordion-up overflow-hidden text-sm transition-all data-[expanded]:animate-accordion-down",
        local.class,
      )}
      {...others}
    >
      <div class="pb-4 pt-0">{local.children}</div>
    </AccordionPrimitive.Content>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
export type { AccordionProps, AccordionItemProps, AccordionTriggerProps, AccordionContentProps }
