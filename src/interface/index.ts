export interface Tasks {
  id: `${string}-${string}-${string}-${string}-${string}`;
  text: string;
  done: boolean;
}

export interface LayoutProps {
  children: React.ReactNode;
}

export interface ThemeContextProps {
  children: React.ReactNode;
}

export interface TaskListProps {
  tasks: Tasks[];
  onChangeTask: (task: Tasks) => void;
  onDeleteTask: (id: string) => void;
}

export interface TasksProps {
  task: Tasks;
  onChange: (task: Tasks) => void;
  onDelete: (id: string) => void;
}

export interface AddTaskProps {
  onAddTask: (text: string) => void;
}