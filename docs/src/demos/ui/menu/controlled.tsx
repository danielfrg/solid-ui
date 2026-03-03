import { createSignal } from "solid-js"
import { Menu } from "@danielfrg/solid-ui/menu"
import styles from "./index.module.css"

export function DemoMenuControlled() {
  const [open, setOpen] = createSignal(false)

  return (
    <Menu.Root open={open()} onOpenChange={setOpen} gutter={8}>
      <Menu.Trigger class={styles.trigger}>
        {open() ? "Close" : "Song"} <ChevronDownIcon />
      </Menu.Trigger>
      <Menu.Portal>
        <Menu.Popup class={styles.popup}>
          <Menu.Arrow class={styles.arrow} />
          <Menu.Item class={styles.item} onSelect={() => setOpen(false)}>
            Add to Library
          </Menu.Item>
          <Menu.Item class={styles.item} onSelect={() => setOpen(false)}>
            Add to Playlist
          </Menu.Item>
          <Menu.Separator class={styles.separator} />
          <Menu.Item class={styles.item} onSelect={() => setOpen(false)}>
            Play Next
          </Menu.Item>
          <Menu.Item class={styles.item} onSelect={() => setOpen(false)}>
            Play Last
          </Menu.Item>
        </Menu.Popup>
      </Menu.Portal>
    </Menu.Root>
  )
}

function ChevronDownIcon() {
  return (
    <svg class={styles["trigger-icon"]} width="10" height="10" viewBox="0 0 10 10" fill="none">
      <path d="M1 3.5L5 7.5L9 3.5" stroke="currentColor" stroke-width="1.5" />
    </svg>
  )
}
