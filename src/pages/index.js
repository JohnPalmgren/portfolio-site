import * as React from "react";
import { useRef } from "react";
import Layout from "../components/UI/Layout";
import Video from "../components/UI/Video"
import Header from "../components/homepage/Header";
import Nav from "../components/homepage/Nav";
import Projects from "../components/homepage/cards/Projects";
import Writing from "../components/homepage/cards/Writing";
import Courses from "../components/homepage/cards/Courses";
import About from "../components/homepage/About";
import Footer from "../components/homepage/Footer";

const IndexPage = () => {
  const scrollToProjects = useRef();
  const scrollToAbout = useRef();
  const scrollToWriting = useRef();
  const scrollToCourses = useRef();

  const projectScrollEvent = () => {
    scrollToProjects.current.scrollIntoView({ behavior: "smooth" });
  };

  const aboutScrollEvent = () => {
    scrollToAbout.current.scrollIntoView({ behavior: "smooth" });
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
      {/* scroll to not accurate */}
      <Nav
        projectScroll={projectScrollEvent}
        aboutScroll={aboutScrollEvent}
        writingScroll={writingScrollEvent}
        coursesScroll={coursesScrollEvent}
      />
      <Header />
      <div ref={scrollToAbout}></div>
      <About />
      <div ref={scrollToProjects}></div>
      <Projects />
      <div ref={scrollToWriting}></div>
      <Writing />
      <div ref={scrollToCourses}></div>
      <Courses />
      <Footer />
    </Layout>
  );
};

export default IndexPage;
