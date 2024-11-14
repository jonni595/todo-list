import { useState } from "react";
import { IoAddCircle } from "react-icons/io5";
import type { AddTaskProps } from "../interface";

const AddTask: React.FC<AddTaskProps> = ({ onAddTask }) => {
  const [text, setText] = useState("");
  return (
    <div className="footer">
      <input
        className="input-add-task"
        placeholder="Write a task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        className="btn-add-task"
        title="Add Task"
        onClick={() => {
          setText("");
          onAddTask(text);
        }}
      >
        <IoAddCircle />
      </button>
    </div>
  );
};

export default AddTask;
