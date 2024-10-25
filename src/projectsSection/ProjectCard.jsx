/* eslint-disable react/prop-types */
import { useState } from "react";

export default function ProjectCard({ project, even}) {
  const [currentImage, setcurrentImage] = useState(project.images[0]);

  // render project images carousel
  const ProjectsImagesCarousel = ({ images }) => {
    return (
      <div id="portfolio" className="bg-opacity-20 p-5 bg-white w-full rounded-md">
        <div className="flex flex-col items-center gap-4 object-contain">
          <div>
            <img
              className=" bg-cover"
              src={currentImage}
              alt={project.name}
              width={480}
            />
          </div>
          <div className="flex flex-wrap justify-center gap-4 max-[350px]:gap-1">
            {images.map((image, index) => (
              <img
                onClick={() => setcurrentImage(images[index])}
                className="cursor-pointer border-2 p-1 rounded-md hover:scale-110 transition-all duration-300 bg-cover max-[350px]:w-[55px]"
                key={index}
                src={image}
                width={140}
                height={140}
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
            <i className={`${item.icon} text-5xl ${item.color}`}  />
    )
}

  const CreateIconFromUrl = ({ item }) => {
    return (
        <img
        src={item.imgUrl}
        alt={item.name}
        className="mb-1"
        width={42}
      />
    )
}

  // render icon or image of what technologies was used in project
  function generateUsedTechStackList(arr) {

    return (
      <div className="w-full">
        <h1 className="text-white text-center font-semibold mb-2 text-xl">
          Tech Stack:
        </h1>
        <div className="bg-black/[.3] flex flex-wrap justify-center gap-2 w-fit rounded-2xl m-auto p-4">
          {arr.map((item) => (
            <div
              key={item.name}
              className="flex flex-col gap-1 justify-end items-center w-16"
            >
              {item.icon !== "" ? <CreateFontAwesomeIcon item={item}/> : <CreateIconFromUrl item={item}/>}
              <span className="text-xs text-white">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-grayishBlue bg-opacity-60 w-4/5 rounded-md p-12 flex flex-col gap-5  border-4 border-[#615545]">
        <h1 className="text-2xl lg:text-3xl text-white uppercase font-bold text-center mb-4">
            {project.name}
        </h1>
        <div className={`flex lg:flex-row flex-col ${!even ? 'lg:flex-row-reverse' : ''} gap-8 items-center`}>
            <div className="flex flex-col gap-4 lg:w-1/2 w-full">
                <ProjectsImagesCarousel images={project.images} />
            </div>
            <div className="lg:w-1/2 w-full flex flex-col gap-8">
                <div className="text-white h-40 w-full overflow-y-scroll border-4 border-[#615545] p-4 rounded-md">
                    {project.description}
                </div>
                {generateUsedTechStackList(project.techStack)}
                <div className="flex sm:flex-row flex-col justify-center gap-6 text-center">
                    <a
                    href={project.netlify}
                    target="_blank"
                    className="border-4 px-4 py-2 rounded-2xl border-[#615545] bg-white font-bold text-[#121112] hover:bg-[#444243] hover:border-[#444243] hover:text-white hover:scale-110 transition-all duration-300 cursor-pointer"
                    >
                    Project demo
                    </a>
                    <a 
                        className="border-4 px-4 py-2 rounded-2xl border-[#615545] bg-white font-bold text-[#121112] hover:bg-[#444243] hover:border-[#444243]
                        hover:text-white hover:scale-110 transition-all duration-300 cursor-pointer"
                        href={project.github} target="_blank"
                    >
                        Open on GitHub
                    </a>
                </div>
            </div>
        </div>
    </div>
  );
}
