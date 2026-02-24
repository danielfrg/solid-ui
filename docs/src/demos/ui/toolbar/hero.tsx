import type { JSX, ValidComponent } from "solid-js"
import * as Select from "@danielfrg/solid-ui/select"
import * as ToggleGroup from "@danielfrg/solid-ui/toggle-group"
import * as Toolbar from "@danielfrg/solid-ui/toolbar"
import styles from "./index.module.css"

const FONTS = ["Helvetica", "Arial"]

export function DemoToolbarHero() {
  return (
    <Toolbar.Root class={styles.toolbar}>
      <ToggleGroup.Root class={styles.group} aria-label="Alignment">
        <Toolbar.Button
          as={ToggleGroup.Item as ValidComponent}
          value="align-left"
          aria-label="Align left"
          class={styles.button}
        >
          Align Left
        </Toolbar.Button>
        <Toolbar.Button
          as={ToggleGroup.Item as ValidComponent}
          value="align-right"
          aria-label="Align right"
          class={styles.button}
        >
          Align Right
        </Toolbar.Button>
      </ToggleGroup.Root>

      <Toolbar.Separator class={styles.separator} />

      <Toolbar.Group class={styles.group} aria-label="Numerical format">
        <Toolbar.Button class={styles.button} aria-label="Format as currency">
          $
        </Toolbar.Button>
        <Toolbar.Button class={styles.button} aria-label="Format as percent">
          %
        </Toolbar.Button>
      </Toolbar.Group>

      <Toolbar.Separator class={styles.separator} />

      <Select.Root
        defaultValue="Helvetica"
        options={FONTS}
        itemComponent={(props) => (
          <Select.Item item={props.item} class={styles.item}>
            <Select.ItemIndicator class={styles.itemIndicator}>
              <CheckIcon class={styles.itemIndicatorIcon} />
            </Select.ItemIndicator>
            <Select.ItemLabel class={styles.itemText}>{props.item.rawValue}</Select.ItemLabel>
          </Select.Item>
        )}
      >
        <Toolbar.Button
          as={Select.Trigger as ValidComponent}
          class={`${styles.button} ${styles.select}`}
          aria-label="Font"
        >
          <Select.Value<string> class={styles.value}>{(state) => state.selectedOption()}</Select.Value>
          <Select.Icon class={styles.selectIcon}>
            <ChevronUpDownIcon />
          </Select.Icon>
        </Toolbar.Button>
        <Select.Portal>
          <Select.Content class={styles.popup}>
            <Select.Listbox class={styles.listbox} />
          </Select.Content>
        </Select.Portal>
      </Select.Root>

      <Toolbar.Separator class={styles.separator} />

      <Toolbar.Link class={styles.link} href="#">
        Edited 51m ago
      </Toolbar.Link>
    </Toolbar.Root>
  )
}

function ChevronUpDownIcon(props: JSX.SvgSVGAttributes<SVGSVGElement>) {
  return (
    <svg width="8" height="12" viewBox="0 0 8 12" fill="none" stroke="currentcolor" stroke-width="1.5" {...props}>
      <path d="M0.5 4.5L4 1.5L7.5 4.5" />
      <path d="M0.5 7.5L4 10.5L7.5 7.5" />
    </svg>
  )
}

function CheckIcon(props: JSX.SvgSVGAttributes<SVGSVGElement>) {
  return (
    <svg fill="currentcolor" width="10" height="10" viewBox="0 0 10 10" {...props}>
      <path d="M9.1603 1.12218C9.50684 1.34873 9.60427 1.81354 9.37792 2.16038L5.13603 8.66012C5.01614 8.8438 4.82192 8.96576 4.60451 8.99384C4.3871 9.02194 4.1683 8.95335 4.00574 8.80615L1.24664 6.30769C0.939709 6.02975 0.916013 5.55541 1.19372 5.24822C1.47142 4.94102 1.94536 4.91731 2.2523 5.19524L4.36085 7.10461L8.12299 1.33999C8.34934 0.993152 8.81376 0.895638 9.1603 1.12218Z" />
    </svg>
  )
}
