import { useState } from "react";

interface AddTaskProps {
  onAddTask: (text: string) => void;
}

const AddTask: React.FC<AddTaskProps> = ({ onAddTask }) => {
  const [text, setText] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <section className="container__tasks">
      <h1>Todo</h1>
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
        <span className="button-text">+</span>
      </button>
    </section>
  );
};

export default AddTask;
