import { useState } from "react";
import { TasksProps, initialTasks } from "./model";
import AddTask from "./components/AddTask";
import { TaskList } from "./components";

const App = () => {
  const [tasks, setTasks] = useState(initialTasks);

  const handleAddTask = (text: string) => {
    if (!text || text.length < 5) {
      return alert("complete the field");
    }
    setTasks([...tasks, { id: crypto.randomUUID(), text, done: false }]);
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
    <div className="container">
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
};

export default App;
