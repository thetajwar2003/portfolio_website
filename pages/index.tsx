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

export default function Home() {
  return (
    <Head>
      {/* Open graph meta */}
      <title>Tajwar Rahman</title>
      <meta property="og:title" content="Tajwar Rahman" />
      <meta
        property="og:description"
        content="This is my personal portfolio website."
      />
      <meta
        property="og:image"
        content="https://lh3.googleusercontent.com/d/1EinmYzeq0lkiB-aENS4tzBvEeTEgkeGt"
      />
      <meta property="og:url" content="tajwarrahman.com" />
      <meta property="og:type" content="website" />
      <Header />
      <AboutMe />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </Head>
  );
}
