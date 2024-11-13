import { useState } from "react";
import { IoIosSunny, IoIosMoon } from "react-icons/io";
import { useTheme } from "../hooks/useTheme";

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);
  const { toggleTheme } = useTheme();

  return (
    <header className="header">
      <button
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
