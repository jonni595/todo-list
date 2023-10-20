import { useState } from "react";
import { Modal, TaskList } from "./components";
import { useChangeInput, useShowMenu } from "./hooks";
import { getLimit } from "./utils/getLimit";

interface Tasks {
  id: number;
  name: string;
}

let nextID = 0;

const App = () => {
  const [tasks, setTasks] = useState<Tasks[]>([]);
  const { isModalOpen, toggleMenu } = useShowMenu();
  const { name, handleChangeName, clearInput } = useChangeInput();

  const handleClick = () => {
    if (!name) {
      toggleMenu();
      return;
    }

    const upperCaseName = name.charAt(0).toUpperCase() + name.slice(1);
    const value = getLimit(upperCaseName);

    setTasks([{ id: nextID++, name: value }, ...tasks]);
    clearInput();
  };

  const handleRemove = (id: number) => {
    setTasks(tasks.filter((artist) => artist.id !== id));
  };

  return (
    <>
      {isModalOpen && <Modal isOpen={isModalOpen} showModal={toggleMenu} />}
      <div className="container">
        <h1 className="container__title">Todos</h1>
        <div className="container__task">
          <input
            type="text"
            value={name}
            placeholder="create new task"
            onChange={handleChangeName}
          />

          <div className="container__list">
            <ul>
              {tasks.map(({ id, name }) => (
                <TaskList
                  key={id}
                  item={name}
                  onClick={() => handleRemove(id)}
                  text="Delete"
                />
              ))}
            </ul>
          </div>
        </div>
        <button type="button" onClick={handleClick}></button>
      </div>
    </>
  );
};

export default App;
