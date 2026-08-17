type SkillsCardProps = {
  image: string;
  alt: string;
  name: string;
  technologies: string[];
};

function SkillsCard({ image, alt, name, technologies }: SkillsCardProps) {
  return (
    <div className="relative group flex flex-col gap-5 justify-center items-center bg-white dark:bg-[#1d3557] p-5 rounded-lg shadow hover:border-gray-500 hover:scale-105 transition-all duration-300">
      <img src={image} alt={alt} className="w-10 h-10" />

      <h2 className="font-semibold dark:text-[#f1faee]">{name}</h2>

      {/* Tooltip */}
      {technologies?.length > 0 && (
        <div
          className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3
                      w-full
                      opacity-0 invisible
                      group-hover:opacity-100 group-hover:visible
                      transition-all duration-200 bg-white text-[#f1faee]
                      dark:bg-[#1d3557] dark:text-[#f1faee]
                      px-4 py-3 rounded-lg shadow-lg
                      z-10"
        >
          <p className="text-sm font-semibold mb-2 text-[#1d3557] dark:text-[#f1faee]">
            Technologies
          </p>

          <div className="flex flex-wrap gap-2">
            {technologies?.map((technology) => (
              <span
                key={technology}
                className="text-xs bg-[#457b9d] dark:bg-[#457b9d] px-2 py-1 rounded"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default SkillsCard;
