import * as Tabs from "@danielfrg/solid-ui/tabs"
import styles from "./index.module.css"

export function DemoTabsVertical() {
  return (
    <Tabs.Root defaultValue="account" orientation="vertical" class={styles.rootVertical}>
      <Tabs.List class={styles.listVertical}>
        <Tabs.Trigger value="account" class={styles.triggerVertical}>Account</Tabs.Trigger>
        <Tabs.Trigger value="password" class={styles.triggerVertical}>Password</Tabs.Trigger>
        <Tabs.Trigger value="settings" class={styles.triggerVertical}>Settings</Tabs.Trigger>
        <Tabs.Indicator class={styles.indicatorVertical} />
      </Tabs.List>
      <Tabs.Content value="account" class={styles.contentVertical}>
        <p>Manage your account details and preferences.</p>
      </Tabs.Content>
      <Tabs.Content value="password" class={styles.contentVertical}>
        <p>Change your password and security settings.</p>
      </Tabs.Content>
      <Tabs.Content value="settings" class={styles.contentVertical}>
        <p>Configure your application settings.</p>
      </Tabs.Content>
    </Tabs.Root>
  )
}
