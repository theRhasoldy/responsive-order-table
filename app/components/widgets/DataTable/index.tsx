import type { Key } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import type { DataTableColumn, DataType } from "./types";
import { EmptyIcon } from "@phosphor-icons/react";

interface Props<T extends Record<string, DataType>> {
  identifier?: keyof T;
  data: Array<T>;
  columns: DataTableColumn<T>[];
  emptyMessage?: string;
}

function DataTable<T extends Record<string, DataType>>({
  identifier = "id" as keyof T,
  data,
  columns,
  emptyMessage = "No data found",
}: Props<T>) {
  return (
    <div className="rounded overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow>
            {columns.map((column) => (
              <TableHead key={column.accessorKey}>{column.header}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.length === 0 ? (
            <TableRow className="hover:bg-background!">
              <TableCell colSpan={columns.length} className="h-64 text-center">
                <div className="flex flex-col items-center gap-2 text-lg">
                  <EmptyIcon className="text-muted-foreground size-16" />
                  {emptyMessage}
                </div>
              </TableCell>
            </TableRow>
          ) : (
            data.map((row, index) => {
              const rowValue = row[identifier];
              const rowKey: Key =
                typeof rowValue === "string" || typeof rowValue === "number"
                  ? rowValue
                  : index;

              return (
                <TableRow key={rowKey}>
                  {columns.map((column) => (
                    <TableCell key={column.accessorKey}>
                      {column.cell({ row })}
                    </TableCell>
                  ))}
                </TableRow>
              );
            })
          )}
        </TableBody>
      </Table>
    </div>
  );
}

export default DataTable;
