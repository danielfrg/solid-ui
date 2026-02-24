import * as Progress from "@danielfrg/solid-ui/progress"
import styles from "./index.module.css"

export function DemoProgressCustomValueScale() {
  return (
    <Progress.Root class={styles.progress} value={100} minValue={50} maxValue={150}>
      <Progress.Label class={styles.label}>Temperature</Progress.Label>
      <Progress.ValueLabel class={styles.value} />
      <Progress.Track class={styles.track}>
        <Progress.Fill class={styles.fill} />
      </Progress.Track>
    </Progress.Root>
  )
}
