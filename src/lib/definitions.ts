export type Priority = "Low" | "Medium" | "High";
export type Status = "in progress" | "pending" | "done";

export interface TasksProps {
  id: `${string}-${string}-${string}-${string}-${string}`;
  text: string;
  priority: Priority;
  status: Status;
}

export interface TaskProps {
  task: TasksProps;
  onChangeTask: (task: TasksProps) => void;
  onDeleteTask: (
    id: `${string}-${string}-${string}-${string}-${string}`
  ) => void;
}

export interface TaskListProps {
  tasks: TasksProps[];
  onChangeTasks: (task: TasksProps) => void;
  onDeleteTask: (
    id: `${string}-${string}-${string}-${string}-${string}`
  ) => void;
}

export interface FilterTaskProps {
  onAddTask: (task: TasksProps) => void;
}
