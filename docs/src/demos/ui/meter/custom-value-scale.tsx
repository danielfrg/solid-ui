import * as Meter from "@danielfrg/solid-ui/meter"
import styles from "./index.module.css"

export function DemoMeterCustomValueScale() {
  return (
    <Meter.Root class={styles.meter} value={100} minValue={0} maxValue={250}>
      <Meter.Label class={styles.label}>Disk Space Usage</Meter.Label>
      <Meter.ValueLabel class={styles.value} />
      <Meter.Track class={styles.track}>
        <Meter.Fill class={styles.fill} />
      </Meter.Track>
    </Meter.Root>
  )
}
