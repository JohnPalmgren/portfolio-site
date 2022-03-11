import React, { Fragment, useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { subtitle, list, listItem, hide } from "./sharedCardStyles.module.css";
import ProjectItemCard from "./ProjectItemCard";

import windBnbImg from "../../../images/wind-bnb.png";
import foodAppImg from "../../../images/food-app.png";
import kanbanImg from "../../../images/kanban-board.png";
import passwordImg from "../../../images/password-manager.png";
import cardGameImg from "../../../images/card-game.png";
import pythonImg from "../../../images/python.jpg";
import ComputerVisionImg from "../../../images/computer-vision.png";
import weatherAppImg from "../../../images/weather-app.png";
import colorImg from "../../../images/color.png"
import reqResImg from "../../../images/req-res.png"
import jamdownImg from "../../../images/jamdown.png"

const projectsData = [
  {
    name: "Color Browser",
    code: "https://github.com/JohnPalmgren/color-browser",
    link: "https://johnpalmgren.github.io/color-browser/",
    date: "2022",
    languages: ["React", "JavaScript", "JSON", "CSS", "HTML"],
    image: colorImg,
  },
  {
    name: "REQ|RES RESTful API",
    code: "https://github.com/JohnPalmgren/REQ-RES-REST-API",
    link: "https://johnpalmgren.github.io/REQ-RES-REST-API/",
    date: "2022",
    languages: ["React", "JavaScript", "REST API", "CSS", "HTML"],
    image: reqResImg,
  },
  {
    name: "Jamdown Fusion",
    code: "https://github.com/JohnPalmgren/JamdownFusion",
    link: "hhttps://jamdownfusion.com/",
    date: "2022",
    languages: [
      "React",
      "JavaScript",
      "REST API",
      "Contentful CMS",
      "CSS",
      "HTML",
    ],
    image: jamdownImg,
  },
  {
    name: "Holiday room finder",
    code: "https://github.com/JohnPalmgren/Windbnb#built-with",
    link: "https://JohnPalmgren.github.io/Windbnb/",
    date: "2021",
    languages: ["React", "JavaScript", "CSS", "HTML"],
    image: windBnbImg,
  },
  {
    name: "Food ordering app",
    code: "https://github.com/JohnPalmgren/Food-delivery-web-app",
    link: "https://JohnPalmgren.github.io/Food-delivery-web-app/",
    date: "2021",
    languages: ["React", "JavaScript", "CSS", "HTML"],
    image: foodAppImg,
  },
  {
    name: "Kanban Board",
    code: "https://github.com/JohnPalmgren/kanban-board",
    link: "https://JohnPalmgren.github.io/kanban-board/",
    date: "2021",
    languages: ["React", "JavaScript", "CSS", "HTML"],
    image: kanbanImg,
  },
  {
    name: "Password Manager",
    code: "https://github.com/JohnPalmgren/password-manager",
    link: "https://JohnPalmgren.github.io/password-manager/",
    date: "2021",
    languages: ["JavaScript", "CSS", "HTML"],
    image: passwordImg,
  },
  {
    name: "Card Matching Game",
    code: "https://github.com/JohnPalmgren/Card-Matching-Game",
    link: "https://JohnPalmgren.github.io/Card-Matching-Game/",
    date: "2021",
    languages: ["JavaScript", "CSS", "HTML"],
    image: cardGameImg,
  },
  {
    name: "Computer Vision",
    code: "https://github.com/JohnPalmgren/computer-vision-coin-detection",
    link: "none",
    date: "2020",
    languages: ["Python", "OpenCV"],
    image: ComputerVisionImg,
  },
  {
    name: "Weather Forecast",
    code: "https://github.com/JohnPalmgren/Weather-Forecast-App",
    link: "none",
    date: "2020",
    languages: ["Python", "Tkinter"],
    image: weatherAppImg,
  },
  {
    name: "Word analysis in speeches",
    code: "https://github.com/JohnPalmgren/Political_Speech_Word_Counter",
    link: "none",
    date: "2020",
    languages: ["Python", "SQL"],
    image: pythonImg,
  },
];

const Projects = () => {
  const { ref, inView, entry } = useInView({ threshold: 0 });
  const [onView, setOnView] = useState(false);

  let animationDelay = 0;

  const changeDelay = () => {
    animationDelay += 500;
    return `${animationDelay.toString()}ms`;
  };

  /*
    Sets onView to true the first time the ref (ul) enters the viewport
    Apply animation class to li only the first time it comes in view
    */
  useEffect(() => {
    if (inView) {
      setOnView(true);
    }
  }, [inView]);

  const projects = projectsData.map((item, i) => {
    const delay = changeDelay();
    return (
      <li
        style={inView ? { animationDelay: delay } : null}
        className={onView ? listItem : hide}
        key={i}
      >
        <ProjectItemCard
          name={item.name}
          code={item.code}
          link={item.link}
          date={item.date}
          languages={item.languages}
          image={item.image}
        />
      </li>
    );
  });

  return (
    <Fragment>
      <h3 className={subtitle}>Projects</h3>
      <ul className={list} ref={ref}>
        {projects}
      </ul>
    </Fragment>
  );
};

export default Projects;
