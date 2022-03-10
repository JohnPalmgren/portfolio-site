import React from "react";
import { Link } from "gatsby"
import { container, box, content, gif, list, templateHeading, heading, buttons } from "./FeaturedProject.module.css";
import jamdownGif from "../../images/jamdown.gif"
import windbnbGif from "../../images/windbnb.gif"
import canban from "../../images/canban.gif"
import more from "../../images/more.png"

const ProjectTemplate = ({title, image, features, live, github}) => {
  return (
    <div className={container}>
      <div className={box}>
        <h2 className={templateHeading}>{title}</h2>
        <div className={content}>
          <img src={image} alt="site preview GIF" className={gif} />
          <ul className={list}>
            {features.map((item) => {
              return <li>{item}</li>;
            })}
          </ul>
        </div>
        <div className={buttons}>
          <button>
            <a href={live} target="_blank" rel="noopener noreferrer">
              Live Site
            </a>
          </button>
          <button>
            <a href={github} target="_blank" rel="noopener noreferrer">Github</a>
          </button>
        </div>
      </div>
    </div>
  );
};

const FeaturedProjects = () => {
  return (
    <>
      <h1 className={heading}>Featured Projects</h1>
      <ProjectTemplate
        title={"Jamdown Fusion Food Business"}
        image={jamdownGif}
        features={[
          "Created using React",
          "Contentful CMS",
          "Hosted with Firebase",
          "Client added content managed with REST API",
        ]}
        live={"https://jamdownfusion.com/"}
        github={"https://github.com/JohnPalmgren/JamdownFusion"}
      />
      <ProjectTemplate
        title={"Windbnb"}
        image={windbnbGif}
        features={[
          "Created using React",
          "Made to a brief from DevChallenges",
          "Interactive web page with responsive design",
        ]}
        live={"https://johnpalmgren.github.io/Windbnb/"}
        github={"https://github.com/JohnPalmgren/Windbnb"}
      />
      <ProjectTemplate
        title={"Canban Board"}
        image={canban}
        features={[
          "Created using React",
          "Drag and Drop UX",
          "Made with React Beautiful Dnd package",
        ]}
        live={"https://johnpalmgren.github.io/kanban-board/"}
        github={"https://github.com/JohnPalmgren/kanban-board"}
      />
      <div className={container}>
        <div className={box}>
          <h2 className={templateHeading}>See More</h2>
          <div className={content}>
            <img src={more} alt="collage of projects" className={gif} />
            <ul className={list}>
              <li>Password manager</li>
              <li>Food ordering app</li>
              <li>Card Matching game</li>
              <li>Weather forecast</li>
              <li>Computer vision</li>
              <li>and more</li>
            </ul>
          </div>
          <div className={buttons}>
            <button>
              <Link to="/projects">See all projects</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedProjects;
