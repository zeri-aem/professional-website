import me from "../../../assets/me.jpg";
import BackgroundCard from "./BackgroundCard";
import { about } from "../../../data/about";
import { skills } from "../../../data/skills";
import SkillsCard from "../../common/SkillsCard";
import { GraduationCap } from "lucide-react";
import DoCard from "./DoCard";
import BeyondCard from "./BeyondCard";

function About() {
  return (
    <>
      <article className="flex flex-col gap-10">
        {/* Introduction */}
        <section className="grid md:grid-cols-2 gap-5 items-center justify-items-center">
          <div>
            <img
              src={me}
              alt="Zeri's picture"
              className="md:w-110 md:h-150 lg:w-150 lg:h-190 object-fit"
            />
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="font-bold text-4xl">Software Engineer</h1>
            <p className="text-wrap text-left max-w-200">
              Hi everyone! I'm Zeri Aaron, a Software Engineer passionate about
              building modern, scalable, and user-focused applications. I
              specialize in frontend development with React and modern
              JavaScript technologies, while continuously expanding my knowledge
              in backend systems and software engineering practices.
            </p>
          </div>
        </section>

        <hr className="border border-gray-300 dark:border-gray-700" />

        {/* My Background */}
        <section className="flex flex-col gap-5">
          <h1 className="font-bold text-4xl">My Background</h1>
          <div className="grid min-[1025px]:grid-cols-3 gap-5">
            {about.background.map((back) => (
              <BackgroundCard key={back.id} time={back.time}>
                {back.text}
              </BackgroundCard>
            ))}
          </div>
        </section>

        <hr className="border border-gray-300 dark:border-gray-700" />

        {/* Education */}
        <section className="flex flex-col gap-5">
          <h1 className="font-bold text-4xl">Education</h1>
          <div className="flex flex-col ml-10 gap-10">
            <div className="flex flex-col gap-2">
              <div className="flex gap-3 items-center">
                {/* <img src={gradHat} alt="Graduation Hat" className="w-10 h-10" /> */}
                <GraduationCap size={40} />
                <h2 className="font-semibold text-xl">
                  Bachelor of Science in Electronics Engineering
                </h2>
                <h1 className="p-1 rounded-md bg-linear-to-r from-yellow-200 via-amber-300 to-yellow-500 text-[#1d3557]">
                  <strong>Cum Laude</strong>
                </h1>
              </div>
              <div className="flex gap-3 items-center">
                <h3 className="font-semibold text-lg text-[#457b9d]">
                  Mapúa Malayan Colleges Laguna
                </h3>
                <h2 className="p-1 rounded-md bg-linear-to-r from-[#E0E0E0] to-[#9CA3AF] text-[#1d3557] dark:text-[#1d3557]">
                  <strong>GWA: 1.58</strong>
                </h2>
              </div>
              <h4>2020 - 2024</h4>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-3 items-center">
                {/* <img src={gradHat} alt="Graduation Hat" className="w-10 h-10" /> */}
                <GraduationCap size={40} />
                <h2 className="font-semibold text-xl">
                  Senior High School - STEM
                </h2>
                <h1 className="p-1 rounded-md bg-linear-to-r from-yellow-200 via-amber-300 to-yellow-500 text-[#1d3557] dark:text-[#1d3557]">
                  <strong>With Honors</strong>
                </h1>
              </div>
              <div className="flex gap-3 items-center">
                <h3 className="font-semibold text-lg text-[#457b9d]">
                  University of Perpetual Help System DALTA
                </h3>
                {/* <h2 className="p-1 rounded-md bg-linear-to-r from-[#E0E0E0] to-[#9CA3AF]">
                  <strong>GWA: 1.58</strong>
                </h2> */}
              </div>
              <h4>2018 - 2020</h4>
            </div>
          </div>
        </section>

        <hr className="border border-gray-300 dark:border-gray-700" />

        {/* What I Do */}
        <section className="flex flex-col gap-5">
          <h1 className="font-bold text-4xl">What I Do</h1>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 p-5 w-full">
            {about.whatIdo.map((work) => (
              <DoCard
                key={work.id}
                Icon={work.Icon}
                title={work.title}
                description={work.description}
              />
            ))}
          </div>
        </section>

        <hr className="border border-gray-300 dark:border-gray-700" />

        {/* Technologies I Use */}
        <section className="flex flex-col gap-5">
          <h1 className="font-bold text-4xl">Technologies I Use</h1>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 p-5 w-full">
            {skills.map((skill) => (
              <SkillsCard key={skill.id} {...skill} />
            ))}
          </div>
        </section>

        <hr className="border border-gray-300 dark:border-gray-700" />

        {/* Beyond Code */}
        <section className="flex flex-col gap-5">
          <h1 className="font-bold text-4xl">Beyond Code</h1>

          {about.beyondCode.map((talent) => (
            <BeyondCard {...talent} />
          ))}
        </section>

        <hr className="border border-gray-300 dark:border-gray-700" />

        {/* Let's Connect */}
      </article>
    </>
  );
}

export default About;
