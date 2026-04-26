export interface FilterItemConfig {
  label: string;
}

export type FilterConfig = Record<string, FilterItemConfig>;

export function getSearchFilters<T extends FilterConfig>(config: T) {
  return Object.entries(config).map(([key, value]) => ({
    label: value.label,
    value: key,
  }));
}

export function getFilterLabels<T extends FilterConfig>(config: T) {
  return Object.fromEntries(
    Object.entries(config).map(([key, value]) => [key, value.label]),
  ) as Record<keyof T, string>;
}

export function getSupportedFilterKeys<T extends FilterConfig>(config: T) {
  return Object.keys(config) as Array<keyof T>;
}
