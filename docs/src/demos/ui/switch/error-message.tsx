import { createSignal } from "solid-js"
import * as Switch from "@danielfrg/solid-ui/switch"
import styles from "./index.module.css"

export function DemoSwitchErrorMessage() {
  const [checked, setChecked] = createSignal(false)

  return (
    <Switch.Root
      class={styles.switch}
      checked={checked()}
      onChange={setChecked}
      validationState={!checked() ? "invalid" : "valid"}
    >
      <div class={styles.text}>
        <Switch.Label class={styles.label}>Two-factor authentication</Switch.Label>
        <Switch.ErrorMessage class={styles.error}>
          You must enable two-factor authentication to continue.
        </Switch.ErrorMessage>
      </div>
      <Switch.Input class={styles.input} />
      <Switch.Control class={styles.control}>
        <Switch.Thumb class={styles.thumb} />
      </Switch.Control>
    </Switch.Root>
  )
}
