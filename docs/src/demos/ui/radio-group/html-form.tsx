import * as RadioGroup from "@danielfrg/solid-ui/radio-group"
import styles from "./index.module.css"

export function DemoRadioGroupHtmlForm() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        const data = new FormData(e.currentTarget)
        window.alert(JSON.stringify(Object.fromEntries(data), null, 2))
      }}
      class={styles.form}
    >
      <RadioGroup.Root name="apple" defaultValue="fuji-apple" class={styles.radiogroup} aria-label="Best apple">
        <div class={styles.caption}>Best apple</div>

        <label class={styles.item}>
          <RadioGroup.Item value="fuji-apple">
            <RadioGroup.ItemInput />
            <RadioGroup.ItemControl class={styles.radio}>
              <RadioGroup.ItemIndicator class={styles.indicator} />
            </RadioGroup.ItemControl>
          </RadioGroup.Item>
          Fuji
        </label>

        <label class={styles.item}>
          <RadioGroup.Item value="gala-apple">
            <RadioGroup.ItemInput />
            <RadioGroup.ItemControl class={styles.radio}>
              <RadioGroup.ItemIndicator class={styles.indicator} />
            </RadioGroup.ItemControl>
          </RadioGroup.Item>
          Gala
        </label>

        <label class={styles.item}>
          <RadioGroup.Item value="granny-smith-apple">
            <RadioGroup.ItemInput />
            <RadioGroup.ItemControl class={styles.radio}>
              <RadioGroup.ItemIndicator class={styles.indicator} />
            </RadioGroup.ItemControl>
          </RadioGroup.Item>
          Granny Smith
        </label>
      </RadioGroup.Root>
      <div class={styles.actions}>
        <button type="reset" class={styles.button}>Reset</button>
        <button type="submit" class={styles.button}>Submit</button>
      </div>
    </form>
  )
}
