import type { Component, JSX } from "solid-js"
import { splitProps } from "solid-js"
import { Input as InputPrimitive } from "@danielfrg/solid-ui/input"
import type {
  InputRootProps as CoreInputRootProps,
  InputFieldProps as CoreInputFieldProps,
  InputTextAreaProps as CoreInputTextAreaProps,
  InputLabelProps as CoreInputLabelProps,
  InputDescriptionProps as CoreInputDescriptionProps,
  InputErrorMessageProps as CoreInputErrorMessageProps,
} from "@danielfrg/solid-ui/input"
import { cn } from "@danielfrg/solid-ui/utils"

type InputProps = CoreInputRootProps & {
  class?: string
  children?: JSX.Element
}

const Input: Component<InputProps> = (props) => {
  const [local, others] = splitProps(props, ["class"])

  return <InputPrimitive data-slot="input-root" class={cn("flex flex-col gap-1.5", local.class)} {...others} />
}

type InputFieldProps = CoreInputFieldProps &
  JSX.InputHTMLAttributes<HTMLInputElement> & {
    class?: string
  }

const InputField: Component<InputFieldProps> = (props) => {
  const [local, others] = splitProps(props, ["class"])

  return (
    <InputPrimitive.Field
      data-slot="input"
      class={cn(
        "border-input file:text-foreground placeholder:text-muted-foreground h-8 w-full rounded-lg border bg-transparent px-2.5 py-1 text-base transition-colors file:h-6 file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 dark:disabled:bg-input/80 dark:bg-input/30 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-3 focus-visible:outline-none",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50",
        "aria-invalid:shadow-[0_0_0_3px] aria-invalid:shadow-destructive/20 dark:aria-invalid:shadow-destructive/40",
        local.class,
      )}
      {...others}
    />
  )
}

type InputTextAreaProps = CoreInputTextAreaProps &
  JSX.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    class?: string
  }

const InputTextArea: Component<InputTextAreaProps> = (props) => {
  const [local, others] = splitProps(props, ["class"])

  return (
    <InputPrimitive.TextArea
      data-slot="textarea"
      class={cn(
        "border-input placeholder:text-muted-foreground w-full rounded-lg border bg-transparent px-3 py-2 text-base transition-colors disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 dark:disabled:bg-input/80 dark:bg-input/30 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-3 focus-visible:outline-none",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50",
        "aria-invalid:shadow-[0_0_0_3px] aria-invalid:shadow-destructive/20 dark:aria-invalid:shadow-destructive/40",
        "min-h-[80px] resize-y",
        local.class,
      )}
      {...others}
    />
  )
}

type InputLabelProps = CoreInputLabelProps & {
  class?: string
  children?: JSX.Element
}

const InputLabel: Component<InputLabelProps> = (props) => {
  const [local, others] = splitProps(props, ["class"])

  return (
    <InputPrimitive.Label
      data-slot="label"
      class={cn(
        "text-sm font-medium leading-snug select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        local.class,
      )}
      {...others}
    />
  )
}

type InputDescriptionProps = CoreInputDescriptionProps & {
  class?: string
  children?: JSX.Element
}

const InputDescription: Component<InputDescriptionProps> = (props) => {
  const [local, others] = splitProps(props, ["class"])

  return (
    <InputPrimitive.Description
      data-slot="input-description"
      class={cn("text-muted-foreground text-sm leading-snug", local.class)}
      {...others}
    />
  )
}

type InputErrorMessageProps = CoreInputErrorMessageProps & {
  class?: string
  children?: JSX.Element
}

const InputErrorMessage: Component<InputErrorMessageProps> = (props) => {
  const [local, others] = splitProps(props, ["class"])

  return (
    <InputPrimitive.ErrorMessage
      data-slot="input-error-message"
      class={cn("text-destructive text-sm leading-snug", local.class)}
      {...others}
    />
  )
}

export { Input, InputField, InputTextArea, InputLabel, InputDescription, InputErrorMessage }
export type {
  InputProps,
  InputFieldProps,
  InputTextAreaProps,
  InputLabelProps,
  InputDescriptionProps,
  InputErrorMessageProps,
}
