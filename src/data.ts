import type { Tasks } from "./interface";

export const todoList: Tasks[] = [
  { id: crypto.randomUUID(), text: "🐕 Walk the dog", done: false },
  { id: crypto.randomUUID(), text: "🍔 Eat lunch", done: false },
  { id: crypto.randomUUID(), text: "📚 Study react", done: false },
  { id: crypto.randomUUID(), text: "🏀 Play basketball", done: false },
  { id: crypto.randomUUID(), text: "🔎 Study biology", done: false },
  { id: crypto.randomUUID(), text: "👟 Buy shoes", done: false },
];
