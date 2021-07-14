import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Header from "../components/Header";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Skills from "./Skills";
import Footer from "../components/Footer";
import Experience from "./Experience";
import Contact from "./Contact";
import Education from "./Education";
import data from "../data.json";

export default function Home() {
  return (
    <>
      <Head>
        {/* Open graph meta */}
        <title>Tajwar Rahman</title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Tajwar Rahman" />
        <meta
          property="og:description"
          content="My personal portfolio website."
        />
        <meta property="og:image" content={data.img} />
        <meta property="og:url" content="tajwarrahman.com" />
        <meta property="og:type" content="website" />
      </Head>
      <Header />
      <AboutMe />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </>
  );
}
