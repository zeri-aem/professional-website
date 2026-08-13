import ExperienceCard from "./ExperienceCard";
import { experiences } from "../../../data/experiences";

function Experience() {
  return (
    <article>
      <div className="relative flex justify-center min-h-screen">
        {/* Tree trunk */}
        <div className="absolute top-0 bottom-0 w-3 bg-[#e63946]" />

        {/* Experiences */}
        <div className="relative flex flex-col gap-20 py-20">
          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div
                key={exp.id}
                className={`relative flex md:w-180 lg:w-200 ${
                  isLeft ? "justify-start" : "justify-end"
                }`}
              >
                <ExperienceCard
                  {...exp}
                  className="w-80 bg-white dark:bg-[#1d3557] hover:border-gray-500 hover:scale-105 transition-all duration-300 z-10 rounded-br-xl rounded-bl-xl"
                />

                {/* Branch */}
                <div
                  className={`absolute top-1/2 h-3 w-20 bg-[#e63946] ${
                    isLeft ? "right-1/2" : "left-1/2"
                  }`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </article>
  );
}

export default Experience;
