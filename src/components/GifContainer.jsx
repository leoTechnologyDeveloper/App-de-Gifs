import GifCard from "./GifCard";
// import { gifList } from "./gifArray";
import { useState, useEffect } from "react";

const GifContainer = () => {
  const [listaGifs, setListaGifs] = useState([]);
  const [searchWord, setSearchWord] = useState("simpson");
  const [newWord, setNewWord] = useState("");

  const handleClick = () => {
    setListaGifs([]);
    setSearchWord(newWord);
    setNewWord("");
  };
  const handleInput = (e) => {
    setNewWord(e.target.value);
  };

  const url = `https://api.giphy.com/v1/gifs/search?api_key=pdZ0vP8GtpjmNUDRnP9iEWz1TWqPhUtc&q=${searchWord}`;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setListaGifs(data.data));
  }, [searchWord, url]);

  return (
    <div className=" bg-black p-5 flex  flex-wrap justify-center items-center gap-3 m-auto">
      <div className="inline-block w-full mx-auto text-center">
        <input
          onChange={handleInput}
          className="rounded-sm px-3 text-black w-10/12"
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

      {listaGifs.map((gif) => (
        <GifCard
          key={gif.username}
          nombre={gif.username}
          imagen={gif.images.original.url}
        />
      ))}
      <p>ups</p>
    </div>
  );
};

export default GifContainer;
