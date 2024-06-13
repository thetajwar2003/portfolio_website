import React from "react";
import { skills } from "@/data";

export default function Skills() {
  return (
    <section
      id="skills"
      className="container mx-auto flex px-5 py-12  flex-col items-center"
    >
      <div className="text-center mb-20">
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
          Skills
          <div className="mt-2 justify-center">
            <hr className="border-t-4 border-complement rounded-full w-24 mx-auto" />
          </div>
        </h1>
        {/* <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-400 text-opacity-80">
            Some languages, frameworks, and technologies I have experience with
          </p> */}
      </div>
      <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
        {skills.map((skill: any) => {
          return (
            <div
              className="p-4 md:w-1/4 flex flex-col text-center items-center"
              key={skill.name}
            >
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-800 text-complement mb-5 flex-shrink-0">
                {skill.logo}
              </div>
              <div className="flex-grow">
                <h2 className="text-white text-lg title-font font-medium mb-3">
                  {skill.name}
                </h2>
                <p className="leading-relaxed text-gray-400">{skill.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
