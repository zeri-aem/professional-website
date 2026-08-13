import type { ComponentPropsWithoutRef } from "react";
import { NavLink } from "react-router-dom";

type ExperienceCardProps = {
  id: number;
  logo: string;
  alt: string;
  title: string;
  company: string;
  start_date: string;
  end_date: string;
  techStack: string[];
} & Omit<ComponentPropsWithoutRef<typeof NavLink>, "to" | "id">;

function ExperienceCard({
  id,
  logo,
  alt,
  title,
  company,
  start_date,
  end_date,
  techStack,
  ...otherProps
}: ExperienceCardProps) {
  return (
    <NavLink
      className="flex flex-col justify-center items-center rounded-xl shadow h-full bg-white dark:bg-[#1d3557] hover:border-gray-500 hover:scale-105 transition-all duration-300"
      {...otherProps}
      to={`/experience/${id}`}
    >
      <div className="w-full h-20 border border-gray-200/30 dark:bg-white shadow-sm rounded-tr-xl rounded-tl-xl p-2">
        <img
          src={logo}
          alt={alt}
          className="w-full h-full object-contain rounded-tr-xl rounded-tl-xl"
        />
      </div>
      <div className="flex flex-1 flex-col bg-white dark:bg-[#1d3557] w-full justify-between items-start rounded-br-xl rounded-bl-xl p-3 gap-5">
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
              <span className="bg-[#1d3557] dark:bg-[#457b9d] text-white p-1 text-sm rounded-sm">
                {tech}
              </span>

              {idx !== techStack.length - 1 && (
                <span className="mx-2 text-gray-400">•</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </NavLink>
  );
}

export default ExperienceCard;
