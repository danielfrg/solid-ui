import * as Toast from "@danielfrg/solid-ui-core/toast"
import styles from "./index.module.css"

export function DemoToastMultipleRegions() {
  return (
    <>
      <div class={styles.buttonRow}>
        <button
          class={styles.trigger}
          onClick={() => {
            Toast.toaster.show((props) => (
              <Toast.Root toastId={props.toastId} class={styles.toast}>
                <div class={styles.content}>
                  <Toast.Title class={styles.title}>Default region</Toast.Title>
                  <Toast.Description class={styles.description}>Shown in the bottom-right.</Toast.Description>
                </div>
                <Toast.CloseButton
                  class={styles.closeButton}
                  onPointerDown={(e: PointerEvent) => e.stopPropagation()}
                >
                  <CloseIcon />
                </Toast.CloseButton>
                <Toast.ProgressTrack class={styles.progressTrack}>
                  <Toast.ProgressFill class={styles.progressFill} />
                </Toast.ProgressTrack>
              </Toast.Root>
            ))
          }}
        >
          Default region
        </button>

        <button
          class={styles.trigger}
          onClick={() => {
            Toast.toaster.show(
              (props) => (
                <Toast.Root toastId={props.toastId} class={styles.toast}>
                  <div class={styles.content}>
                    <Toast.Title class={styles.title}>Top region</Toast.Title>
                    <Toast.Description class={styles.description}>Shown in the top-center.</Toast.Description>
                  </div>
                  <Toast.CloseButton
                    class={styles.closeButton}
                    onPointerDown={(e: PointerEvent) => e.stopPropagation()}
                  >
                    <CloseIcon />
                  </Toast.CloseButton>
                  <Toast.ProgressTrack class={styles.progressTrack}>
                    <Toast.ProgressFill class={styles.progressFill} />
                  </Toast.ProgressTrack>
                </Toast.Root>
              ),
              { region: "top-region" },
            )
          }}
        >
          Top region
        </button>
      </div>

      {/* Default bottom-right region */}
      <Toast.Region limit={5} swipeDirection="right">
        <Toast.List class={styles.list} />
      </Toast.Region>

      {/* Named top-center region */}
      <Toast.Region regionId="top-region" limit={5} swipeDirection="up">
        <Toast.List class={styles.listTop} />
      </Toast.Region>
    </>
  )
}

function CloseIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path
        d="M11 3L3 11M3 3L11 11"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}
