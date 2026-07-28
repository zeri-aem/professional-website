import AboutPreview from "./AboutPreview";
import ContactPreview from "./ContactPreview";
import Hero from "./Hero";
import ProjectsPreview from "./ProjectsPreview";
import SkillsPreview from "./SkillsPreview";
import ExperiencePreview from "./ExperiencePreview";

function Home() {
  return (
    <div>
      <Hero />
      <SkillsPreview />
      <AboutPreview />
      <ProjectsPreview />
      <ExperiencePreview />
      <ContactPreview />
    </div>
  );
}

export default Home;
