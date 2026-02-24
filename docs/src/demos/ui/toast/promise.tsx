import { For } from "solid-js"
import { Toast } from "@danielfrg/solid-ui/toast"
import styles from "./index.module.css"

export function DemoToastPromise() {
  return (
    <Toast.Provider>
      <PromiseDemo />
      <Toast.Portal>
        <Toast.Viewport class={styles.Viewport}>
          <ToastList />
        </Toast.Viewport>
      </Toast.Portal>
    </Toast.Provider>
  )
}

function PromiseDemo() {
  const toastManager = Toast.useToastManager()

  function runPromise() {
    toastManager.promise(
      new Promise<string>((resolve, reject) => {
        const shouldSucceed = Math.random() > 0.3
        setTimeout(() => {
          if (shouldSucceed) {
            resolve("operation completed")
          } else {
            reject(new Error("operation failed"))
          }
        }, 2000)
      }),
      {
        loading: "Loading data...",
        success: (data: string) => `Success: ${data}`,
        error: (err: unknown) => `Error: ${(err as Error).message}`,
      },
    )
  }

  return (
    <button type="button" onClick={runPromise} class={styles.Button}>
      Run promise
    </button>
  )
}

function ToastList() {
  const { toasts } = Toast.useToastManager()
  return (
    <For each={toasts()}>
      {(toast) => (
        <Toast.Root toast={toast} class={styles.Toast}>
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
