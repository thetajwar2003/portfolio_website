import React from "react";

import data from "../data.json";
import { getSkillsImages } from "../constant/Images";

export default function Skills() {
  return (
    <section className="text-gray-400 bg-gray-900 body-font" id="skills">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills
            <div className="mt-2 justify-center">
              <hr
                style={{
                  borderTop: "4px solid",
                  color: "#423aca",
                  borderRadius: "15px",
                  width: "100px",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              />
            </div>
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-400 text-opacity-80">
            Some languages, frameworks, and technologies I have experience with
          </p>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          {data.skills.map((skill: any) => {
            return (
              <div
                className="p-4 md:w-1/3 flex flex-col text-center items-center"
                key={skill.name}
              >
                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-5 flex-shrink-0">
                  {getSkillsImages(skill.name)}
                </div>
                <div className="flex-grow">
                  <h2 className="text-white text-lg title-font font-medium mb-3">
                    {skill.name}
                  </h2>
                  <p className="leading-relaxed text-base">{skill.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
