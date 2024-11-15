import Navbar from "./components/Navbar";
import TaskList from "./components/TaskList";
import Layout from "./layout/Layout";
import AddTask from "./components/AddTask";
import { useTask } from "./hooks/useTask";

const App = () => {
  const { tasks, handleAddTask, handleChangeTask, handleDeleteTask } =
    useTask();

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
