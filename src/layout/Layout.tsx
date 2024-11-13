import React from "react";
import type { LayoutProps } from "../interface";
import "./Layout.css";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <section className="layout">{children}</section>;
};

export default Layout;
