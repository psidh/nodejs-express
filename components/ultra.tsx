import Line from './line';
import Image from 'next/image';

function Ultra() {
  return (
    <section>
      <div className="h-screen flex flex-col justify-center 
      md:flex-row md:justify-between items-center md:mx-16">
        <p
          className="text-3xl md:text-6xl lg:text-8xl mb-16 md:mb-0
          text-black font-montserrat text-transparent 
        bg-clip-text bg-gradient-to-t from-white to-gray-400"
        >
          Be Unique <br /> Be Ultra
        </p>

        <Image
          src={'/mac.png'}
          width={400}
          height={400}
          alt="mac"
          className="sm:mt-6" // Adjust margin for small screens
        />
      </div>

      <div>
        <Line />
      </div>
    </section>
  );
}

export default Ultra;
