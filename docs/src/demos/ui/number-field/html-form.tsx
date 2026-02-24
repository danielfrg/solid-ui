import * as NumberField from "@danielfrg/solid-ui/number-field"
import styles from "./index.module.css"

export function DemoNumberFieldHtmlForm() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        const data = new FormData(e.currentTarget)
        window.alert(JSON.stringify(Object.fromEntries(data), null, 2))
      }}
      class={styles.form}
    >
      <NumberField.Root class={styles.root} name="quantity" defaultValue={1} minValue={1}>
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
      <div class={styles.actions}>
        <button type="reset" class={styles.button}>Reset</button>
        <button type="submit" class={styles.button}>Submit</button>
      </div>
    </form>
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
