import { useEffect, useState } from "react";
import FilterTasks from "./components/filter-tasks";
import TasksList from "./components/TasksList";
import TitleTasks from "./components/title-tasks";
import type { Status, TasksProps, TaskValue } from "./lib/definitions";
import { filterItems } from "./lib/utils";

const initialTasks: TasksProps[] = [
  {
    id: crypto.randomUUID(),
    text: "We need to program the back-end THX pixel!",
    priority: "Medium",
    status: "Pending",
  },
];

export default function App() {
  const [tasks, setTasks] = useState<TasksProps[]>(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : initialTasks;
  });

  const [taskStatus, setTaskStatus] = useState<TaskValue>("All");
  const [filterText, setFilterText] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = (task: TasksProps) => {
    if (!task.text) return;
    const newTask = {
      id: crypto.randomUUID(),
      text: task.text,
      priority: task.priority,
      status: "Pending" as Status,
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

  const handleDeleteTask = (
    id: `${string}-${string}-${string}-${string}-${string}`
  ) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const filterTasks = taskStatus
    ? tasks.filter((t) => t.status === taskStatus || t.priority === taskStatus)
    : tasks;
  const filteredTasks = taskStatus === "All" ? tasks : filterTasks;

  const totalTasks = filteredTasks.length;

  return (
    <div className="max-w-7xl min-h-screen m-auto p-5 border border-l-zinc-800 border-r-zinc-800">
      <TitleTasks count={totalTasks} />
      <FilterTasks
        onAddTask={handleAddTask}
        onSelect={(value) => {
          setTaskStatus(value);
          console.log(value);
        }}
        query={filterText}
        onFilterTask={(value) => setFilterText(value)}
      />
      <TasksList
        tasks={filterItems(filteredTasks, filterText)}
        onChangeTasks={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
}
