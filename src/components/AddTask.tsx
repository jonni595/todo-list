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
import type { TasksProps } from "@/lib/definitions";

type Priority = "Low" | "Medium" | "High";

export default function AddTask({
  onAddTask,
}: {
  onAddTask: (task: TasksProps) => void;
}) {
  const [isActive, setIsActive] = useState(false);
  const [task, setTask] = useState<TasksProps>({
    id: crypto.randomUUID(),
    text: "",
    priority: "Low",
    status: "pending",
  });

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
              onAddTask({ ...task, id: crypto.randomUUID() });
              setTask({
                id: crypto.randomUUID(),
                text: "",
                priority: "Low",
                status: "pending",
              });
            }}
          >
            Save Task
          </Button>
        </>
      ) : (
        <>
          <Button onClick={() => setIsActive(true)}>Add Tasks</Button>
        </>
      )}
    </div>
  );
}
