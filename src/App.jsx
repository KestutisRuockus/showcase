import About from "./aboutSection/About";
import Contacts from "./contacts/Contacts";
import Projects from "./projectsSection/Projects";
import TechStack from "./techStack/TechStack";

export default function App() {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <About />
      <TechStack />
      <Contacts />
      <Projects />
    </div>
  );
}
