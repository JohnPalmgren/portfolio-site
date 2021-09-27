import * as React from "react";
import Layout from "../components/UI/Layout";
import Header from "../components/homepage/Header"
import Nav from "../components/homepage/Nav"
import Projects from "../components/homepage/Projects";
import { background } from "./index.module.css"
 
const IndexPage = () => {
  return (
    <div className={background}>
      <Layout pageTitle="John Palmgren">
        <Nav />
        <Header />
        <h3>About me</h3>
        <p>
          I am highly motivated web developer. I enjoy learning new programming
          concepts and have lots of experience working with other people in
          previous jobs. I spend a minimum of 14 hours a week developing my
          programming skills through courses and projects alongside my day-job.
          I have completed 15 courses in Python and web development. I am also
          part of an online community where I give and receive feedback on
          coding problems and projects.
        </p>
        <Projects />

      </Layout>
    </div>
  );
};

export default IndexPage;
