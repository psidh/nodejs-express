
function Ultra() {
  return (
    <div className="h-screen flex flex-row md:flex-row bg-black justify-center items-center">
      <div className="w-1/2 h-screen flex flex-col justify-center items-center ml-6">
        <p
          className="text-3xl md:text-6xl lg:text-8xl text-black font-montserrat mb-1 text-transparent 
      bg-clip-text bg-gradient-to-t from-white to-gray-400"
        >
          Be Unique
        </p>
      </div>

      <div className="w-1/2 h-screen flex flex-col justify-center items-center ">
        <p className="text-3xl md:text-6xl lg:text-9xl">|</p>
      </div>

      <div className="w-1/2 h-screen flex flex-col justify-center items-center mr-6">
        <p
          className="text-3xl md:text-6xl lg:text-8xl text-black font-montserrat mb-1 text-transparent 
      bg-clip-text bg-gradient-to-b from-white to-gray-400"
        >
          Be Ultra
        </p>
      </div>
    </div>
  );
}

export default Ultra;
