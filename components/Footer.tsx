import React from "react";

export default function Footer() {
  return (
    <footer className="text-gray-400 bg-indigo-500 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
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
        <p className="text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">
          © 2021 Tajwar Rahman - All icons used were from
          <a href="https://icons8.com/" target="_blank">
            {" "}
            <b>Icons8</b>{" "}
          </a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a
            className="ml-3 text-gray-400"
            href="mailto:tajwarr.cs@gmail.com"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="24"
              height="24"
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
                <g fill="#312e81">
                  <path d="M28.66667,28.66667c-7.91917,0 -14.33333,6.41417 -14.33333,14.33333v86c0,7.91917 6.41417,14.33333 14.33333,14.33333h114.66667c7.91917,0 14.33333,-6.41417 14.33333,-14.33333v-86c0,-7.91917 -6.41417,-14.33333 -14.33333,-14.33333zM40.11654,43h91.76693l-45.88347,28.66667zM35.83333,61.8265l50.16667,31.34017l50.16667,-31.34017v67.1735h-100.33333z"></path>
                </g>
              </g>
            </svg>
          </a>
          <a
            className="ml-3 text-gray-400"
            href="https://github.com/thetajwar2003"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="24"
              height="24"
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
                <g fill="#312e81">
                  <path d="M78.11667,15.05c-32.96667,3.58333 -59.48333,30.1 -63.06667,62.35c-3.58333,33.68333 15.76667,63.78333 45.15,75.25c2.15,0.71667 4.3,-0.71667 4.3,-3.58333v-11.46667c0,0 -2.86667,0.71667 -6.45,0.71667c-10.03333,0 -14.33333,-8.6 -15.05,-13.61667c-0.71667,-2.86667 -2.15,-5.01667 -4.3,-7.16667c-2.15,-0.71667 -2.86667,-0.71667 -2.86667,-1.43333c0,-1.43333 2.15,-1.43333 2.86667,-1.43333c4.3,0 7.88333,5.01667 9.31667,7.16667c3.58333,5.73333 7.88333,7.16667 10.03333,7.16667c2.86667,0 5.01667,-0.71667 6.45,-1.43333c0.71667,-5.01667 2.86667,-10.03333 7.16667,-12.9c-16.48333,-3.58333 -28.66667,-12.9 -28.66667,-28.66667c0,-7.88333 3.58333,-15.76667 8.6,-21.5c-0.71667,-1.43333 -1.43333,-5.01667 -1.43333,-10.03333c0,-2.86667 0,-7.16667 2.15,-11.46667c0,0 10.03333,0 20.06667,9.31667c3.58333,-1.43333 8.6,-2.15 13.61667,-2.15c5.01667,0 10.03333,0.71667 14.33333,2.15c9.31667,-9.31667 20.06667,-9.31667 20.06667,-9.31667c1.43333,4.3 1.43333,8.6 1.43333,11.46667c0,5.73333 -0.71667,8.6 -1.43333,10.03333c5.01667,5.73333 8.6,12.9 8.6,21.5c0,15.76667 -12.18333,25.08333 -28.66667,28.66667c4.3,3.58333 7.16667,10.03333 7.16667,16.48333v18.63333c0,2.15 2.15,4.3 5.01667,3.58333c26.51667,-10.75 45.15,-36.55 45.15,-66.65c0,-43 -36.55,-76.68333 -79.55,-71.66667z"></path>
                </g>
              </g>
            </svg>
          </a>
          <a
            className="ml-3 text-gray-400"
            href="https://www.linkedin.com/in/tajwar-rahman-aa30851a3/"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="24"
              height="24"
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
                <g fill="#312e81">
                  <path d="M150.5,21.5h-129v129h129zM64.5,121.83333h-18.0815v-50.16667h18.0815zM55.14033,62.47183c-5.5255,0 -9.21633,-3.68367 -9.21633,-8.6c0,-4.91633 3.68367,-8.6 9.8255,-8.6c5.5255,0 9.21633,3.68367 9.21633,8.6c0,4.91633 -3.68367,8.6 -9.8255,8.6zM129,121.83333h-17.501v-27.41967c0,-7.58233 -4.6655,-9.331 -6.41417,-9.331c-1.74867,0 -7.58233,1.16817 -7.58233,9.331c0,1.16817 0,27.41967 0,27.41967h-18.0815v-50.16667h18.0815v7.00183c2.32917,-4.085 6.99467,-7.00183 15.74517,-7.00183c8.7505,0 15.75233,7.00183 15.75233,22.747z"></path>
                </g>
              </g>
            </svg>
          </a>
        </span>
      </div>
    </footer>
  );
}
