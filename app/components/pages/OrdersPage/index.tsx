import { useMemo } from "react";
import DataTable from "~/components/widgets/DataTable";
import { orders, type Order } from "./_data";
import { columns } from "./_columns";
import FilterSearchInput from "~/components/widgets/FilterSearchInput";
import useUpdateSearchParams from "~/common/hooks/useUpdateSearchParams";
import FilterSelect from "~/components/widgets/FilterSelect";
import { STATUS } from "~/common/constants/status";
import FiltersList from "~/components/widgets/FiltersList";
import {
  getFilterLabels,
  getSearchFilters,
  getSupportedFilterKeys,
  type FilterConfig,
} from "~/lib/filters";

const FILTERS_CONFIG = {
  id: { label: "Id" },
  customerName: { label: "Customer Name" },
  status: { label: "Status" },
} as const satisfies FilterConfig;

const DATE_FILTERS = [
  {
    label: "Ascending",
    value: "asc",
  },
  {
    label: "Descending",
    value: "desc",
  },
];

const SEARCH_FILTERS = getSearchFilters(FILTERS_CONFIG);
const FILTER_LABELS = getFilterLabels(FILTERS_CONFIG);
const SUPPORTED_FILTER_KEYS = getSupportedFilterKeys(FILTERS_CONFIG);

function OrdersPage() {
  const { searchParams } = useUpdateSearchParams();

  const filteredData = useMemo(() => {
    return orders
      .filter((order) => {
        return Object.entries(searchParams).every(([key, value]) => {
          if (!(SUPPORTED_FILTER_KEYS as string[]).includes(key)) {
            return true;
          }

          const orderValue = order[key as keyof Order];

          if (orderValue === undefined || orderValue === null) {
            return false;
          }

          const normalizedValue = value.toLowerCase();
          const normalizedOrderValue = orderValue.toString().toLowerCase();

          return normalizedOrderValue.includes(normalizedValue);
        });
      })
      .sort((a, b) => {
        const aDate = new Date(a.createdAt);
        const bDate = new Date(b.createdAt);
        return searchParams.createdAt === "desc"
          ? bDate.getTime() - aDate.getTime()
          : aDate.getTime() - bDate.getTime();
      });
  }, [searchParams]);

  return (
    <>
      <div className="mb-4 space-y-4">
        <h1 className="text-xl font-semibold">Orders</h1>
        <div className="w-full flex justify-between items-center">
          <div className="flex gap-4 flex-wrap">
            <FilterSearchInput
              className="w-xl"
              filters={SEARCH_FILTERS}
              placeholder="Search orders"
            />
            <FilterSelect
              clearOnSelect
              resetValue="all"
              className="w-full md:w-32"
              filterKey="status"
              filters={["All", ...Object.values(STATUS)].map((status) => ({
                label: status,
                value: status.toLowerCase(),
              }))}
              placeholder="Filter by"
            />
          </div>
          <FilterSelect
            className="w-full md:w-32"
            filterKey="createdAt"
            filters={DATE_FILTERS}
            placeholder="Filter by"
          />
        </div>
        <div className="min-h-6">
          <FiltersList
            supportedKeys={SUPPORTED_FILTER_KEYS}
            labels={FILTER_LABELS}
          />
        </div>
      </div>
      <DataTable
        data={filteredData}
        columns={columns}
        emptyMessage="No orders found"
      />
    </>
  );
}

export default OrdersPage;
