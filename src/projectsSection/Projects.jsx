import { projectsData } from "../data/projects";
import ProjectCard2 from "./ProjectCard2";

const Projects = () => {
  return (
    <main
      id="projects"
      className="flex flex-col items-center gap-14 justify-center my-10 py-4 sm:w-4/5 w-11/12"
    >
      <div className="w-[72%] flex-col items-start">
        <h2 className="w-3/5 text-xl uppercase text-blue-500 font-bold">
          Projects
        </h2>
        <h3 className="w3/5 text-lg font-semibold">
          Eeach project is a unique piece of development
        </h3>
      </div>
      {projectsData.map((project, index) => (
        <ProjectCard2
          key={index}
          project={project}
          even={index % 2 === 0 ? true : false}
        />
      ))}
    </main>
  );
};

export default Projects;
