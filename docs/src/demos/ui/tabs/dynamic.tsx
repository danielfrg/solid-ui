import { createSignal, For } from "solid-js"
import * as Tabs from "@danielfrg/solid-ui/tabs"
import styles from "./index.module.css"

export function DemoTabsDynamic() {
  const [tabs, setTabs] = createSignal(["Account", "Password", "Settings"])
  const [selected, setSelected] = createSignal("Account")

  const addTab = () => {
    const name = `Tab ${tabs().length + 1}`
    setTabs((t) => [...t, name])
    setSelected(name)
  }

  const removeTab = () => {
    if (tabs().length <= 1) return
    const next = tabs().filter((t) => t !== selected())
    setTabs(next)
    setSelected(next[next.length - 1])
  }

  return (
    <div class={styles.dynamicWrapper}>
      <div class={styles.dynamicControls}>
        <button class={styles.dynamicButton} onClick={addTab}>Add tab</button>
        <button class={styles.dynamicButton} onClick={removeTab} disabled={tabs().length <= 1}>
          Remove tab
        </button>
      </div>
      <Tabs.Root value={selected()} onChange={setSelected} class={styles.root}>
        <Tabs.List class={styles.list}>
          <For each={tabs()}>
            {(tab) => (
              <Tabs.Trigger value={tab} class={styles.trigger}>{tab}</Tabs.Trigger>
            )}
          </For>
          <Tabs.Indicator class={styles.indicator} />
        </Tabs.List>
        <For each={tabs()}>
          {(tab) => (
            <Tabs.Content value={tab} class={styles.content}>
              <p>Content for {tab}.</p>
            </Tabs.Content>
          )}
        </For>
      </Tabs.Root>
    </div>
  )
}
