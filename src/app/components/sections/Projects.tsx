import React from "react";
import { projects } from "@/data";
import { FaArrowRight } from "react-icons/fa";
export default function Projects() {
  return (
    <section className="text-gray-400  body-font" id="projects">
      <div className=" py-12 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Projects
            <div className="mt-2 justify-center">
              <hr className="border-t-4 border-complement rounded-full w-24 mx-auto" />
            </div>
          </h1>
        </div>
        {projects.map((project: any, index: any) => {
          return index % 2 === 0 ? (
            <div
              className="flex items-center mx-auto border-b pb-10 mb-10 sm:flex-row flex-col"
              key={index}
            >
              <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full text-complement bg-gray-800 flex-shrink-0">
                {project.logo}
              </div>
              <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                <h1 className="text-white text-xl title-font font-medium mb-1">
                  {project.name}
                </h1>
                <h3 className="text-complement text-sm title-font font-medium ">
                  {project.tags}
                </h3>
                <p className="leading-relaxed text-base">{project.meta}</p>
                <a
                  className="mt-3 text-complement inline-flex items-center"
                  href={project.link}
                  target="_blank"
                >
                  View Source Code
                  <FaArrowRight className="pl-2" size={18} />
                </a>
              </div>
            </div>
          ) : (
            <div
              className="flex items-center mx-auto border-b pb-10 mb-10 sm:flex-row flex-col"
              key={index}
            >
              <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                <h1 className="text-white text-xl title-font font-medium mb-1">
                  {project.name}
                </h1>
                <h3 className="text-complement text-sm title-font font-medium ">
                  {project.tags}
                </h3>
                <p className="leading-relaxed text-base">{project.meta}</p>
                <a
                  className="mt-3 text-complement inline-flex items-center justify-between"
                  href={project.link}
                  target="_blank"
                >
                  View Source Code
                  <FaArrowRight className="pl-2" size={18} />
                </a>
              </div>
              <div className="sm:w-32 order-first sm:order-none sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full text-complement bg-gray-800 flex-shrink-0">
                {project.logo}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
