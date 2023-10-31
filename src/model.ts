export interface TasksProps {
  id: `${string}-${string}-${string}-${string}-${string}`;
  text: string;
  done: boolean;
}

export const initialTasks: TasksProps[] = [
  { id: crypto.randomUUID(), text: "🏛️Visit the Kafka Museum", done: true },
  { id: crypto.randomUUID(), text: "🧸See puppet show", done: false },
  { id: crypto.randomUUID(), text: "🖼️Lennon wall photo", done: false },
];
