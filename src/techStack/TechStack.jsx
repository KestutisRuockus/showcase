import techStack from "../data/techStack.json";
import TechIcon from "./TechIcon";

const TechStack = () => {
  return (
    <section className="text-md flex flex-wrap justify-center items-center gap-6 sm:w-4/5 w-11/12 my-4 px-5 py-14  font-bold ">
      <div className="text-black text-lg underline underline-offset-1 cursor-default">
        Tech Stack
      </div>
      <div className="flex flex-wrap justify-center items-end gap-4 relative">
        {techStack.map((tech) => (
          <TechIcon key={tech.name} tech={tech} />
        ))}
      </div>
    </section>
  );
};

export default TechStack;
