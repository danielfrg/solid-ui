import { createSignal } from "solid-js"
import * as NumberField from "@danielfrg/solid-ui-core/number-field"
import styles from "./index.module.css"

export function DemoNumberFieldControlled() {
  const [rawValue, setRawValue] = createSignal(40)

  return (
    <div>
      <NumberField.Root class={styles.root} rawValue={rawValue()} onRawValueChange={setRawValue}>
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
        <NumberField.HiddenInput />
      </NumberField.Root>
      <p class={styles.status}>Value: {rawValue()}</p>
    </div>
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
