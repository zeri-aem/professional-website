import { NavLink } from "react-router-dom";
import { type ProjectCardProps } from "../../../types/project";

function ProjectCard({ ...project }: ProjectCardProps) {
  return (
    <NavLink
      to={`/projects/${project.id}`}
      className="flex flex-col dark:text-[#f1faee] h-full rounded-xl shadow border border-gray-200/30 hover:border-gray-500 hover:scale-105 transition-all duration-300"
    >
      <div className="w-full h-52">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover rounded-tr-xl rounded-tl-xl"
        />
      </div>
      {/* <img
        src={project.image}
        alt={project.title}
        className="w-full h-40 md:h-40 lg:h-60 object-cover rounded-tr-xl rounded-tl-xl"
      /> */}
      <div className="flex flex-col flex-1 gap-3 justify-between h-full p-3 bg-white dark:bg-[#1d3557] rounded-bl-xl rounded-br-xl">
        <div>
          <div className="flex justify-between items-center gap-2">
            <h2 className="font-bold flex-1 text-lg">{project.title}</h2>

            <span className="rounded-md bg-[#a8dadc] dark:bg-[#457b9d] p-0.5 shrink-0">
              {project.year}
            </span>
          </div>
          <p>{project.description}</p>
        </div>
        <div className="bg-[#1d3557] w-fit p-1 rounded-md">
          <h2 className="text-white">{project.category}</h2>
        </div>
      </div>
    </NavLink>
  );
}

export default ProjectCard;
