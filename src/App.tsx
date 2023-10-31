import { useState } from "react";
import { initialTasks } from "./model";
import AddTask from "./components/AddTask";

const App = () => {
  const [tasks, setTasks] = useState(initialTasks);

  const handleAddTask = (text: string) => {
    setTasks([...tasks, { id: crypto.randomUUID(), text, done: false }]);
  };

  return (
    <div className="container">
      <AddTask onAddTask={handleAddTask} />
      <section className="container__todo-list">
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>{task.text}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default App;
