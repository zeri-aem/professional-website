type SkillsCardProps = {
  src: string;
  alt: string;
  name: string;
};

function SkillsCard({ src, alt, name }: SkillsCardProps) {
  return (
    <div className="flex flex-col gap-2 justify-center items-center">
      <img src={src} alt={alt} />
      <h2>{name}</h2>
    </div>
  );
}

export default SkillsCard;
