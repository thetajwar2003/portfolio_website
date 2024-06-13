"use client";
import React, { useState } from "react";
import { experiences } from "@/data";

export default function InternshipExperience() {
  const [selectedId, setSelectedId] = useState(experiences[0].id);

  const selectedExperience = experiences.find((exp) => exp.id === selectedId);

  return (
    <section
      id="experience"
      className="container mx-auto px-5 py-12 flex flex-col items-center"
    >
      <div className="text-center mb-20">
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-secondary mb-4">
          Experience
          <div className="mt-2 justify-center">
            <hr className="border-t-4 border-complement rounded-full w-24 mx-auto" />
          </div>
        </h1>
      </div>
      <div className="flex flex-wrap -m-4 w-full">
        <div className="w-full md:w-1/4 mb-8 md:mb-0">
          <div className="flex flex-col space-y-4">
            {experiences.map((internship, index) => (
              <button
                key={index}
                onClick={() => setSelectedId(internship.id)}
                className={`text-left text-lg font-medium hover:text-white ${
                  selectedId === internship.id ? "text-complement" : "text-text"
                }`}
              >
                {internship.company} - {internship.position}
              </button>
            ))}
          </div>
        </div>
        <div className="w-full md:w-3/4 px-4">
          <div className="h-full bg-primary bg-opacity-90 px-8 rounded">
            <h2 className="text-secondary text-lg title-font font-medium mb-3">
              {selectedExperience!.position}{" "}
              <span className="text-complement">
                @ {selectedExperience!.company}
              </span>
            </h2>
            <h3 className="text-accent mb-3">{selectedExperience!.date}</h3>
            <ul className="leading-relaxed text-secondary mb-3 list-disc list-inside">
              {selectedExperience!.desc.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
