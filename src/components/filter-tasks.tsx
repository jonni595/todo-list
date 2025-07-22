import { Input } from "@/components/ui/input";
import SelectStatus from "./select-status";
import AddTask from "./AddTask";
import type { FilterTaskProps } from "@/lib/definitions";

export default function FilterTasks({ onAddTask }: FilterTaskProps) {
  return (
    <div className="flex justify-between mb-5">
      <div className="flex space-x-2 w-md border">
        <Input placeholder="Filter tasks..." />
        <SelectStatus
          placeholder="Status"
          label="Status"
          items={["In Progress", "Pending", "Done"]}
        />
        <SelectStatus
          placeholder="Priority"
          label="Priority"
          items={["Low", "Medium", "High"]}
        />
      </div>
      <AddTask onAddTask={onAddTask} />
    </div>
  );
}
