import { createSignal } from "solid-js"
import * as NumberField from "@danielfrg/solid-ui-core/number-field"
import styles from "./index.module.css"

export function DemoNumberFieldErrorMessage() {
  const [rawValue, setRawValue] = createSignal(0)

  return (
    <NumberField.Root
      class={styles.root}
      rawValue={rawValue()}
      onRawValueChange={setRawValue}
      validationState={rawValue() !== 40 ? "invalid" : "valid"}
    >
      <NumberField.Label class={styles.label}>Quantity</NumberField.Label>
      <div class={styles.group}>
        <NumberField.DecrementTrigger class={styles.button} aria-label="Decrement">
          <MinusIcon />
        </NumberField.DecrementTrigger>
        <NumberField.Input class={styles.input} />
        <NumberField.IncrementTrigger class={styles.button} aria-label="Increment">
          <PlusIcon />
        </NumberField.IncrementTrigger>
      </div>
      <NumberField.ErrorMessage class={styles.error}>
        Quantity must be exactly 40.
      </NumberField.ErrorMessage>
      <NumberField.HiddenInput />
    </NumberField.Root>
  )
}

function MinusIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M3 7H11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
    </svg>
  )
}

function PlusIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M7 3V11M3 7H11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
    </svg>
  )
}
