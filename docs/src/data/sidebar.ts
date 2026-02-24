export type SidebarItem = {
  label: string
  slug?: string
  link?: string
}

export type SidebarSection = {
  title: string
  items: SidebarItem[]
}

export const sidebar: SidebarSection[] = [
  {
    title: "Overview",
    items: [
      { label: "Introduction", slug: "index" },
      { label: "Examples", slug: "examples" },
      { label: "Theme: Nova", slug: "nova" },
      { label: "Acknowledgements", slug: "acknowledgements" },
    ],
  },
  {
    title: "Components",
    items: [
      { label: "Accordion", slug: "ui/accordion" },
      { label: "Alert Dialog", slug: "ui/alert-dialog" },
      { label: "Autocomplete", slug: "ui/autocomplete" },
      { label: "Avatar", slug: "ui/avatar" },
      { label: "Button", slug: "ui/button" },
      { label: "Checkbox", slug: "ui/checkbox" },
      { label: "Checkbox Group", slug: "ui/checkbox-group" },
      { label: "Collapsible", slug: "ui/collapsible" },
      { label: "Combobox", slug: "ui/combobox" },
      { label: "Context Menu", slug: "ui/context-menu" },
      { label: "Dialog", slug: "ui/dialog" },
      { label: "Drawer", slug: "ui/drawer" },
      { label: "Field", slug: "ui/field" },
      { label: "Fieldset", slug: "ui/fieldset" },
      { label: "Form", slug: "ui/form" },
      { label: "Input", slug: "ui/input" },
      { label: "Menu", slug: "ui/menu" },
      { label: "Menubar", slug: "ui/menubar" },
      { label: "Navigation Menu", slug: "ui/navigation-menu" },
      { label: "Number Field", slug: "ui/number-field" },
      { label: "Meter", slug: "ui/meter" },
      { label: "Popover", slug: "ui/popover" },
      { label: "Preview Card", slug: "ui/preview-card" },
      { label: "Progress", slug: "ui/progress" },
      { label: "Radio Group", slug: "ui/radio-group" },
      { label: "Scroll Area", slug: "ui/scroll-area" },
      { label: "Select", slug: "ui/select" },
      { label: "Separator", slug: "ui/separator" },
      { label: "Slider", slug: "ui/slider" },
      { label: "Switch", slug: "ui/switch" },
      { label: "Tabs", slug: "ui/tabs" },
      { label: "Toast", slug: "ui/toast" },
      { label: "Toggle", slug: "ui/toggle-button" },
      { label: "Toggle Group", slug: "ui/toggle-group" },
      { label: "Tooltip", slug: "ui/tooltip" },
    ],
  },
]
