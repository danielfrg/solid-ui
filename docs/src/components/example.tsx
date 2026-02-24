import { cn } from "@danielfrg/solid-ui-nova/utils"
import type { JSX } from "solid-js"
import { splitProps } from "solid-js"

type ExampleWrapperProps = JSX.HTMLAttributes<HTMLDivElement>

function ExampleWrapper(props: ExampleWrapperProps) {
  const [local, others] = splitProps(props, ["class", "children"])

  return (
    <div class="bg-background w-full">
      <div
        data-slot="example-wrapper"
        class={cn(
          "mx-auto grid w-full max-w-5xl min-w-0 content-center items-start gap-8 p-2 sm:gap-12 md:gap-8 2xl:max-w-6xl",
          local.class,
        )}
        {...others}
      >
        {local.children}
      </div>
    </div>
  )
}

type ExampleProps = JSX.HTMLAttributes<HTMLDivElement> & {
  title?: string
  containerClass?: string
}

function Example(props: ExampleProps) {
  const [local, others] = splitProps(props, ["title", "children", "class", "containerClass"])

  return (
    <div
      data-slot="example"
      class={cn(
        "mx-auto flex w-full max-w-2xl min-w-0 flex-col gap-1 self-stretch lg:max-w-none",
        local.containerClass,
      )}
    >
      {local.title && <div class="text-muted-foreground px-1.5 py-2 text-xs font-medium">{local.title}</div>}
      <div
        data-slot="example-content"
        class={cn(
          "bg-background text-foreground flex min-w-0 flex-1 flex-col items-start gap-6 border border-dashed p-4 sm:p-6 *:[div:not([class*='w-'])]:w-full",
          local.class,
        )}
        {...others}
      >
        {local.children}
      </div>
    </div>
  )
}

export { ExampleWrapper, Example }
