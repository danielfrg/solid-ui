import * as Switch from "@danielfrg/solid-ui-core/switch"
import styles from "./index.module.css"

export function DemoSwitchDescription() {
  return (
    <Switch.Root class={styles.switch} defaultChecked>
      <div class={styles.text}>
        <Switch.Label class={styles.label}>Email notifications</Switch.Label>
        <Switch.Description class={styles.description}>
          Receive emails about account activity and security.
        </Switch.Description>
      </div>
      <Switch.Input class={styles.input} />
      <Switch.Control class={styles.control}>
        <Switch.Thumb class={styles.thumb} />
      </Switch.Control>
    </Switch.Root>
  )
}
