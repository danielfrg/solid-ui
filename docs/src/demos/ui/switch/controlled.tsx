import { createSignal } from "solid-js"
import * as Switch from "@danielfrg/solid-ui/switch"
import styles from "./index.module.css"

export function DemoSwitchControlled() {
  const [checked, setChecked] = createSignal(false)

  return (
    <div>
      <Switch.Root class={styles.switch} checked={checked()} onChange={setChecked}>
        <Switch.Label class={styles.label}>Notifications</Switch.Label>
        <Switch.Input class={styles.input} />
        <Switch.Control class={styles.control}>
          <Switch.Thumb class={styles.thumb} />
        </Switch.Control>
      </Switch.Root>
      <p class={styles.status}>Notifications are {checked() ? "on" : "off"}.</p>
    </div>
  )
}
