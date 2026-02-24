import type { Component, JSX } from "solid-js"
import { splitProps } from "solid-js"
import { Accordion as AccordionPrimitive } from "@danielfrg/solid-ui/accordion"
import type {
  AccordionRootProps as CoreAccordionRootProps,
  AccordionItemProps as CoreAccordionItemProps,
  AccordionTriggerProps as CoreAccordionTriggerProps,
  AccordionContentProps as CoreAccordionContentProps,
} from "@danielfrg/solid-ui/accordion"
import { cn } from "@danielfrg/solid-ui/utils"

type AccordionProps = CoreAccordionRootProps & {
  class?: string
  children?: JSX.Element
}

const Accordion: Component<AccordionProps> = (props) => {
  const [local, others] = splitProps(props, ["class", "collapsible"])

  return (
    <AccordionPrimitive
      data-slot="accordion"
      collapsible={local.collapsible ?? true}
      class={cn("flex w-full flex-col", local.class)}
      {...others}
    />
  )
}

type AccordionItemProps = CoreAccordionItemProps & {
  class?: string
  children?: JSX.Element
}

const AccordionItem: Component<AccordionItemProps> = (props) => {
  const [local, others] = splitProps(props, ["class"])

  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      class={cn("not-last:border-b data-[disabled]:opacity-50 data-[disabled]:pointer-events-none", local.class)}
      {...others}
    />
  )
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
          "group/accordion-trigger focus-visible:ring-ring/50 focus-visible:border-ring rounded-lg py-2.5 text-left text-sm font-medium hover:underline focus-visible:ring-3 flex flex-1 items-start justify-between border border-transparent transition-all outline-none aria-disabled:pointer-events-none aria-disabled:opacity-50",
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
          data-slot="accordion-trigger-icon"
          class="text-muted-foreground pointer-events-none ml-auto size-4 shrink-0 group-aria-expanded/accordion-trigger:hidden"
        >
          <path d="M6 9l6 6l6 -6" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          data-slot="accordion-trigger-icon"
          class="text-muted-foreground pointer-events-none ml-auto size-4 shrink-0 hidden group-aria-expanded/accordion-trigger:inline"
        >
          <path d="M6 15l6 -6l6 6" />
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
      class="animate-accordion-up overflow-hidden text-sm data-[expanded]:animate-accordion-down"
      {...others}
    >
      <div
        class={cn(
          "pt-0 pb-2.5 [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground [&_p:not(:last-child)]:mb-4",
          local.class,
        )}
      >
        {local.children}
      </div>
    </AccordionPrimitive.Content>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
export type { AccordionProps, AccordionItemProps, AccordionTriggerProps, AccordionContentProps }
