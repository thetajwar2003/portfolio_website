import React from "react";

export default function Header() {
  return (
    <header className="text-gray-400 bg-indigo-500 body-font" id="head">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a
          className="flex title-font font-medium items-center text-white mb-4 md:mb-0"
          href="/"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="35"
            height="35"
            viewBox="0 0 172 172"
          >
            <g
              fill="none"
              fill-rule="nonzero"
              stroke="none"
              stroke-width="1"
              stroke-linecap="butt"
              stroke-linejoin="miter"
              stroke-miterlimit="10"
              stroke-dasharray=""
              stroke-dashoffset="0"
              font-family="none"
              font-weight="none"
              font-size="none"
              text-anchor="none"
            >
              <path d="M0,172v-172h172v172z" fill="none"></path>
              <g fill="#ffffff">
                <path d="M86,14.33333c-39.5815,0 -71.66667,32.08517 -71.66667,71.66667c0,39.5815 32.08517,71.66667 71.66667,71.66667c39.5815,0 71.66667,-32.08517 71.66667,-71.66667c0,-39.5815 -32.08517,-71.66667 -71.66667,-71.66667zM109.29167,64.60033h-17.91667v51.95833c0,2.97058 -2.40442,5.375 -5.375,5.375c-2.97058,0 -5.375,-2.40442 -5.375,-5.375v-51.95833h-17.91667c-2.97058,0 -5.375,-2.40442 -5.375,-5.375c0,-2.97058 2.40442,-5.375 5.375,-5.375h46.58333c2.97058,0 5.375,2.40442 5.375,5.375c0,2.97058 -2.40442,5.375 -5.375,5.375z"></path>
              </g>
            </g>
          </svg>
          <span className="ml-3 text-xl">Tajwar Rahman</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 text-white hover:text-indigo-900" href="#about">
            About Me
          </a>
          <a className="mr-5 text-white hover:text-indigo-900" href="#skills">
            Skills
          </a>
          <a
            className="mr-5 text-white hover:text-indigo-900 smooth-scroll"
            href="#exp"
            data-duration="2000"
          >
            Experience
          </a>
          <a className="mr-5 text-white hover:text-indigo-900" href="#proj">
            Projects
          </a>
          <a className="mr-5 text-white hover:text-indigo-900" href="#contact">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
