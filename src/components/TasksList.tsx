import { type TaskListProps } from "../lib/definitions";
import Task from "./Task";

export default function TasksList({
  tasks,
  onChangeTasks,
  onDeleteTask,
}: TaskListProps) {
  return (
    <div className="w-full flex">
      <ul className="w-full">
        {tasks.map((task) => (
          <li key={task.id} className="border border-zinc-800">
            <Task
              task={task}
              onChangeTask={onChangeTasks}
              onDeleteTask={onDeleteTask}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
