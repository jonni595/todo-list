import { useState } from "react";

const useShowMenu = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsModalOpen(!isModalOpen);
  };

  return {
    isModalOpen,
    toggleMenu,
  };
};

export default useShowMenu;
