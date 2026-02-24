import { createSignal, For } from "solid-js"
import * as Select from "@danielfrg/solid-ui/select"
import styles from "./index.module.css"

const FRUITS = ["Apple", "Banana", "Blueberry", "Grapes", "Pineapple"]

export function DemoSelectMultiple() {
  const [values, setValues] = createSignal<string[]>(["Blueberry", "Grapes"])

  return (
    <Select.Root<string>
      multiple
      options={FRUITS}
      value={values()}
      onChange={setValues}
      placeholder="Select fruits..."
      itemComponent={(props) => (
        <Select.Item item={props.item} class={styles.item}>
          <Select.ItemIndicator class={styles["item-indicator"]}>
            <CheckIcon />
          </Select.ItemIndicator>
          <Select.ItemLabel>{props.item.rawValue}</Select.ItemLabel>
        </Select.Item>
      )}
    >
      <Select.Trigger as="div" class={styles.triggerMultiple} aria-label="Fruits">
        <Select.Value<string> class={styles.valueMultiple}>
          {(state) => (
            <For each={state.selectedOptions()} fallback={<span class={styles.placeholder}>Select fruits...</span>}>
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
          )}
        </Select.Value>
        <Select.Icon class={styles.icon}>
          <ChevronDownIcon />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content class={styles.content}>
          <Select.Listbox class={styles.listbox} />
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  )
}

function CheckIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="currentcolor" style={{ display: "block" }}>
      <path d="M9.854 3.146a.5.5 0 0 1 0 .708l-5 5a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L4.5 7.793l4.646-4.647a.5.5 0 0 1 .708 0Z" />
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
