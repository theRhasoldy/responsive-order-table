import type { ReactNode } from "react";

type DataType = string | number | string[] | number[];

interface DataTableColumn<TData> {
  accessorKey: string;
  header: string;
  cell: (props: { row: TData }) => ReactNode;
}

export type { DataType, DataTableColumn };
