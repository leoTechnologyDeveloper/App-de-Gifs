const GifCard = ({ gif }) => {
  console.log(gif);
  return (
    <div className="bg-gray-100 text-black w-full md:w-3/12 h-40 rounded-xl overflow-hidden text-center">
      <figure className="w-full h-3/4 overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={gif.imagen}
          alt={`imagen de ${gif.nombre}`}
        />
      </figure>
      <h2 className="text-base h-1/4">{gif.nombre}</h2>
    </div>
  );
};

export default GifCard;
