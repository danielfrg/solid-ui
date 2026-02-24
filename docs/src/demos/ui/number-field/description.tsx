import * as NumberField from "@danielfrg/solid-ui/number-field"
import styles from "./index.module.css"

export function DemoNumberFieldDescription() {
  return (
    <NumberField.Root class={styles.root} defaultValue={1} minValue={1} maxValue={99}>
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
      <NumberField.Description class={styles.description}>
        Enter a quantity between 1 and 99.
      </NumberField.Description>
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
