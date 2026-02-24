import * as Slider from "@danielfrg/solid-ui/slider"
import styles from "./index.module.css"

export function DemoSliderStep() {
  return (
    <div style={{ display: "flex", "flex-direction": "column", gap: "1.5rem" }}>
      <Slider.Root class={styles.root} step={8}>
        <div class={styles.header}>
          <Slider.Label class={styles.label}>Step size 8</Slider.Label>
          <Slider.ValueLabel class={styles["value-label"]} />
        </div>
        <Slider.Track class={styles.track}>
          <Slider.Fill class={styles.fill} />
          <Slider.Thumb class={styles.thumb}>
            <Slider.Input />
          </Slider.Thumb>
        </Slider.Track>
      </Slider.Root>
      <Slider.Root class={styles.root} step={10}>
        <div class={styles.header}>
          <Slider.Label class={styles.label}>Step size 10</Slider.Label>
          <Slider.ValueLabel class={styles["value-label"]} />
        </div>
        <Slider.Track class={styles.track}>
          <Slider.Fill class={styles.fill} />
          <Slider.Thumb class={styles.thumb}>
            <Slider.Input />
          </Slider.Thumb>
        </Slider.Track>
      </Slider.Root>
      <Slider.Root class={styles.root} step={20}>
        <div class={styles.header}>
          <Slider.Label class={styles.label}>Step size 20</Slider.Label>
          <Slider.ValueLabel class={styles["value-label"]} />
        </div>
        <Slider.Track class={styles.track}>
          <Slider.Fill class={styles.fill} />
          <Slider.Thumb class={styles.thumb}>
            <Slider.Input />
          </Slider.Thumb>
        </Slider.Track>
      </Slider.Root>
    </div>
  )
}
