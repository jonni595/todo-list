import { useState } from "react";
import { todoList } from "../data";
import type { Tasks } from "../interface";

export const useTask = () => {
  const [tasks, setTasks] = useState<Tasks[]>(todoList);

  const handleAddTask = (text: string) => {
    if (!text) return;
    setTasks([...tasks, { id: crypto.randomUUID(), text, done: false }]);
  };

  const handleChangeTask = (task: Tasks) => {
    setTasks(tasks.map((t) => (t.id === task.id ? task : t)));
  };

  const handleDeleteTask = (id: string) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return {
    tasks,
    setTasks,
    handleAddTask,
    handleChangeTask,
    handleDeleteTask,
  };
};
