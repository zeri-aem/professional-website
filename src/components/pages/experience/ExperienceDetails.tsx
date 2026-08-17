import { ChevronLeft } from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
import { experiences } from "../../../data/experiences";

function ExperienceDetails() {
  const navigate = useNavigate();
  const { id } = useParams();

  const exp = experiences.find((experience) => experience.id === Number(id))!;

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
      <article className="flex flex-col flex-wrap justify-center gap-2 mt-5 items-stretch">
        {/* Left Panel */}
        <section className="flex flex-3 flex-col border border-gray-300 dark:border-gray-500 bg-white dark:bg-[#212121]">
          <img
            src={exp.logo}
            alt={`${exp.company} Image`}
            className="w-full h-70 object-contain p-5 bg-white"
          />

          <hr className="border border-gray-300 dark:border-gray-500" />

          <div className="flex flex-wrap">
            {/* Role/Title, Company, Overview */}
            <div className="flex flex-3 flex-col justify-start items-start p-10 gap-5">
              {/* <div className="bg-[#1d3557] w-fit p-1 rounded-md">
                <h2 className="text-white">{exp.category}</h2>
              </div> */}
              <h1 className="font-bold text-4xl">{exp.title}</h1>
              <h2 className="font-bold text-3xl text-[#457b9d] dark:text-[#a8dadc]">
                {exp.company}
              </h2>
              <h1 className="font-bold text-3xl ">Overview</h1>
              <p>{exp.description}</p>
            </div>

            {/* Vertical divider */}
            <div className="w-px bg-gray-300 dark:bg-gray-500" />

            {/* Year, TechStack */}
            <div className="flex flex-1 flex-col p-5 gap-5 border-t border-gray-300 dark:border-gray-500 md:border-0">
              <div>
                <h2 className="font-bold text-sm opacity-70">Year</h2>
                <span className="text-sm">
                  {exp.start_date} - {exp.end_date}
                </span>
              </div>
              <div>
                <h2 className="font-bold text-sm opacity-70">
                  Technologies Used
                </h2>
                <ul className="flex flex-wrap justify-start">
                  {exp.techStack.map((tech, idx) => (
                    <li key={idx} className="text-sm my-1.5">
                      <span className="bg-[#1d3557] text-white p-1 text-sm rounded-sm">
                        {tech}
                      </span>
                      {/* Lalagay lang ng bullet to the right -> hanggat hindi pa last element */}
                      {idx < exp.techStack.length - 1 && (
                        <span className="mx-1">•</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Responsibilities */}
        <section className="flex flex-col w-full gap-2 border p-10 border-gray-300 dark:border-gray-500 bg-white dark:bg-[#212121]">
          <h1 className="font-bold text-3xl">Responsibilities</h1>
          <ul>
            {exp.responsibilities.map((res, idx) => (
              <li key={idx} className="list-disc ml-5">
                {res}
              </li>
            ))}
          </ul>
        </section>

        {/* Achievements */}
        <section className="flex flex-col w-full gap-2 border p-10 border-gray-300 dark:border-gray-500 bg-white dark:bg-[#212121]">
          <h1 className="font-bold text-3xl">Achievements</h1>
          <ul>
            {exp.achievements.map((achievement, idx) => (
              <li key={idx} className="flex gap-2">
                <span className="font-mono font-bold">
                  {String(idx + 1).padStart(2, "0")}
                </span>{" "}
                {achievement}
              </li>
            ))}
          </ul>
        </section>
      </article>

      {/* Responsibilities */}
      {/* <article className="flex flex-col border border-gray-300 p-10">
        <section className="flex flex-col gap-2">
          <h1 className="font-bold text-3xl">Responsibilities</h1>
          <ul>
            {exp.responsibilities.map((res, idx) => (
              <li key={idx} className="list-disc ml-5">
                {res}
              </li>
            ))}
          </ul>
        </section>
      </article> */}

      {/* Achievements */}
      {/* <article className="flex flex-col border border-gray-300 p-10">
        <section className="flex flex-col gap-2">
          <h1 className="font-bold text-3xl">Achievements</h1>
          <ul>
            {exp.achievements.map((achievement, idx) => (
              <li key={idx} className="flex gap-2">
                <span className="font-mono font-bold">
                  {String(idx + 1).padStart(2, "0")}
                </span>{" "}
                {achievement}
              </li>
            ))}
          </ul>
        </section>
      </article> */}
    </div>
  );
}

export default ExperienceDetails;
