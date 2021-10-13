import React from "react"
import { Fragment } from "react"
import { subtitle, list, listItem } from "./Projects.module.css"
import foodAppImg from "../../images/food-app.png"
import kanbanImg from "../../images/kanban-board.png"
import passwordImg from "../../images/password-manager.png"
import cardGameImg from "../../images/card-game.png"
import pythonImg from "../../images/python.jpg"
import ComputerVisionImg from "../../images/computer-vision.png"
import weatherAppImg from "../../images/weather-app.png"
import ProjectItemCard from "./ProjectItemCard"

const projectsData = [
  {
    name: "Food ordering app",
    code: "https://github.com/eniac01/Food-delivery-web-app",
    link: "https://eniac01.github.io/Food-delivery-web-app/",
    date: "2021",
    languages: ["React", "JavaScript", "CSS", "HTML"],
    image: foodAppImg,
  },
  {
    name: "Kanban Board",
    code: "https://github.com/eniac01",
    link: "https://eniac01.github.io/kanban-board/",
    date: "2021",
    languages: ["React", "JavaScript", "CSS", "HTML"],
    image: kanbanImg,
  },
  {
    name: "Password Manager",
    code: "https://github.com/eniac01/password-manager",
    link: "https://eniac01.github.io/password-manager/",
    date: "2021",
    languages: ["JavaScript", "CSS", "HTML"],
    image: passwordImg,
  },
  {
    name: "Card Matching Game",
    code: "https://github.com/eniac01/Card-Matching-Game",
    link: "https://eniac01.github.io/Card-Matching-Game/",
    date: "2021",
    languages: ["JavaScript", "CSS", "HTML"],
    image: cardGameImg,
  },
  {
    name: "Computer Vision",
    code: "https://github.com/eniac01/computer-vision-coin-detection",
    link: "none",
    date: "2020",
    languages: ["Python", "OpenCV"],
    image: ComputerVisionImg,
  },
  {
    name: "Weather Forecast",
    code: "https://github.com/eniac01/Weather-Forecast-App",
    link: "none",
    date: "2020",
    languages: ["Python", "Tkinter"],
    image: weatherAppImg,
  },
  {
    name: "Word analysis in speeches",
    code: "https://github.com/eniac01/Political_Speech_Word_Counter",
    link: "none",
    date: "2020",
    languages: ["Python", "SQL"],
    image: pythonImg,
  },
];

const Projects = () => {

  const projects = projectsData.map((item) => {
    return (
        <li className={listItem}
            key={Math.random()}>
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