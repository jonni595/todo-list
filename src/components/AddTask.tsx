import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

type Priority = "Low" | "Medium" | "High";

interface Props {
  text: string;
  priority: Priority;
}

export default function AddTask({
  onAddTask,
}: {
  onAddTask: (task: Props) => void;
}) {
  const [isActive, setIsActive] = useState(false);
  const [task, setTask] = useState<Props>({ text: "", priority: "Low" });

  const { text, priority } = task;

  return (
    <div className="flex flex-col gap-2">
      {isActive ? (
        <>
          <Input
            placeholder="Task Name"
            value={text}
            onChange={(e) => setTask({ ...task, text: e.target.value })}
          />
          <Select
            value={priority}
            onValueChange={(value) => {
              setTask({ ...task, priority: value as Priority });
            }}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Priority</SelectLabel>
                <SelectItem value="Low">Low</SelectItem>
                <SelectItem value="Medium">Medium</SelectItem>
                <SelectItem value="High">High</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Button
            onClick={() => {
              setIsActive(false);
              onAddTask({ text, priority });
              setTask({ text: "", priority: "Low" });
            }}
          >
            Save Task
          </Button>
        </>
      ) : (
        <Button onClick={() => setIsActive(true)}>Add Tasks</Button>
      )}
    </div>
  );
}
