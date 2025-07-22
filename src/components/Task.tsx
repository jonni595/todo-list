import { useState } from "react";
import { LucideSquareCheckBig } from "lucide-react";
import { Button } from "./ui/button";
import { DropdownActions } from "./DropDownActions";
import { type Status, type TaskProps, type Priority } from "../lib/definitions";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export default function Task({ task, onChangeTask, onDeleteTask }: TaskProps) {
  const [isEditing, setIsEditing] = useState(false);

  let content;
  if (isEditing) {
    content = (
      <>
        <input
          type="text"
          className="w-sm mr-3 px-2 rounded-sm border hover:border-violet-300"
          value={task.text}
          onChange={(e) => {
            onChangeTask({
              ...task,
              text: e.target.value,
            });
          }}
        />
        <Button onClick={() => setIsEditing(false)}>
          <LucideSquareCheckBig />
          Save
        </Button>
      </>
    );
  } else {
    content = (
      <>
        <p>{task.text}</p>
      </>
    );
  }

  return (
    <div className="w-full flex justify-between items-center px-2 py-3">
      <div className="flex w-3/5">{content}</div>
      <div className="flex justify-around items-center w-2/5">
        <Select
          value={task.status}
          onValueChange={(value) =>
            onChangeTask({ ...task, status: value as Status })
          }
        >
          <SelectTrigger className="w-[120px]">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="in progress">In Progress</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="done">Done</SelectItem>
          </SelectContent>
        </Select>
        {/* Priority */}
        <Select
          value={task.priority}
          onValueChange={(value) =>
            onChangeTask({ ...task, priority: value as Priority })
          }
        >
          <SelectTrigger className="w-[120px]">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Low">Low</SelectItem>
            <SelectItem value="Medium">Medium</SelectItem>
            <SelectItem value="High">High</SelectItem>
          </SelectContent>
        </Select>
        <DropdownActions
          taskId={task.id}
          onDeleteTask={onDeleteTask}
          setEditing={() => setIsEditing(true)}
        />
      </div>
    </div>
  );
}
