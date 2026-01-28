/* eslint-disable react/prop-types */
import { useState } from "react";

const ProjectCard2 = ({ project, even }) => {
  const [currentImage, setcurrentImage] = useState(project.images[0]);

  // render project images carousel
  const ProjectsImagesCarousel = ({ images }) => {
    return (
      <div
        id="portfolio"
        className="bg-opacity-20 p-5 bg-white w-full rounded-md"
      >
        <div className="flex flex-col items-center gap-4 object-contain">
          <div>
            <a href={currentImage} target="_blank" rel="noopener noreferrer">
              <img
                className="bg-cover rounded-md cursor-zoom-in transition-transform hover:scale-[1.01]"
                src={currentImage}
                alt={project.name}
                width={400}
              />
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-4 max-[350px]:gap-1">
            {images.map((image, index) => (
              <img
                onClick={() => setcurrentImage(images[index])}
                className={`cursor-pointer border-[1px] ${currentImage === images[index] ? "border-blue-600" : "border-[#615545]"} p-1 rounded-md hover:scale-110 transition-all duration-300 bg-cover max-[460px]:w-[110px] max-[400px]:w-[90px]`}
                key={index}
                src={image}
                width={80}
                height={80}
                alt={project.name}
              />
            ))}
          </div>
        </div>
      </div>
    );
  };

  const CreateFontAwesomeIcon = ({ item }) => {
    return (
      <div className="h-8 flex items-center justify-center">
        <i className={`${item.icon} text-2xl ${item.color}`} />
      </div>
    );
  };

  const CreateIconFromUrl = ({ item }) => {
    return (
      <div className="h-8 flex items-center justify-center">
        <img
          src={item.imgUrl}
          alt={item.name}
          className="h-6 w-7 object-contain"
        />
      </div>
    );
  };

  // render icon or image of what technologies was used in project
  function generateUsedTechStackList(mainTech, supportingTech) {
    return (
      <div className="w-full mt-6">
        {/* MAIN STACK */}
        <h3 className="text-center font-semibold text-lg mb-1 text-blue-600">
          Tech Stack
        </h3>

        <div className="flex flex-wrap gap-6 justify-center mb-2">
          {mainTech.map((item) => (
            <div key={item.name} className="flex flex-col items-center w-10">
              {item.icon ? (
                <CreateFontAwesomeIcon item={item} size="lg" />
              ) : (
                <CreateIconFromUrl item={item} size={56} />
              )}

              <span className="text-xs font-medium text-center">
                {item.name}
              </span>
            </div>
          ))}
        </div>

        {/* SUPPORTING TECH */}
        <h3 className="text-center font-semibold text-sm text-blue-400">
          Supporting Stack
        </h3>

        <ul className="flex flex-wrap gap-8 justify-center mb-2">
          {supportingTech.map((item) => (
            <li
              key={item}
              className="text-xs font-medium text-center text-black list-disc"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <article className="w-11/12 lg:w-4/5 flex flex-col gap-5 border shadow-lg px-8 py-12 rounded-lg bg-gray-100">
      <div
        className={`flex lg:flex-row flex-col ${
          !even ? "lg:flex-row-reverse" : ""
        } items-center justify-center`}
      >
        <div className="flex flex-col gap-4 lg:w-1/2 w-full">
          <ProjectsImagesCarousel images={project.images} />
        </div>
        <div className="lg:w-1/2 w-full flex flex-col">
          <h2 className="text-xl text-black uppercase font-bold text-center mb-4">
            {project.name}
          </h2>
          <div style={{ whiteSpace: "pre-line" }} className="text-black w-full">
            {project.description}
          </div>
          {generateUsedTechStackList(project.mainStack, project.supportingTech)}
          <div className="flex gap-4 justify-center mt-2">
            <div className="flex sm:flex-row flex-col justify-center gap-4 text-center">
              <a
                href={project.github}
                target="_blank"
                className="flex gap-1 justify-center items-center rounded-lg shadow-lg bg-gray-200 px-4"
              >
                Code <i className="fa-brands fa-github text-xl" />
              </a>
              <a
                href={project.netlify}
                target="_blank"
                className="flex gap-1 justify-center items-center rounded-lg shadow-lg bg-gray-200 px-4"
              >
                Live Demo{" "}
                <i className="fa-solid fa-arrow-up-right-from-square" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard2;
