import { Link } from "react-router-dom";

type ExperienceCardProps = {
  id: number;
  logo: string;
  alt: string;
  title: string;
  company: string;
  start_date: string;
  end_date: string;
  techStack: string[];
};

function ExperienceCard({
  id,
  logo,
  alt,
  title,
  company,
  start_date,
  end_date,
  techStack,
}: ExperienceCardProps) {
  return (
    <Link
      to="/experience"
      className="flex flex-col justify-center items-center rounded-xl shadow h-full bg-white hover:border-gray-500 hover:scale-105 transition-all duration-300"
    >
      <div className="w-full h-20 border border-gray-200/30 shadow-sm rounded-tr-xl rounded-tl-xl p-2">
        <img
          src={logo}
          alt={alt}
          className="w-full h-full object-contain rounded-tr-xl rounded-tl-xl"
        />
      </div>
      <div className="flex flex-1 flex-col w-full justify-between items-start  rounded-br-xl rounded-bl-xl p-3 gap-5">
        <div>
          <h2 className="font-bold text-lg">{title}</h2>
          <h2>{company}</h2>
          <h3>
            {start_date} - {end_date}
          </h3>
        </div>
        <ul className="flex justify-center items-center">
          {techStack.map((tech, idx) => (
            <li key={idx} className="flex items-center">
              <span className="bg-[#1d3557] text-white p-1 text-sm rounded-sm">
                {tech}
              </span>

              {idx !== techStack.length - 1 && (
                <span className="mx-2 text-gray-400">•</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
}

export default ExperienceCard;
