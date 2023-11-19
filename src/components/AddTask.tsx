import { useState } from "react";
import { IoAdd } from "react-icons/io5";

interface AddTaskProps {
  onAddTask: (text: string) => void;
}

const AddTask: React.FC<AddTaskProps> = ({ onAddTask }) => {
  const [text, setText] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <>
      <h1>Todo</h1>
      <section className="container__input">
        <input
          value={text}
          placeholder="create new task"
          onChange={handleChange}
        />
        <button
          onClick={() => {
            setText("");
            onAddTask(text);
          }}
        >
          <IoAdd />
        </button>
      </section>
    </>
  );
};

export default AddTask;
