import DataTable from "~/components/widgets/DataTable";
import { orders } from "./_data";
import { columns } from "./_columns";

function OrdersPage() {
  return (
    <>
      <h1 className="text-3xl font-semibold mb-4">Orders</h1>
      <DataTable data={orders} columns={columns} />
    </>
  );
}

export default OrdersPage;
