import { useState } from "react";
import Navbar from "./components/Navbar";
import TaskList from "./components/TaskList";
import Layout from "./layout/Layout";
import { todoList } from "./data";
import type { Tasks } from "./interface";
import AddTask from "./components/AddTask";

const App = () => {
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

  return (
    <Layout>
      <Navbar />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
      <AddTask onAddTask={handleAddTask} />
    </Layout>
  );
};

export default App;
