import { useState } from "react";
import { Context } from "./Context";
import type { ThemeContextProps } from "../interface";

const ThemeContext: React.FC<ThemeContextProps> = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Context.Provider value={{ theme, toggleTheme }}>
      {children}
    </Context.Provider>
  );
};

export default ThemeContext;
