import * as React from "react";
import Layout from "../components/UI/Layout";
import Header from "../components/homepage/Header"
import Nav from "../components/homepage/Nav"
import Projects from "../components/homepage/Projects";
import About from "../components/homepage/About";
import Footer from "../components/homepage/Footer";
 
const IndexPage = () => {
  return (
    <Layout pageTitle="John Palmgren">
      <Nav />
      <Header />
      <About />
      <Projects />
      <Footer />
    </Layout>
  );
};

export default IndexPage;
