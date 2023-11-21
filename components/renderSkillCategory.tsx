import { SkillCategory } from './ocean';

export function renderSkillCategory(category: SkillCategory) {
  return (
    <div
      key={category.category}
      className="flex flex-col border rounded-xl border-gray-500 bg-[#1d1d1d] p-6 transition duration-300 hover:bg-white hover:text-black"
    >
      <p className="text-3xl mb-4">{category.category}</p>
      <div className="relative h-40 w-full mb-4">
        <Image
          src={category.image}
          alt={category.category}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="flex justify-between flex-col lg:flex-row lg:space-x-2">
        {category.skills.map((skill, index) => (
          <p key={index}>{skill}</p>
        ))}
      </div>
    </div>
  );
}
