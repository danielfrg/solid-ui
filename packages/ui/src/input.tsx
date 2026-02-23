import type { Component, JSX } from "solid-js"
import { splitProps } from "solid-js"
import { Input as InputPrimitive } from "@danielfrg/ui-core/input"
import type {
  InputRootProps as CoreInputRootProps,
  InputFieldProps as CoreInputFieldProps,
  InputTextAreaProps as CoreInputTextAreaProps,
  InputLabelProps as CoreInputLabelProps,
  InputDescriptionProps as CoreInputDescriptionProps,
  InputErrorMessageProps as CoreInputErrorMessageProps,
} from "@danielfrg/ui-core/input"
import { cn } from "./utils"

type InputProps = CoreInputRootProps & {
  class?: string
  children?: JSX.Element
}

const Input: Component<InputProps> = (props) => {
  const [local, others] = splitProps(props, ["class"])

  return <InputPrimitive data-slot="input-root" class={cn("flex flex-col gap-1", local.class)} {...others} />
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
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
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
        "placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input w-full min-w-0 rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
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
        "flex items-center gap-2 text-sm leading-none font-medium select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[invalid]:text-destructive",
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
      class={cn("text-muted-foreground text-sm", local.class)}
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
      class={cn("text-destructive text-sm", local.class)}
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
