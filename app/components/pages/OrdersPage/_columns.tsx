import type { DataTableColumn } from "~/components/widgets/DataTable/types";
import type { Order } from "./_data";
import { Badge } from "~/components/ui/badge";

export const columns: Array<DataTableColumn<Order>> = [
  { accessorKey: "id", header: "ID", cell: (props) => props.row.id.toString() },
  {
    accessorKey: "customerName",
    header: "Customer Name",
    cell: (props) => props.row.customerName,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: (props) => <Badge>{props.row.status}</Badge>, //props.row.status,
  },
  {
    accessorKey: "items",
    header: "Items",
    cell: (props) => (
      <div className="space-x-1">
        {props.row.items.map((item) => (
          <Badge variant="outline" key={item}>
            {item}
          </Badge>
        ))}
      </div>
    ),
  },
  {
    accessorKey: "createdAt",
    header: "Created At",
    cell: (props) => props.row.createdAt,
  },
];
