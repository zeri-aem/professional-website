type SkillsCardProps = {
  image: string;
  alt: string;
  name: string;
};

function SkillsCard({ image, alt, name }: SkillsCardProps) {
  return (
    <div className="flex flex-col gap-2 justify-center items-center">
      <img src={image} alt={alt} className="w-10 h-10" />
      <h2>{name}</h2>
    </div>
  );
}

export default SkillsCard;
