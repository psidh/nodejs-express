import Image from 'next/image';
interface SkillCategory {
  category: string;
  image: string;
  skills: string;
}

const skillsData: SkillCategory[] = [
  {
    category: 'Front End',
    image: '/front-end.png',
    skills: 'React',
  },
  {
    category: 'Back End',
    image: '/back-end.png',
    skills: 'Spring',
  },
  {
    category: 'Full Stack',
    image: '/next.png',
    skills: 'NextJs',
  },
  {
    category: 'ML DL',
    image: '/ml.png',
    skills: 'TensorFlow',
  },
  {
    category: 'App Dev',
    image: '/flutter.png',
    skills: 'Flutter',
  },
  {
    category: 'DevOps',
    image: '/devops.png',
    skills: 'Github',
  },
  {
    category: 'Cloud',
    image: '/cloud.webp',
    skills: 'Google Cloud',
  },
];

function renderSkillCategory(category: SkillCategory) {
  return (
    <div
      key={category.category}
      className="flex flex-col justify-between border 
      rounded-xl border-gray-600 bg-[#1d1d1d] p-4  
      transition duration-300 "
    >
      <p className="text-md md:text-xl lg:text-2xl my-4 text-center">
        {category.category}
      </p>
      <div className="flex flex-col items-center justify-center w-full my-4">
        <Image
          src={category.image}
          alt={category.category}
          width={50}
          height={50}
          className=""
        />
      </div>
      <div className="mt-4 w-full">
        {/* Use category.skills instead of category.skills=> */}
        <p
          className="text-xs md:text-md lg:text-lg border border-gray-600 rounded-lg py-2 px-4 text-center"
          key={category.skills}
        >
          {category.skills}
        </p>
      </div>
    </div>
  );
}

function Ocean() {
  return (
    <div className=" flex flex-col sm:flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <p
          className="text-3xl md:text-6xl font-montserrat text-transparent 
          bg-clip-text bg-gradient-to-r from-white to-gray-400 my-24"
        >
          Ocean of Opportunities
        </p>
        <div className="w-full">
          <div className="grid grid-cols-1  sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 items-start gap-4 ">
            {skillsData.map((category) => renderSkillCategory(category))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ocean;
