import type { Component, ComponentProps, JSX } from "solid-js"
import { splitProps } from "solid-js"
import { cn } from "@danielfrg/solid-ui/utils"

type TableProps = ComponentProps<"table"> & { class?: string; children?: JSX.Element }

const Table: Component<TableProps> = (props) => {
  const [local, others] = splitProps(props, ["class"])
  return (
    <div data-slot="table-container" class="relative w-full overflow-x-auto">
      <table data-slot="table" class={cn("w-full caption-bottom text-sm", local.class)} {...others} />
    </div>
  )
}

type TableHeaderProps = ComponentProps<"thead"> & { class?: string; children?: JSX.Element }

const TableHeader: Component<TableHeaderProps> = (props) => {
  const [local, others] = splitProps(props, ["class"])
  return <thead data-slot="table-header" class={cn("[&_tr]:border-b", local.class)} {...others} />
}

type TableBodyProps = ComponentProps<"tbody"> & { class?: string; children?: JSX.Element }

const TableBody: Component<TableBodyProps> = (props) => {
  const [local, others] = splitProps(props, ["class"])
  return <tbody data-slot="table-body" class={cn("[&_tr:last-child]:border-0", local.class)} {...others} />
}

type TableFooterProps = ComponentProps<"tfoot"> & { class?: string; children?: JSX.Element }

const TableFooter: Component<TableFooterProps> = (props) => {
  const [local, others] = splitProps(props, ["class"])
  return (
    <tfoot
      data-slot="table-footer"
      class={cn("bg-muted/50 border-t font-medium [&>tr]:last:border-b-0", local.class)}
      {...others}
    />
  )
}

type TableRowProps = ComponentProps<"tr"> & { class?: string; children?: JSX.Element }

const TableRow: Component<TableRowProps> = (props) => {
  const [local, others] = splitProps(props, ["class"])
  return (
    <tr
      data-slot="table-row"
      class={cn("hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors", local.class)}
      {...others}
    />
  )
}

type TableHeadProps = ComponentProps<"th"> & { class?: string; children?: JSX.Element }

const TableHead: Component<TableHeadProps> = (props) => {
  const [local, others] = splitProps(props, ["class"])
  return (
    <th
      data-slot="table-head"
      class={cn(
        "text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        local.class,
      )}
      {...others}
    />
  )
}

type TableCellProps = ComponentProps<"td"> & { class?: string; children?: JSX.Element }

const TableCell: Component<TableCellProps> = (props) => {
  const [local, others] = splitProps(props, ["class"])
  return (
    <td
      data-slot="table-cell"
      class={cn(
        "p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        local.class,
      )}
      {...others}
    />
  )
}

type TableCaptionProps = ComponentProps<"caption"> & { class?: string; children?: JSX.Element }

const TableCaption: Component<TableCaptionProps> = (props) => {
  const [local, others] = splitProps(props, ["class"])
  return <caption data-slot="table-caption" class={cn("text-muted-foreground mt-4 text-sm", local.class)} {...others} />
}

export { Table, TableHeader, TableBody, TableFooter, TableHead, TableRow, TableCell, TableCaption }
export type {
  TableProps,
  TableHeaderProps,
  TableBodyProps,
  TableFooterProps,
  TableHeadProps,
  TableRowProps,
  TableCellProps,
  TableCaptionProps,
}
