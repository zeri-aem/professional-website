import ExperienceCard from "../experience/ExperienceCard";
import { experiences } from "../../../data/experiences";

function ExperiencePreview() {
  return (
    <section className="flex flex-col justify-start items-start gap-5 p-10">
      <h1 className="font-bold text-4xl">Experience</h1>
      <p>My professional journey and the technologies I've worked with.</p>
      {/* ExperienceCard */}
      <div className="grid w-full md:grid-cols-2 lg:grid-cols-3 gap-5">
        {experiences.map((exp) => (
          <ExperienceCard key={exp.id} {...exp} />
        ))}
      </div>
    </section>
  );
}

export default ExperiencePreview;
