import { Input } from "@/components/ui/input";
import SelectStatus from "./select-status";

export default function FilterTasks() {
  return (
    <div className="w-96 space-x-2 flex">
      <Input placeholder="Filter tasks..." />
      <SelectStatus
        placeholder="Status"
        label="Status"
        items={["In Progress", "Pending", "Done"]}
      />
      <SelectStatus
        placeholder="Priority"
        label="Priority"
        items={["low", "medium", "high"]}
      />
    </div>
  );
}
