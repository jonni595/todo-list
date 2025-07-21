import { Input } from "@/components/ui/input";
import SelectStatus from "./select-status";
import AddTask from "./AddTask";

export default function FilterTasks() {
  return (
    <div className="flex justify-between">
      <div className="flex space-x-2 w-96">
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
      <AddTask onAddTask={() => {}} />
    </div>
  );
}
