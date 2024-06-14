import React from "react";
import TLogo from "./TLogo";
import Link from "next/link";
import ExternalLinks from "./ExternalLinks";

export default function Footer() {
  return (
    <footer className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <Link
          href="/"
          className="flex title-font font-medium items-center md:justify-start justify-center text-white"
        >
          <TLogo />
          <span className="ml-3 text-xl">Tajwar Rahman</span>
        </Link>
        <p className="text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">
          © 2024 Tajwar Rahman | Media Query Note: This site dynamically changes
          its layout for any screen size
        </p>
        <ExternalLinks />
      </div>
    </footer>
  );
}
