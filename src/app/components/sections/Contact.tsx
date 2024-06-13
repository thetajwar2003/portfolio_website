import Link from "next/link";
import React from "react";

export default function Contact() {
  return (
    <section className="body-font relative" id="contact">
      <div className="container px-5 py-12 pb-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
            Get In Touch
            <div className="mt-2 justify-center">
              <hr className="border-t-4 border-complement rounded-full w-24 mx-auto" />
            </div>
          </h1>
          <p className="mx-auto leading-relaxed text-base">
            Whether you have a question or just want to say hi, my inbox is
            always open. I'll try my best to get back to you!
          </p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-full">
              <Link href="mailto:tajwarr.cs@gmail.com" target="_blank">
                <button className="flex mx-auto text-white bg-complement border-0 py-2 px-8 focus:outline-none hover:bg-gray-900 rounded text-lg">
                  Send a Message
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
