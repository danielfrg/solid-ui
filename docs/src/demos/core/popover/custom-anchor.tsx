import * as Popover from "@danielfrg/solid-ui-core/popover"
import styles from "./index.module.css"

export function DemoPopoverCustomAnchor() {
  return (
    <Popover.Root>
      <Popover.Anchor class={styles.anchor}>
        <span>Hover over this region or </span>
        <Popover.Trigger class={styles.inlineTrigger}>click here</Popover.Trigger>
        <span> to open the popover.</span>
      </Popover.Anchor>
      <Popover.Portal>
        <Popover.Content class={styles.content}>
          <Popover.Arrow />
          <Popover.Title class={styles.title}>Custom anchor</Popover.Title>
          <Popover.Description class={styles.description}>
            The popover is anchored to the entire region, not just the trigger.
          </Popover.Description>
          <div class={styles.actions}>
            <Popover.CloseButton class={styles.button}>Close</Popover.CloseButton>
          </div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}
