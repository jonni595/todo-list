import type { TaskListProps } from "../interface";

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  onChangeTask,
  onDeleteTask,
}) => {
  return (
    <section className="main">
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>// Tasks</li>
        ))}
      </ul>
    </section>
  );
};

export default TaskList;
