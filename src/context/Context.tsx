import { createContext } from "react";

type ContextType = {
  theme: string;
  toggleTheme: () => void;
};

export const Context = createContext<ContextType>({
  theme: "light",
  toggleTheme: () => {},
});
