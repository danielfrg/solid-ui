import { For, Show } from "solid-js"
import { Toast } from "@danielfrg/solid-ui/toast"
import type { ToastObject } from "@danielfrg/solid-ui/toast"
import styles from "./index.module.css"

interface CustomToastData extends Record<string, unknown> {
  userId: string
}

function isCustomToast(toast: ToastObject): toast is ToastObject<CustomToastData> {
  return typeof (toast.data as CustomToastData | undefined)?.userId === "string"
}

export function DemoToastCustomData() {
  return (
    <Toast.Provider>
      <CustomToastButton />
      <Toast.Portal>
        <Toast.Viewport class={styles.Viewport}>
          <ToastList />
        </Toast.Viewport>
      </Toast.Portal>
    </Toast.Provider>
  )
}

function CustomToastButton() {
  const toastManager = Toast.useToastManager()

  function action() {
    const data: CustomToastData = { userId: "123" }
    toastManager.add({
      title: "Toast with custom data",
      data,
    })
  }

  return (
    <button type="button" onClick={action} class={styles.Button}>
      Create custom toast
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
            <Toast.Title class={styles.Title}>{toast.title}</Toast.Title>
            <Show
              when={isCustomToast(toast) && (toast as ToastObject<CustomToastData>).data}
              fallback={<Toast.Description class={styles.Description} />}
            >
              {(data) => (
                <Toast.Description class={styles.Description}>`data.userId` is {data().userId}</Toast.Description>
              )}
            </Show>
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
