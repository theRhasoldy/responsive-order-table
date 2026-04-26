import useUpdateSearchParams from "~/common/hooks/useUpdateSearchParams";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { cn } from "~/lib/utils";

interface Props {
  placeholder?: string;
  filterKey: string;
  filters?: { label: string; value: string }[];
  className?: string;
}

function FilterSelect({ filters, placeholder, filterKey, className }: Props) {
  const { updateSearchParams } = useUpdateSearchParams();

  return (
    <Select
      onValueChange={(value) => updateSearchParams({ [filterKey]: value })}
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
