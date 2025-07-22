import { useState } from "react";
import FilterTasks from "./components/filter-tasks";
import TasksList from "./components/TasksList";
import TitleTasks from "./components/title-tasks";
import type { TasksProps, Status } from "./lib/definitions";

const initialTasks: TasksProps[] = [
  {
    id: crypto.randomUUID(),
    text: "We need to program the back-end THX pixel!",
    priority: "Medium",
    status: "pending",
  },
];

export default function App() {
  const [tasks, setTasks] = useState<TasksProps[]>(initialTasks);

  const handleAddTask = (task: TasksProps) => {
    const newTask = {
      id: crypto.randomUUID(),
      text: task.text,
      priority: task.priority,
      status: "pending" as Status,
    };
    setTasks([...tasks, newTask]);
  };

  const handleChangeTask = (task: TasksProps) => {
    const updatedTask = tasks.map((t) => {
      if (t.id === task.id) {
        return task;
      } else {
        return t;
      }
    });

    setTasks(updatedTask);
  };

  return (
    <div className="max-w-7xl min-h-screen m-auto p-5 border border-l-zinc-800 border-r-zinc-800">
      <TitleTasks count={5} />
      <FilterTasks onAddTask={handleAddTask} />
      <TasksList
        tasks={tasks}
        onChangeTasks={handleChangeTask}
        onDeleteTask={() => {}}
      />
    </div>
  );
}
