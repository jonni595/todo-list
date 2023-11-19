import { useState } from "react";
import { TasksProps, initialTasks } from "./model";
import AddTask from "./components/AddTask";
import { TaskList } from "./components";
import TimedMessage from "./components/TimedMessage";

const App = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [error, setError] = useState<null | string>(null);

  const handleAddTask = (text: string) => {
    if (!text) {
      setError(null);
      setTimeout(() => setError("Please enter a task"), 0);
    } else {
      setTasks([...tasks, { id: crypto.randomUUID(), text, done: false }]);
      setError(null);
    }
  };

  const handleChangeTask = (task: TasksProps) => {
    setTasks(
      tasks.map((t) => {
        if (t.id === task.id) {
          return task;
        } else {
          return t;
        }
      })
    );
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
