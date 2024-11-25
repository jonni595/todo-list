import Navbar from "./components/Navbar";
import TaskList from "./components/TaskList";
import Layout from "./layout/Layout";
import AddTask from "./components/AddTask";
import { useTask } from "./hooks/useTask";
import { useEffect } from "react";

const App = () => {
  const { tasks, setTasks, handleAddTask, handleChangeTask, handleDeleteTask } =
    useTask();

  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

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
