type SkillsCardProps = {
  image: string;
  alt: string;
  name: string;
};

function SkillsCard({ image, alt, name }: SkillsCardProps) {
  return (
    <div className="flex flex-col gap-2 justify-center items-center bg-white p-5 rounded-lg shadow hover:border-gray-500 hover:scale-105 transition-all duration-300">
      <img src={image} alt={alt} className="w-10 h-10" />
      <h2 className="font-semibold">{name}</h2>
    </div>
  );
}

export default SkillsCard;
