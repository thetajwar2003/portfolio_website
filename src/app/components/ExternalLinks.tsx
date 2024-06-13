import Link from "next/link";
import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function ExternalLinks() {
  return (
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <Link
        className="ml-3 text-complement hover:text-secondary"
        href="mailto:tajwarr.cs@gmail.com"
        target="_blank"
      >
        <FaEnvelope />
      </Link>
      <Link
        className="ml-3 text-complement hover:text-secondary"
        href="https://github.com/thetajwar2003"
        target="_blank"
      >
        <FaGithub />
      </Link>
      <Link
        className="ml-3 text-complement hover:text-secondary"
        href="https://www.linkedin.com/in/tajwar-rahman-aa30851a3/"
        target="_blank"
      >
        <FaLinkedin />
      </Link>
    </span>
  );
}
