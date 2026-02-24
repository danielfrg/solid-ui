import * as Slider from "@danielfrg/solid-ui/slider"
import styles from "./index.module.css"

export function DemoSliderCustomValueLabel() {
  return (
    <Slider.Root
      class={styles.root}
      minValue={10}
      maxValue={2000}
      defaultValue={[20, 500]}
      getValueLabel={(params) => `$${params.values[0]} - $${params.values[1]}`}
    >
      <div class={styles.header}>
        <Slider.Label class={styles.label}>Money</Slider.Label>
        <Slider.ValueLabel class={styles["value-label"]} />
      </div>
      <Slider.Track class={styles.track}>
        <Slider.Fill class={styles.fill} />
        <Slider.Thumb class={styles.thumb}>
          <Slider.Input />
        </Slider.Thumb>
        <Slider.Thumb class={styles.thumb}>
          <Slider.Input />
        </Slider.Thumb>
      </Slider.Track>
    </Slider.Root>
  )
}
