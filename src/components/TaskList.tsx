import { TasksProps } from "../model";
import Task from "./Task";

interface Task {
  tasks: TasksProps[];
  onChangeTask: (task: TasksProps) => void;
  onDeleteTask: (id: string) => void;
}

const TaskList: React.FC<Task> = ({ tasks, onChangeTask, onDeleteTask }) => {
  return (
    <section className="container__todo-list">
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <Task task={task} onChange={onChangeTask} onDelete={onDeleteTask} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export { TaskList };
