import AboutPreview from "./AboutPreview";
import ContactPreview from "./ContactPreview";
import Hero from "./Hero";
import ProjectsPreview from "./ProjectsPreview";
import SkillsPreview from "./SkillsPreview";
import ExperiencePreview from "./ExperiencePreview";

function Home() {
  return (
    <>
      <Hero />
      <SkillsPreview />
      <AboutPreview />
      {/* Revamp the project and experience dawg, it looks weird */}
      <ProjectsPreview />
      <ExperiencePreview />
      <ContactPreview />
    </>
  );
}

export default Home;
