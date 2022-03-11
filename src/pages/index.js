import * as React from "react";
import { useRef, Fragment } from "react";
import Layout from "../components/UI/Layout";
import Video from "../components/UI/Video"
import Header from "../components/homepage/Header";
import Nav from "../components/homepage/Nav";
import About from "../components/homepage/About";
import Skills from "../components/homepage/Skills"
import Footer from "../components/UI/Footer";
import FeaturedProjects from "../components/homepage/FeaturedProjects";
import FeaturedWriting from "../components/homepage/FeaturedWriting";
import FeaturedCourses from "../components/homepage/FeaturedCourses";

const IndexPage = () => {
  const scrollToProjects = useRef();
  const scrollToAbout = useRef();
  const scrollToSkills = useRef()
  const scrollToWriting = useRef();
  const scrollToCourses = useRef();

  const projectScrollEvent = () => {
    scrollToProjects.current.scrollIntoView({ behavior: "smooth" });
  };

  const aboutScrollEvent = () => {
    scrollToAbout.current.scrollIntoView({ behavior: "smooth" });
  };

  const skillsScrollEvent = () => {
    scrollToSkills.current.scrollIntoView({ behavior: "smooth" });
  };

  const writingScrollEvent = () => {
    scrollToWriting.current.scrollIntoView({ behavior: "smooth" });
  };

  const coursesScrollEvent = () => {
    scrollToCourses.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Layout pageTitle="John Palmgren">
      <Video />
      <Nav
        projectScroll={projectScrollEvent}
        aboutScroll={aboutScrollEvent}
        skillsScroll={skillsScrollEvent}
        writingScroll={writingScrollEvent}
        coursesScroll={coursesScrollEvent}
      />
      <Header aboutScroll={aboutScrollEvent} />
      <div ref={scrollToAbout}></div>
      <About />
      <div ref={scrollToSkills}></div>
      <Skills />
      <div ref={scrollToProjects}></div>
      <FeaturedProjects />
      <div ref={scrollToWriting}></div>
      <FeaturedWriting />
      <div ref={scrollToCourses}></div>
      <FeaturedCourses />
      <Footer />
    </Layout>
  );
};

export default IndexPage;
