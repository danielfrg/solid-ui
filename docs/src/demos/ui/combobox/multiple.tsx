import { createSignal, For } from "solid-js"
import * as Combobox from "@danielfrg/solid-ui/combobox"
import styles from "./index.module.css"

const FRUITS = ["Apple", "Banana", "Blueberry", "Grapes", "Pineapple"]

export function DemoComboboxMultiple() {
  const [values, setValues] = createSignal<string[]>(["Blueberry", "Grapes"])

  return (
    <Combobox.Root<string>
      multiple
      options={FRUITS}
      value={values()}
      onChange={setValues}
      placeholder="Search fruits..."
      itemComponent={(props) => (
        <Combobox.Item item={props.item} class={styles.item}>
          <Combobox.ItemLabel>{props.item.rawValue}</Combobox.ItemLabel>
          <Combobox.ItemIndicator class={styles["item-indicator"]}>
            <CheckIcon />
          </Combobox.ItemIndicator>
        </Combobox.Item>
      )}
    >
      <Combobox.Control<string> class={styles.controlMultiple} aria-label="Fruits">
        {(state) => (
          <>
            <div class={styles.tags}>
              <For each={state.selectedOptions()}>
                {(option) => (
                  <span class={styles.tag}>
                    {option}
                    <button
                      class={styles.tagRemove}
                      onPointerDown={(e) => e.stopPropagation()}
                      onClick={() => state.remove(option)}
                      aria-label={`Remove ${option}`}
                    >
                      <CloseIcon />
                    </button>
                  </span>
                )}
              </For>
              <Combobox.Input class={styles.inputInline} />
            </div>
            <Combobox.Trigger class={styles.trigger}>
              <Combobox.Icon class={styles.icon}>
                <ChevronDownIcon />
              </Combobox.Icon>
            </Combobox.Trigger>
          </>
        )}
      </Combobox.Control>
      <Combobox.Portal>
        <Combobox.Content class={styles.content}>
          <Combobox.Listbox class={styles.listbox} />
        </Combobox.Content>
      </Combobox.Portal>
    </Combobox.Root>
  )
}

function CheckIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
      <path
        d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3354 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.5553 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
        fill="currentColor"
        fill-rule="evenodd"
        clip-rule="evenodd"
      />
    </svg>
  )
}

function ChevronDownIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
      <path
        d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z"
        fill="currentColor"
        fill-rule="evenodd"
        clip-rule="evenodd"
      />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
      <path d="M7.5 2.5L2.5 7.5M2.5 2.5L7.5 7.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
    </svg>
  )
}
