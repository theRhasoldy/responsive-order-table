import { useTheme } from "next-themes";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";

function ThemeModeSelect() {
  const { setTheme } = useTheme();

  return (
    <Select onValueChange={(value) => setTheme(value)}>
      <SelectTrigger>
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export default ThemeModeSelect;
