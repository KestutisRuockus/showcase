import { projectsData } from "../data/projects";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <main
      id="projects"
      className="flex flex-col items-center gap-16 justify-center mb-20 py-4 sm:w-4/5 w-11/12"
    >
      {projectsData.map((project, index) => (
        <ProjectCard
          key={index}
          project={project}
          even={index % 2 === 0 ? true : false}
        />
      ))}
    </main>
  );
};

export default Projects;
