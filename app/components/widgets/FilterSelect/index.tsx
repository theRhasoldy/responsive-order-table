import useUpdateSearchParams from "~/common/hooks/useUpdateSearchParams";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";

interface Props {
  placeholder?: string;
  filterKey: string;
  resetValue?: string;
  filters?: { label: string; value: string }[];
  className?: string;
  clearOnSelect?: boolean;
}

function FilterSelect({
  filters,
  resetValue,
  placeholder,
  filterKey,
  className,
  clearOnSelect = false,
}: Props) {
  const { searchParams, updateSearchParams } = useUpdateSearchParams();

  const value = clearOnSelect ? "" : searchParams[filterKey] || "";

  return (
    <Select
      value={value}
      onValueChange={(val) => {
        if (val === resetValue) {
          updateSearchParams({ [filterKey]: "" });
        } else {
          updateSearchParams({ [filterKey]: val });
        }
      }}
    >
      <SelectTrigger className={className}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {filters?.map((filter) => (
          <SelectItem key={filter.value} value={filter.value}>
            {filter.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

export default FilterSelect;
