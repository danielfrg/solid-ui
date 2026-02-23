import * as Slider from "@danielfrg/solid-ui-core/slider"
import styles from "./index.module.css"

export function DemoSliderMinStepsBetween() {
  return (
    <Slider.Root class={styles.root} defaultValue={[10, 20]} minStepsBetweenThumbs={10}>
      <div class={styles.header}>
        <Slider.Label class={styles.label}>Label</Slider.Label>
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
