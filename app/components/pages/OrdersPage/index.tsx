import DataTable from "~/components/widgets/DataTable";
import { orders } from "./_data";
import { columns } from "./_columns";
import FilterSearchInput from "~/components/widgets/FilterSearchInput";
import useUpdateSearchParams from "~/common/hooks/useUpdateSearchParams";
import { useMemo } from "react";
import FilterSelect from "~/components/widgets/FilterSelect";
import { STATUS } from "~/common/constants/status";

const filters = [
  {
    label: "Id",
    value: "id",
  },
  {
    label: "Customer Name",
    value: "customerName",
  },
];

function OrdersPage() {
  const { searchParams } = useUpdateSearchParams();

  const filteredData = useMemo(() => {
    return orders.filter((order) => {
      return Object.entries(searchParams).every(([key, value]) => {
        return (
          order[key as keyof typeof order].toString().toLowerCase() ==
          value.toLowerCase()
        );
      });
    });
  }, [searchParams]);

  return (
    <>
      <div className="mb-4 space-y-4">
        <h1 className="text-xl font-semibold">Orders</h1>
        <div className="flex gap-4 flex-wrap">
          <FilterSearchInput
            className="w-xl"
            filters={filters}
            placeholder="Search orders"
          />
          <FilterSelect
            className="w-full md:w-32"
            filterKey="status"
            filters={Object.values(STATUS).map((status) => ({
              label: status,
              value: status.toLowerCase(),
            }))}
            placeholder="Filter by"
          />
        </div>
      </div>
      <DataTable data={filteredData} columns={columns} />
    </>
  );
}

export default OrdersPage;
