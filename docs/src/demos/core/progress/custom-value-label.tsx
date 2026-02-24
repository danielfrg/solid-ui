import * as Progress from "@danielfrg/solid-ui-core/progress"
import styles from "./index.module.css"

export function DemoProgressCustomValueLabel() {
  return (
    <Progress.Root
      class={styles.progress}
      value={3}
      minValue={0}
      maxValue={10}
      getValueLabel={({ value, max }) => `${value} of ${max} tasks completed`}
    >
      <Progress.Label class={styles.label}>Tasks</Progress.Label>
      <Progress.ValueLabel class={styles.value} />
      <Progress.Track class={styles.track}>
        <Progress.Fill class={styles.fill} />
      </Progress.Track>
    </Progress.Root>
  )
}
