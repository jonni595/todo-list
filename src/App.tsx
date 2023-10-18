import { useState } from "react";
import Modal from "./components/Modal";
import useShowMenu from "./hooks/useShowMenu";

interface Artist {
  id: number;
  name: string;
}

let nextID = 0;

const App = () => {
  const [artists, setArtists] = useState<Artist[]>([]);
  const [name, setName] = useState("");
  const { isModalOpen, toggleMenu } = useShowMenu();

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleClick = () => {
    if (!name) {
      toggleMenu();
      return;
    }

    const upperCaseName = name.charAt(0).toUpperCase() + name.slice(1);
    setArtists([{ id: nextID++, name: upperCaseName }, ...artists]);
    setName("");
  };

  const handleRemove = (id: number) => {
    setArtists(artists.filter((artist) => artist.id !== id));
  };

  return (
    <>
      {isModalOpen && <Modal isOpen={isModalOpen} showModal={toggleMenu} />}
      <div className="container">
        <h1 className="container__title">Todos</h1>
        <div className="container__task">
          <input
            type="text"
            value={name}
            placeholder="todos..."
            onChange={handleChangeName}
          />

          <div className="container__list">
            <ul>
              {artists.map(({ id, name }) => (
                <div className="items" key={id}>
                  <li>{name}</li>
                  <button onClick={() => handleRemove(id)}>Delete</button>
                </div>
              ))}
            </ul>
          </div>
        </div>
        <button type="button" onClick={handleClick}></button>
      </div>
    </>
  );
};

export default App;
