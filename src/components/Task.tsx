import { useState } from "react";
import { IoPencil, IoSave, IoTrash } from "react-icons/io5";
import type { TasksProps } from "../interface";

const Task: React.FC<TasksProps> = ({ task, onChange, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);

  let icon = isEditing ? <IoSave /> : <IoPencil />;

  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <input
          value={task.text}
          onChange={(e) =>
            onChange({
              ...task,
              text: e.target.value,
            })
          }
        />
        <button
          className="btn-icon"
          title="Save"
          onClick={() => setIsEditing(false)}
        >
          {icon}
        </button>
      </>
    );
  } else {
    taskContent = (
      <>
        <p>{task.text}</p>
        <button
          className="btn-icon"
          title="Edit"
          onClick={() => setIsEditing(true)}
        >
          {icon}
        </button>
      </>
    );
  }

  return (
    <label className="task">
      <div className="task-left">
        <input
          type="checkbox"
          checked={task.done}
          onChange={(e) => onChange({ ...task, done: e.target.checked })}
        />
      </div>
      <div className="task-right">{taskContent}</div>
      <button
        className="button"
        title="Delete"
        onClick={() => onDelete(task.id)}
      >
        {<IoTrash />}
      </button>
    </label>
  );
};

export default Task;
