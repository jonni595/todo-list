import { useState } from "react";
import { IoPencil, IoTrash, IoSaveSharp } from "react-icons/io5";
import { TasksProps } from "../model";

interface TaskProps {
  task: TasksProps;
  onChange: (task: TasksProps) => void;
  onDelete: (id: string) => void;
}

const Task: React.FC<TaskProps> = ({ task, onChange, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="task">
      <input
        type="checkbox"
        checked={task.done}
        onChange={(e) => {
          onChange({
            ...task,
            done: e.target.checked,
          });
        }}
      />
      {isEditing ? (
        <>
          <input
            type="text"
            value={task.text}
            onChange={(e) => {
              onChange({
                ...task,
                text: e.target.value,
              });
            }}
          />
          <button onClick={() => setIsEditing(false)}>
            <IoSaveSharp />
          </button>
        </>
      ) : (
        <>
          <p>{task.text}</p>
          <button onClick={() => setIsEditing(true)}>
            <IoPencil />
          </button>
          <button onClick={() => onDelete(task.id)}>
            <IoTrash />
          </button>
        </>
      )}
    </div>
  );
};

export default Task;
