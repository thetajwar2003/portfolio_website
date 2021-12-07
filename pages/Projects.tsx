import React from "react";

import data from "../data.json";
import { getProjectImages } from "../constant/Images";

export default function Projects() {
  return (
    <section className="text-gray-400 bg-gray-900 body-font" id="proj">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Projects
            <div className="mt-2 justify-center">
              <hr
                style={{
                  borderTop: "4px solid",
                  color: "#423aca",
                  borderRadius: "15px",
                  width: "150px",
                  marginLeft: "auto",
                  marginRight: "auto",
                  paddingBottom: "0%",
                }}
              />
            </div>
          </h1>
          {/* <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-400 text-opacity-80">
            My most recent projects
          </p> */}
        </div>
        {data.projects.map((project: any, index: any) => {
          return index % 2 === 0 ? (
            <div
              className="flex items-center lg:w-4/5 mx-auto border-b pb-10 mb-10 border-gray-800 sm:flex-row flex-col"
              key={index}
            >
              <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full text-indigo-400 bg-gray-800 flex-shrink-0">
                {getProjectImages(project.name)}
              </div>
              <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                <h1 className="text-white text-xl title-font font-medium mb-1">
                  {project.name}
                </h1>
                <h3 className="text-indigo-400 text-sm title-font font-medium ">
                  {project.tags}
                </h3>
                <p className="leading-relaxed text-base">{project.meta}</p>
                <a
                  className="mt-3 text-indigo-400 inline-flex items-center"
                  href={project.link}
                  target="_blank"
                >
                  View Source Code
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          ) : (
            <div
              className="flex items-center lg:w-4/5 mx-auto border-b pb-10 mb-10 border-gray-800 sm:flex-row flex-col"
              key={index}
            >
              <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                <h1 className="text-white text-xl title-font font-medium mb-1">
                  {project.name}
                </h1>
                <h3 className="text-indigo-400 text-sm title-font font-medium ">
                  {project.tags}
                </h3>
                <p className="leading-relaxed text-base">{project.meta}</p>
                <a
                  className="mt-3 text-indigo-400 inline-flex items-center"
                  href={project.link}
                  target="_blank"
                >
                  View Source Code
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
              <div className="sm:w-32 order-first sm:order-none sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full text-indigo-400 bg-gray-800 flex-shrink-0">
                {getProjectImages(project.name)}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
