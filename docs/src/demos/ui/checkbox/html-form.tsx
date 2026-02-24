import * as Checkbox from "@danielfrg/solid-ui/checkbox"
import styles from "./index.module.css"

export function DemoCheckboxHtmlForm() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        const data = new FormData(e.currentTarget)
        window.alert(JSON.stringify(Object.fromEntries(data), null, 2))
      }}
      class={styles.form}
    >
      <Checkbox.Root name="newsletter" value="subscribe" class={styles.root}>
        <Checkbox.Input />
        <Checkbox.Control class={styles.checkbox}>
          <Checkbox.Indicator class={styles.indicator}>
            <CheckIcon class={styles.icon} />
          </Checkbox.Indicator>
        </Checkbox.Control>
        <Checkbox.Label class={styles.label}>Subscribe to newsletter</Checkbox.Label>
      </Checkbox.Root>
      <div class={styles.actions}>
        <button type="reset" class={styles.button}>
          Reset
        </button>
        <button type="submit" class={styles.button}>
          Submit
        </button>
      </div>
    </form>
  )
}

function CheckIcon(props: { class?: string }) {
  return (
    <svg fill="currentcolor" width="10" height="10" viewBox="0 0 10 10" class={props.class}>
      <path d="M9.1603 1.12218C9.50684 1.34873 9.60427 1.81354 9.37792 2.16038L5.13603 8.66012C5.01614 8.8438 4.82192 8.96576 4.60451 8.99384C4.3871 9.02194 4.1683 8.95335 4.00574 8.80615L1.24664 6.30769C0.939709 6.02975 0.916013 5.55541 1.19372 5.24822C1.47142 4.94102 1.94536 4.91731 2.2523 5.19524L4.36085 7.10461L8.12299 1.33999C8.34934 0.993152 8.81376 0.895638 9.1603 1.12218Z" />
    </svg>
  )
}
