import React from "react";
import AboutMe from "./components/sections/AboutMe";
import Skills from "./components/sections/Skills";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";

export default function Home() {
  return (
    <main>
      <AboutMe />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}
