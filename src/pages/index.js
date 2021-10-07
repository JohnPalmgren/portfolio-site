import * as React from "react";
import { useRef } from "react";
import Layout from "../components/UI/Layout";
import Header from "../components/homepage/Header";
import Nav from "../components/homepage/Nav";
import Projects from "../components/homepage/Projects";
import About from "../components/homepage/About";
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
      <Projects />
      <Footer />
    </Layout>
  );
};

export default IndexPage;
