import { skills } from "../../../data/skills";
import SkillsCard from "../../common/SkillsCard";

function SkillsPreview() {
  return (
    <section className="flex flex-col justify-center items-start p-10 gap-5 bg-[#f1faee] rounded-2xl shadow-xl">
      <h1>
        <strong>Skills</strong>
      </h1>
      <h2>Technologies I work with...</h2>
      {/* SkillsCard */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
        {skills.map((skill) => (
          <SkillsCard key={skill.id} {...skill} />
        ))}
      </div>
    </section>
  );
}

export default SkillsPreview;
