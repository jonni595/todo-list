import type { TaskListProps } from "../interface";
import Task from "./Task";

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  onChangeTask,
  onDeleteTask,
}) => {
  return (
    <section className="main">
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <Task
              task={task}
              onChange={onChangeTask}
              onDelete={onDeleteTask}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TaskList;
