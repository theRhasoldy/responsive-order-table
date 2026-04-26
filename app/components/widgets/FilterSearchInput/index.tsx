import { MagnifyingGlassIcon } from "@phosphor-icons/react";
import { useState } from "react";
import useUpdateSearchParams from "~/common/hooks/useUpdateSearchParams";
import {
  InputGroup,
  InputGroupButton,
  InputGroupInput,
  InputGroupSelect,
} from "~/components/ui/input-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectValue,
} from "~/components/ui/select";

interface Props {
  placeholder?: string;
  filters?: { label: string; value: string }[];
  className?: string;
}

function FilterSearchInput({ filters, placeholder, className }: Props) {
  const [selectedFilter, setSelectedFilter] = useState("id");
  const { updateSearchParams } = useUpdateSearchParams();

  function handleSubmit(e: React.ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.target);
    updateSearchParams({
      [selectedFilter]: formData.get("value")?.toString() || "",
    });

    e.target.reset();
  }

  return (
    <form className={className} onSubmit={handleSubmit}>
      <InputGroup>
        <InputGroupButton type="submit">
          <MagnifyingGlassIcon />
          <span className="sr-only">Search</span>
        </InputGroupButton>
        <InputGroupInput name="value" placeholder={placeholder} />
        <Select value={selectedFilter} onValueChange={setSelectedFilter}>
          <InputGroupSelect>
            <SelectValue placeholder="Filter by" />
            <SelectContent>
              {filters?.map((filter) => (
                <SelectItem key={filter.value} value={filter.value}>
                  {filter.label}
                </SelectItem>
              ))}
            </SelectContent>
          </InputGroupSelect>
        </Select>
      </InputGroup>
    </form>
  );
}

export default FilterSearchInput;
