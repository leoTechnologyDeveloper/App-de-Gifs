import GifCard from "./GifCard";
import { gifList } from "./gifArray";

const GifContainer = () => {
  return (
    <div className=" bg-black p-5 flex flex-wrap justify-center items-center gap-3 m-auto">
      {gifList.map((gif) => (
        <GifCard key={gif} gif={gif} />
      ))}
    </div>
  );
};

export default GifContainer;
