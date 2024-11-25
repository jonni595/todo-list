import { useTheme } from "../hooks/useTheme";
import type { TaskListProps } from "../interface";
import Task from "./Task";

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  onChangeTask,
  onDeleteTask,
}) => {
  const { theme } = useTheme();

  return (
    <section className="main">
      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            style={{
              backgroundColor: `${theme === "light" ? "#181d29" : "#edf2f7"}`,
            }}
          >
            <Task task={task} onChange={onChangeTask} onDelete={onDeleteTask} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TaskList;
