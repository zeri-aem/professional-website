import { projects } from "../../../data/projects";
import ProjectCard from "../projects/ProjectCard";
import Button from "../../common/Button";

function ProjectsPreview() {
  const formattedProjects = projects.filter((project) => project.id <= 3);

  return (
    <section className="flex flex-col justify-center items-start gap-5 p-10 bg-[#e63946] rounded-2xl shadow-xl">
      <h1 className="text-4xl text-white">
        <strong>Featured Projects</strong>
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
        {/* ProjectsCard */}
        {formattedProjects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
      <Button elem="nav" to="/projects">
        View Projects
      </Button>
    </section>
  );
}

export default ProjectsPreview;
