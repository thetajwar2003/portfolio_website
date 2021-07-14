import React from "react";

import data from "../data.json";

export default function Education() {
  return (
    <section className="text-gray-400 body-font bg-gray-900" id="edu">
      <div className="container px-5 py-24 mx-auto">
        <div className="container px-5 mx-auto">
          <div className="text-center mb-10">
            <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
              Education
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
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-400 text-opacity-80">
              My academic progress
            </p>
          </div>
        </div>
        <div className="lg:w-1/2 mx-auto -my-8 divide-y-2 divide-gray-800">
          {data.education.map((edu: any) => {
            return (
              <div
                className="py-8 flex flex-wrap md:flex-nowrap justify-center"
                key={edu.school}
              >
                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                  <span className="font-semibold title-font text-white">
                    {edu.graduation}
                  </span>
                  <span className="mt-1 text-indigo-400 text-sm">
                    {edu.location}
                  </span>
                </div>
                <div className="md:flex-grow">
                  <h2 className="text-2xl font-medium text-white title-font mb-2">
                    {edu.school}
                  </h2>
                  {edu.info.map((item: any, index: any) => {
                    return (
                      <p className="leading-relaxed" key={index}>
                        ∙ {item}
                      </p>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
