import { useState } from "react";
import type { TasksProps } from "../interface";

const Task: React.FC<TasksProps> = ({task, onChangeTask, onDeleteTask}) => {
    const [isEditing, setIsEditing] = useState(false);
  return (
    <>
    </>
  )
}

export default Task