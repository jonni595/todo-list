import { useEffect, useState } from "react";
import { TasksProps } from "./model";
import AddTask from "./components/AddTask";
import { TaskList } from "./components";
import TimedMessage from "./components/TimedMessage";

const App = () => {
  const [tasks, setTasks] = useState<TasksProps[]>([]);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = (text: string) => {
    let textCapitalized =
      text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    if (!text) {
      setError(null);
      setTimeout(() => setError("Please enter a task"), 0);
    } else {
      setTasks([
        ...tasks,
        { id: crypto.randomUUID(), text: textCapitalized, done: false },
      ]);
      setError(null);
    }
  };

  const handleChangeTask = (task: TasksProps) => {
    setTasks(tasks.map((t) => (t.id === task.id ? task : t)));
  };

  const handleDeleteTask = (taskId: string) => {
    setTasks(tasks.filter((t) => t.id !== taskId));
  };

  return (
    <main className="container">
      <AddTask onAddTask={handleAddTask} />
      {error !== null && <TimedMessage message={error} />}
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </main>
  );
};

export default App;
