import { XIcon } from "@phosphor-icons/react";
import useUpdateSearchParams from "~/common/hooks/useUpdateSearchParams";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";

interface Props {
  labels?: Record<string, string>;
  supportedKeys?: string[];
}

function FiltersList({ labels, supportedKeys }: Props) {
  const { searchParams, updateSearchParams } = useUpdateSearchParams();

  const entries = Object.entries(searchParams).filter(([key]) =>
    supportedKeys?.includes(key),
  );

  if (entries.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-wrap gap-2">
      {entries.map(([key, value]) => {
        const label = labels?.[key] || key;

        return (
          <Badge
            key={key}
            variant="outline"
            className="gap-1 pl-2 pr-1 py-1 h-7"
          >
            <span className="text-muted-foreground font-medium">{label}:</span>
            <span>{value}</span>
            <Button
              size="icon-xs"
              variant="ghost"
              className="size-4 rounded-full"
              onClick={() => updateSearchParams({ [key]: "" })}
              aria-label={`Remove ${label} filter`}
            >
              <XIcon className="size-3" />
            </Button>
          </Badge>
        );
      })}
    </div>
  );
}

export default FiltersList;
