import { useState } from "react";
import Modal from "./components/Modal";
import useShowMenu from "./hooks/useShowMenu";
import useChangeInput from "./hooks/useChangeInput";
interface Todo {
  id: number;
  name: string;
}

let nextID = 0;

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const { isModalOpen, toggleMenu } = useShowMenu();
  const { name, handleChangeName, clearInput } = useChangeInput();

  const handleClick = () => {
    if (!name) {
      toggleMenu();
      return;
    }

    const upperCaseName = name.charAt(0).toUpperCase() + name.slice(1);
    setTodos([{ id: nextID++, name: upperCaseName }, ...todos]);
    clearInput();
  };

  const handleRemove = (id: number) => {
    setTodos(todos.filter((artist) => artist.id !== id));
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
              {todos.map(({ id, name }) => (
                <div className="items" key={id}>
                  <li>{name}</li>
                  <button onClick={() => handleRemove(id)}>Delete</button>
                </div>
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
