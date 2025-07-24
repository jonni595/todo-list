import { Input } from "@/components/ui/input";
import SelectStatus from "./select-status";
import AddTask from "./AddTask";
import type { FilterTaskProps } from "@/lib/definitions";

export default function FilterTasks({
  onAddTask,
  onSelect,
  query = "",
  onFilterTask,
}: FilterTaskProps) {
  return (
    <div className="flex justify-between mb-5">
      <div className="flex space-x-2 w-sm sm:w-md">
        <Input
          placeholder="Filter tasks..."
          value={query}
          onChange={(e) => onFilterTask(e.target.value)}
        />
        <SelectStatus
          placeholder="Status"
          label="Status"
          items={["In Progress", "Pending", "Done"]}
          onSelect={onSelect}
        />
        <SelectStatus
          placeholder="Priority"
          label="Priority"
          items={["Low", "Medium", "High"]}
          onSelect={onSelect}
        />
      </div>
      <AddTask onAddTask={onAddTask} />
    </div>
  );
}
