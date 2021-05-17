import React from "react";

export default function Contact() {
  return (
    <section
      className="text-gray-400 bg-gray-900 body-font relative"
      id="contact"
    >
      <div className="container px-5 pb-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
            Get In Touch
            <div className="mt-2 justify-center">
              <hr
                style={{
                  borderTop: "4px solid",
                  color: "#423aca",
                  borderRadius: "15px",
                  width: "165px",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              />
            </div>
          </h1>
          <p className="lg:w-1/3 mx-auto leading-relaxed text-base">
            I'm currently looking for any new opportunities, feel free to email
            me. Whether you have a question or just want to say hi, my inbox is
            always open. I'll try my best to get back to you!
          </p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-full">
              <a href="mailto:rahmantajwar131@gmail.com" target="_blank">
                <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Send a Message
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
