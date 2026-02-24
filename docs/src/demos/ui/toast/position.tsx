import { For, createSignal } from "solid-js"
import { Toast } from "@danielfrg/solid-ui/toast"
import styles from "./index.module.css"

export function DemoToastPosition() {
  return (
    <Toast.Provider>
      <ToastButton />
      <Toast.Portal>
        <Toast.Viewport class={styles.ViewportTop}>
          <ToastList />
        </Toast.Viewport>
      </Toast.Portal>
    </Toast.Provider>
  )
}

function ToastButton() {
  const toastManager = Toast.useToastManager()
  const [count, setCount] = createSignal(0)

  function createToast() {
    setCount((prev) => prev + 1)
    toastManager.add({
      title: `Toast ${count()} created`,
      description: "This is a toast notification.",
    })
  }

  return (
    <button type="button" class={styles.Button} onClick={createToast}>
      Create toast
    </button>
  )
}

function ToastList() {
  const { toasts } = Toast.useToastManager()
  return (
    <For each={toasts()}>
      {(toast) => (
        <Toast.Root toast={toast} swipeDirection="up" class={styles.ToastTop}>
          <Toast.Content class={styles.Content}>
            <Toast.Title class={styles.Title} />
            <Toast.Description class={styles.Description} />
            <Toast.Close class={styles.Close} aria-label="Close">
              <XIcon class={styles.Icon} />
            </Toast.Close>
          </Toast.Content>
        </Toast.Root>
      )}
    </For>
  )
}

function XIcon(props: { class?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class={props.class}
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}
