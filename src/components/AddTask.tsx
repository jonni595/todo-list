import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import type { Priority, TasksProps } from "@/lib/definitions";

export default function AddTask({
  onAddTask,
}: {
  onAddTask: (task: TasksProps) => void;
}) {
  const [isActive, setIsActive] = useState(true);
  const [task, setTask] = useState<TasksProps>({
    id: crypto.randomUUID(),
    text: "",
    priority: "Low",
    status: "Pending",
  });

  const { text, priority } = task;

  return (
    <div className="flex flex-col gap-2">
      {isActive ? (
        <>
          <Dialog>
            <form>
              <DialogTrigger asChild>
                <Button variant="default">Add Tasks</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[400px]">
                <DialogHeader>
                  <DialogTitle>Task</DialogTitle>
                  <DialogDescription>Save your task details</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4">
                  <div className="grid gap-3">
                    <Input
                      placeholder="Task Name"
                      value={text}
                      onChange={(e) =>
                        setTask({ ...task, text: e.target.value })
                      }
                    />
                    <Select
                      value={priority}
                      onValueChange={(value) => {
                        setTask({ ...task, priority: value as Priority });
                      }}
                    >
                      <SelectTrigger className="w-full">
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
                  </div>
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DialogClose>
                  <Button
                    onClick={() => {
                      setIsActive(false);
                      onAddTask({ ...task, id: crypto.randomUUID() });
                      setTask({
                        id: crypto.randomUUID(),
                        text: "",
                        priority: "Low",
                        status: "Pending",
                      });
                    }}
                  >
                    Save Task
                  </Button>
                </DialogFooter>
              </DialogContent>
            </form>
          </Dialog>
        </>
      ) : (
        <>
          <Button onClick={() => setIsActive(true)}>Add Tasks</Button>
        </>
      )}
    </div>
  );
}
