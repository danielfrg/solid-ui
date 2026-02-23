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
      { label: "Acknowledgements", slug: "acknowledgements" },
    ],
  },
  {
    title: "UI Components",
    items: [
      { label: "Accordion", slug: "ui/accordion" },
      { label: "Alert", slug: "ui/alert" },
      { label: "Alert Dialog", slug: "ui/alert-dialog" },
      { label: "Avatar", slug: "ui/avatar" },
      { label: "Badge", slug: "ui/badge" },
      { label: "Button", slug: "ui/button" },
      { label: "Card", slug: "ui/card" },
      { label: "Checkbox", slug: "ui/checkbox" },
      { label: "Collapsible", slug: "ui/collapsible" },
      { label: "Context Menu", slug: "ui/context-menu" },
      { label: "Dialog", slug: "ui/dialog" },
      { label: "Dropdown Menu", slug: "ui/dropdown-menu" },
      { label: "Input", slug: "ui/input" },
      { label: "Popover", slug: "ui/popover" },
      { label: "Progress", slug: "ui/progress" },
      { label: "Radio Group", slug: "ui/radio-group" },
      { label: "Separator", slug: "ui/separator" },
      { label: "Skeleton", slug: "ui/skeleton" },
      { label: "Slider", slug: "ui/slider" },
      { label: "Switch", slug: "ui/switch" },
      { label: "Table", slug: "ui/table" },
      { label: "Tabs", slug: "ui/tabs" },
      { label: "Toggle", slug: "ui/toggle" },
      { label: "Toggle Group", slug: "ui/toggle-group" },
      { label: "Tooltip", slug: "ui/tooltip" },
    ],
  },
  {
    title: "Core Components",
    items: [
      { label: "Accordion", slug: "core/accordion" },
      { label: "Alert Dialog", slug: "core/alert-dialog" },
      { label: "Autocomplete", slug: "core/autocomplete" },
      { label: "Avatar", slug: "core/avatar" },
      { label: "Button", slug: "core/button" },
      { label: "Checkbox", slug: "core/checkbox" },
      { label: "Checkbox Group", slug: "core/checkbox-group" },
      { label: "Collapsible", slug: "core/collapsible" },
      { label: "Combobox", slug: "core/combobox" },
      { label: "Context Menu", slug: "core/context-menu" },
      { label: "Dialog", slug: "core/dialog" },
      { label: "Drawer", slug: "core/drawer" },
      { label: "Field", slug: "core/field" },
      { label: "Fieldset", slug: "core/fieldset" },
      { label: "Form", slug: "core/form" },
      { label: "Input", slug: "core/input" },
      { label: "Menu", slug: "core/menu" },
      { label: "Menubar", slug: "core/menubar" },
      { label: "Navigation Menu", slug: "core/navigation-menu" },
      { label: "Number Field", slug: "core/number-field" },
      { label: "Meter", slug: "core/meter" },
      { label: "Popover", slug: "core/popover" },
      { label: "Preview Card", slug: "core/preview-card" },
      { label: "Progress", slug: "core/progress" },
      { label: "RadioGroup", slug: "core/radio-group" },
      { label: "Scroll Area", slug: "core/scroll-area" },
      { label: "Select", slug: "core/select" },
      { label: "Separator", slug: "core/separator" },
      { label: "Slider", slug: "core/slider" },
      { label: "Switch", slug: "core/switch" },
      { label: "Tabs", slug: "core/tabs" },
      { label: "Toast", slug: "core/toast" },
      { label: "Toggle", slug: "core/toggle-button" },
      { label: "ToggleGroup", slug: "core/toggle-group" },
      { label: "Tooltip", slug: "core/tooltip" },
    ],
  },
]
