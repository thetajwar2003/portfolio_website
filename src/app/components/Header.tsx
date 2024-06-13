import Link from "next/link";
import React from "react";
import TLogo from "./TLogo";

export default function Header() {
  return (
    <header className="text-gray-400 bg-gray-900 body-font sticky top-0">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          href="/"
          className="flex title-font font-medium items-center text-white mb-4 md:mb-0"
        >
          <TLogo />
          <span className="ml-3 text-xl">Tajwar Rahman</span>
        </Link>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <Link className="mr-5 hover:text-white" href="#about">
            About Me
          </Link>
          <Link className="mr-5 hover:text-white" href="#skills">
            Skills
          </Link>
          <Link className="mr-5 hover:text-white" href="#experience">
            Experience
          </Link>
          <Link className="mr-5 hover:text-white" href="#projects">
            Projects
          </Link>
          <Link className="mr-5 hover:text-white" href="#contact">
            Contact
          </Link>
          <Link
            className="mr-5 hover:text-white"
            href="resume.pdf"
            target="_blank"
          >
            Resume
          </Link>
        </nav>
      </div>
    </header>
  );
}
