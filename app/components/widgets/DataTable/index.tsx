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

interface Props<T extends Record<string, DataType>> {
  identifier?: keyof T;
  data: Array<T>;
  columns: DataTableColumn<T>[];
}

function DataTable<T extends Record<string, DataType>>({
  identifier = "id" as keyof T,
  data,
  columns,
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
          {data.map((row, index) => {
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
          })}
        </TableBody>
      </Table>
    </div>
  );
}

export default DataTable;
