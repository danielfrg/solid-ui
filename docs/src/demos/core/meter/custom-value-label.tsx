import * as Meter from "@danielfrg/solid-ui-core/meter"
import styles from "./index.module.css"

export function DemoMeterCustomValueLabel() {
  return (
    <Meter.Root
      class={styles.meter}
      value={3}
      minValue={0}
      maxValue={10}
      getValueLabel={({ value, max }) => `${value} of ${max} GB used`}
    >
      <Meter.Label class={styles.label}>Storage</Meter.Label>
      <Meter.ValueLabel class={styles.value} />
      <Meter.Track class={styles.track}>
        <Meter.Fill class={styles.fill} />
      </Meter.Track>
    </Meter.Root>
  )
}
