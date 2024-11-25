import { useContext } from "react";
import { Context } from "../context/Context";

export const useTheme = () => {
  if (!useContext(Context)) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return useContext(Context);
};
