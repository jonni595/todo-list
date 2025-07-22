import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { TaskValue } from "@/lib/definitions";

interface Props {
  placeholder: string;
  label: string;
  items: TaskValue[];
  onSelect: (value: TaskValue) => void;
}

export default function SelectStatus({
  placeholder,
  label,
  items,
  onSelect,
}: Props) {
  return (
    <Select onValueChange={(value) => onSelect(value as TaskValue)}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{label}</SelectLabel>
          <SelectItem value="All">All</SelectItem>
          {items.map((item) => (
            <SelectItem key={item} value={item}>
              {item}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
