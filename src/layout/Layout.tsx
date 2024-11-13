import React from "react";
import type { LayoutProps } from "../interface";
import "./Layout.css";
import { useTheme } from "../hooks/useTheme";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { theme } = useTheme();

  return (
    <section className={`layout ${theme === "light" ? "dark" : "light"}`}>
      {children}
    </section>
  );
};

export default Layout;
