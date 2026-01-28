import About from "./aboutSection/About";
import Developer from "./aboutSection/Developer";
import Contacts from "./contacts/Contacts";
import Projects from "./projectsSection/Projects";
import TechStack from "./techStack/TechStack";
import Navbar from "/src/navbar/Navbar";

export default function App() {
  return (
    <div className="flex flex-col justify-center items-center w-full relative">
      <Navbar />
      <Developer />
      <TechStack />
      <About />
      <Contacts />
      <Projects />
    </div>
  );
}
