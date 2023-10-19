import { useState } from "react";

const useChangeInput = () => {
  const [name, setName] = useState("");

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

	const clearInput = () => {
		setName('')
	}

  return {
    name,
    handleChangeName,
		clearInput
  };
};

export { useChangeInput };
