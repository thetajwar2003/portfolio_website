import React from "react";
import Image from "next/image";
import me from "../../../../public/me.jpg";
import ExternalLinks from "../ExternalLinks";

export default function AboutMe() {
  return (
    <section
      id="about"
      className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center"
    >
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
          Hey, I'm Tajwar Rahman!
        </h1>
        <p className="mb-4 leading-relaxed">
          I'm a senior at the City College of New York, pursuing a Bachelor's in
          Computer Science. I love combining programming and math to build
          creative real-world applications. I specialize in creating Backend,
          Frontend, Mobile, Cloud, and DevOps applications. I'm always eager to
          learn something new every day! <br />
          <br /> Feel free to reach out to me through email or just message me
          on LinkedIn!
        </p>
        <ExternalLinks />
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 justify-center items-center flex">
        <Image
          src={me}
          height={480}
          width={480}
          alt="logo"
          className="rounded-full"
        />
      </div>
    </section>
  );
}
