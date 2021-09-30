import React from "react"
import { Fragment } from "react"
import { subtitle, list } from "./Projects.module.css"
import foodAppImg from "../../images/food-app.png"
import ProjectItemCard from "./ProjectItemCard"

const projectsData = [
  {
    name: "Food ordering app",
    code: "https://github.com/eniac01/Food-delivery-web-app",
    link: "#",
    date: "2021",
    languages: ["React", "JavaScript", "CSS", "HTML"],
    image: foodAppImg,
    description: "",
  },
  {
    name: "Food ordering app",
    code: "https://github.com/eniac01/Food-delivery-web-app",
    link: "#",
    date: "2021",
    languages: ["React", "JavaScript", "CSS", "HTML"],
    image: foodAppImg,
    description: "",
  },
];

const Projects = () => {

  const projects = projectsData.map((item) => {
    return (
        <li key={Math.random}>
            <ProjectItemCard
            name={item.name}
            code={item.code}
            link={item.link}
            date={item.date}
            languages={item.languages}
            image={item.image}
            description={item.description}
            />
          </li>
  )})                

    return (
      <Fragment>
        <h3 className={subtitle}>Projects</h3>
        <ul className={list}>
          {projects}
        </ul>
      </Fragment>
    );
}

export default Projects