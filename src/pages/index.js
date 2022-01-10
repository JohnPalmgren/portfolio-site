import * as React from "react";
import { useRef } from "react";
import Layout from "../components/UI/Layout";
import Header from "../components/homepage/Header";
import Nav from "../components/homepage/Nav";
import Projects from "../components/homepage/Projects";
import Writing from "../components/homepage/Writing";
import Courses from "../components/homepage/Courses"
import About from "../components/homepage/About";
import CurrentProject from "../components/homepage/CurrentProject"
import Footer from "../components/homepage/Footer";

const IndexPage = () => {
  const scrollToProjects = useRef();
  const scrollToAbout = useRef();

  const projectScrollEvent = () => {
    scrollToProjects.current.scrollIntoView({ behavior: "smooth" });
  };

  const aboutScrollEvent = () => {
    scrollToAbout.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <Layout pageTitle="John Palmgren">
      <Nav 
      projectScroll={projectScrollEvent}
      aboutScroll={aboutScrollEvent}
      />
      <Header />
      <div ref={scrollToAbout}></div>
      <About />
      <div ref={scrollToProjects}></div>
      <CurrentProject />
      <Projects />
      <Writing />
      <Courses />
      <Footer />
    </Layout>
  );
};

export default IndexPage;
