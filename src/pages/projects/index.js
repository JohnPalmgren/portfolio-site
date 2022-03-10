import React from "react";
import Projects from "../../components/homepage/cards/Projects";
import { navigate } from "gatsby";
import Layout from "../../components/UI/Layout";
import GenNav from "../../components/UI/GenNav";
import Footer from "../../components/UI/Footer";


const ProjectPage = () => {

  const clickHandler = () => {
    navigate("/");
  };

  return (
    <Layout pageTitle="Projects">
      <GenNav>
        <li>
          <button onClick={clickHandler}>Home</button>
        </li>
      </GenNav>
      <Projects />
      <Footer />
    </Layout>
  );
};

export default ProjectPage;
