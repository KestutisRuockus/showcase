import { projectsData } from "../data/projects";
import ProjectCard from "./ProjectCard";

const Projects = () => {

  return (
    <div id="projects" className="flex flex-col items-center gap-16 justify-center mb-20 py-4">
        {projectsData.map((project, index) => <ProjectCard key={index} project={project} even={index %2 === 0 ? true : false}/>)}
    </div>
  )
}

export default Projects