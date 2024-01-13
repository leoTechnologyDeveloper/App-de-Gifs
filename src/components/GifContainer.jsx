import { data } from "autoprefixer";
import GifCard from "./GifCard";
// import { gifList } from "./gifArray";
import { useState, useEffect } from "react";

const GifContainer = () => {
  const [listaGifs, setListaGifs] = useState([]);

  const url =
    "http://api.giphy.com/v1/gifs/search?api_key=pdZ0vP8GtpjmNUDRnP9iEWz1TWqPhUtc&q=hamburguer";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setListaGifs(data.data));
  }, []);

  return (
    <div className=" bg-black p-5 flex flex-wrap justify-center items-center gap-3 m-auto">
      {/* {listaGifs.map((gif) => (
        <GifCard key={gif.nombre} nombre={gif.nombre} imagen={gif.imagen} />
      ))} */}

      {listaGifs.map((gif, index) => (
        <GifCard
          key={gif.username}
          nombre={gif.username}
          imagen={gif.images.original.url}
        />
        // <p key={index}>oee</p>
      ))}
      <p>lalala</p>
    </div>
  );
};

export default GifContainer;
