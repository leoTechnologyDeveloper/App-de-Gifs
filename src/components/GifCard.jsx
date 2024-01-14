const GifCard = ({ imagen, nombre }) => {
  return (
    <div className="bg-gray-100 text-black w-full max-w-xl md:w-3/12 h-40 rounded-xl overflow-hidden text-center">
      <figure className="w-full h-3/4 overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={imagen}
          alt={`imagen de ${nombre}`}
        />
      </figure>
      <h2 className="text-base h-1/4 flex justify-center items-center ">
        {nombre}
      </h2>
    </div>
  );
};

export default GifCard;
