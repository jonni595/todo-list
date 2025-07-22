import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { TasksProps } from "./definitions";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function filterItems(tasks: TasksProps[], query: string) {
  query = query.toLowerCase();
  return tasks.filter((task) =>
    task.text.split(" ").some((word) => word.toLowerCase().startsWith(query))
  );
}
