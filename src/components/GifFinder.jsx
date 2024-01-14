import { useState } from "react";

const GifFinder = (buscar) => {
  const [newWord, setNewWord] = useState("");

  const handleClick = () => {
    console.log("la palabra buscada es");
    console.log("handle es");
    console.log(typeof buscar.handleBuscar);
    console.log(newWord);
    buscar.handleBuscar(newWord);
    setNewWord("");
  };
  const handleInput = (e) => {
    setNewWord(e.target.value);
  };

  return (
    <div className="inline-block w-full mx-auto text-center">
      <input
        onChange={handleInput}
        className="rounded-sm px-3 text-black w-2/5"
        type="text"
        placeholder="Digita tu busqueda"
        value={newWord}
      />
      <button
        onClick={handleClick}
        type="button"
        className="block mx-auto px-4 py-1 bg-orange-500 my-3 rounded-full"
      >
        Buscar
      </button>
    </div>
  );
};

export default GifFinder;
