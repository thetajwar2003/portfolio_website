import React from "react";

import data from "../data.json";

export default function Experience() {
  return (
    <section className="text-gray-400 body-font bg-gray-900" id="exp">
      <div className="container px-5 py-24  mx-auto">
        <div className="text-center mb-10">
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Experience
            <div className="mt-2 justify-center">
              <hr
                style={{
                  borderTop: "4px solid",
                  color: "#423aca",
                  borderRadius: "15px",
                  width: "200px",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              />
            </div>
          </h1>
          {/* <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-400 text-opacity-80">
            My most recent positions
          </p> */}
        </div>
        {data.experiences.map((experience: any, index: any) => {
          return (
            <div
              className="container mx-auto flex items-center justify-center flex-col"
              key={index}
            >
              <div className="xl:w-3/5 md:w-1/2 p-4">
                <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
                  <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font float-right">
                    {experience.date}
                  </h3>
                  <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">
                    {experience.company}
                  </h3>

                  <h2 className="text-lg text-white font-medium title-font mb-4">
                    {experience.position}
                  </h2>
                  <p className="leading-relaxed text-base">
                    {experience.desc.map((lines: any, index: any) => {
                      return index === experience.desc.length - 1 ? (
                        lines
                      ) : (
                        <React.Fragment key={index}>
                          {lines}
                          <br />
                        </React.Fragment>
                      );
                    })}
                  </p>
                  <a
                    className="mt-3 text-indigo-400 inline-flex items-center"
                    href={experience.website}
                    target="_blank"
                  >
                    View Their Website
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
                {index !== data.experiences.length - 1 ? (
                  <div
                    style={{
                      borderLeft: " 6px solid #818cf8",
                      height: "32px",
                      position: "absolute",
                      left: "50%",
                      marginTop: "auto",
                      // marginRight: "auto",
                      // top: "0%",
                    }}
                  ></div>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
