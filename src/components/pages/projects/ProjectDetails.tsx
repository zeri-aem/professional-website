import { useParams, useNavigate } from "react-router-dom";
import { projects } from "../../../data/projects";
import { ChevronLeft } from "lucide-react";
import { TbMoodSad } from "react-icons/tb";
import Button from "../../common/Button";
import { FaCheckCircle } from "react-icons/fa";

function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projects.find((project) => project.id === Number(id));

  if (!project)
    return (
      <div className="flex flex-col gap-5 mt-5">
        <div>
          <button
            onClick={() => navigate(-1)}
            className="p-3 rounded-lg bg-[#1d3557] cursor-pointer hover:bg-[#457b9d] transition-all duration-300"
          >
            <ChevronLeft size={20} strokeWidth={3} color="#a8dadc" />
          </button>
        </div>
        <div className="flex justify-center items-center gap-2 m-10">
          <span className="font-bold text-center text-2xl text-[#457b9d]">
            Project not found
          </span>
          <TbMoodSad size={30} color="#457b9d" />
        </div>
      </div>
    );

  return (
    <div className="mt-5 flex flex-col mb-5 gap-2">
      <div className="flex justify-start items-center">
        <button
          onClick={() => navigate(-1)}
          className="p-3 rounded-lg bg-[#1d3557] cursor-pointer hover:bg-[#457b9d] transition-all duration-300"
        >
          <ChevronLeft
            size={20}
            strokeWidth={3}
            className="text-[#a8dadc] dark:text-[#f1faee]"
          />
        </button>
      </div>

      {/* Starting Project */}
      <article className="flex flex-col flex-wrap justify-center gap-2 mt-5">
        {/* <div className="flex flex-wrap gap-2"> */}
        <div className="grid md:grid-cols-2 gap-2">
          {/* Left Panel */}
          <section className="flex flex-3 flex-col border border-gray-300 dark:border-gray-500">
            <img src={project.image} alt={`${project.title} Image`} />

            {/* Container */}
            <div className="flex flex-wrap bg-white dark:bg-[#212121] h-full">
              {/* Category, Title, Description */}
              <div className="flex flex-3 flex-col justify-start items-start p-10 gap-5">
                <div className="bg-[#1d3557] w-fit p-1 rounded-md">
                  <h2 className="text-white">{project.category}</h2>
                </div>
                <h1 className="font-bold text-4xl">{project.title}</h1>
                <h1 className="font-bold text-3xl">Overview</h1>
                <p>{project.description}</p>
              </div>

              {/* Vertical divider */}
              <div className="w-px bg-gray-200 dark:bg-gray-500"></div>

              {/* Author, Year, TechStack */}
              <div className="flex flex-1 flex-col p-5 gap-5 border-t border-gray-300 md:border-0">
                {/* Author */}
                <div>
                  <h2 className="font-bold text-sm opacity-70">Author</h2>
                  <span className="text-sm">Zeri Aaron E. Malacas</span>
                </div>
                {/* Year */}
                <div>
                  <h2 className="font-bold text-sm opacity-70">Year</h2>
                  <span className="text-sm">{project.year}</span>
                </div>
                {/* Technologies Used */}
                <div>
                  <h2 className="font-bold text-sm opacity-70">
                    Technologies Used
                  </h2>
                  <ul className="flex flex-wrap justify-start">
                    {project.tech.map((t, idx) => (
                      <li key={idx} className="text-sm my-1.5">
                        <span className="bg-[#1d3557] text-white p-1 text-sm rounded-sm">
                          {t}
                        </span>
                        {/* Lalagay lang ng bullet to the right -> hanggat hindi pa last element */}
                        {idx < project.tech.length - 1 && (
                          <span className="mx-1">•</span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Right Panel */}
          <section className="flex flex-2 flex-col h-full bg-white justify-start border border-gray-300 dark:border-gray-500 p-3 gap-2 dark:bg-[#212121]">
            {/* Gallery */}
            <h2 className="font-bold text-2xl">Gallery</h2>
            <div className="grid md:grid-cols-2 grid-rows-2 gap-2 flex-1">
              {project.gallery.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt="Image"
                  className={`w-full aspect-video md:h-full object-cover hover:scale-102 transition-transform duration-300 ${idx === 2 && project.gallery.length === 3 ? "row-span-2 col-start-1 row-start-1" : ""}`}
                />
              ))}
            </div>

            <hr className="border-gray-300 dark:border-gray-500 -mx-3" />

            {/* Features */}
            <h2 className="font-bold text-2xl">Features</h2>
            <div className="flex flex-col flex-1">
              {project.features.map((feature, idx) => (
                <div className="space-x-2 flex items-center" key={idx}>
                  <span className="font-mono font-bold">
                    {String(idx + 1).padStart(2, "0")}{" "}
                  </span>
                  <FaCheckCircle
                    size={15}
                    color="green"
                    className="text-center"
                  />
                  <span className="text-[#1d3557] dark:text-[#f1faee]">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* Links */}
            {project.github && (
              <>
                <hr className="border-gray-300 dark:border-gray-500 -mx-3" />
                <h2 className="font-bold text-2xl">Links</h2>
                <Button
                  elem="a"
                  href={project.github}
                  target="_blank"
                  className="self-start rounded p-2 cursor-pointer text-white bg-[#1d3557] hover:bg-[#457b9d] transition-all duration-300"
                >
                  View on GitHub
                </Button>
              </>
            )}
          </section>
        </div>

        {/* Challenges and Solutions */}
        <section className="flex flex-col gap-2 bg-white dark:bg-[#212121] border border-gray-300 dark:border-gray-500 p-10">
          <h1 className="font-bold text-3xl">Challenges and Solutions</h1>
          {project.cas.map((c) => (
            <div className="flex flex-col" key={c.id}>
              <span className="font-mono font-bold">
                {String(c.id).padStart(2, "0")}
              </span>
              <div className="flex ml-5">
                <p className="font-semibold">{c.challenge}</p>
              </div>
              <div className="flex ml-5">
                <p className="">{c.solution}</p>
              </div>
            </div>
          ))}
        </section>

        {/* Outcome */}
        <section className="flex flex-col gap-2 bg-white dark:bg-[#212121] border border-gray-300 dark:border-gray-500 p-10">
          <h1 className="font-bold text-3xl">Outcome</h1>
          <p>Panget mo talaga</p>
        </section>
      </article>

      {/* Challenges and Solutions */}
      {/* <article className="flex flex-col border border-gray-300 p-10">
        <section className="flex flex-col gap-2">
          <h1 className="font-bold text-3xl">Challenges and Solutions</h1>
          {project.cas.map((c) => (
            <div className="flex flex-col" key={c.id}>
              <span className="font-mono font-bold">
                {String(c.id).padStart(2, "0")}
              </span>
              <div className="flex ml-5">
                <p className="font-semibold">{c.challenge}</p>
              </div>
              <div className="flex ml-5">
                <p className="">{c.solution}</p>
              </div>
            </div>
          ))}
        </section>
      </article> */}

      {/* Outcome */}
      {/* <article className="flex flex-col border border-gray-300 p-10">
        <section className="flex flex-col gap-2">
          <h1 className="font-bold text-3xl">Outcome</h1>
          <p>Panget mo talaga</p>
        </section>
      </article> */}
    </div>
  );
}

export default ProjectDetails;
