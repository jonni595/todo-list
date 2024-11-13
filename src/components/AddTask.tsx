import { useState } from "react";
import type { AddTaskProps } from "../interface";

const AddTask: React.FC<AddTaskProps> = ({ onAddTask }) => {
  const [text, setText] = useState("");
  return (
    <div className="footer">
      <input
        placeholder="Write a task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          setText("");
          onAddTask(text);
        }}
      >
        Add
      </button>
    </div>
  );
};

export default AddTask;
