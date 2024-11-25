import { useState } from "react";
import { IoIosSunny, IoIosMoon } from "react-icons/io";
import { useTheme } from "../hooks/useTheme";

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="header">
      <button
        style={{ color: theme === "light" ? "#fff" : "#000" }}
        className="btn"
        onClick={() => {
          setIsDark(!isDark);
          toggleTheme();
        }}
      >
        {isDark ? <IoIosSunny /> : <IoIosMoon />}
      </button>
    </header>
  );
};

export default Navbar;
