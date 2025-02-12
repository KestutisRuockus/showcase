import { useEffect } from "react";
import About from "./aboutSection/About";
import Contacts from "./contacts/Contacts";
import Projects from "./projectsSection/Projects";
import TechStack from "./techStack/TechStack";
import Navbar from "/src/navbar/Navbar";

export default function App() {
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("hide");
        });
      },
      { rootMargin: "0px 0px -20% 0px" }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center w-full relative">
      <Navbar />
      <About />
      <Contacts />
      <TechStack />
      <Projects />
    </div>
  );
}
