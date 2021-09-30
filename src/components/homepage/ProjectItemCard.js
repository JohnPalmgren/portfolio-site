import React from "react";
import Card from "../UI/Card";
import gitHub from "../../images/github.png"
import globe from "../../images/globe.png"
import { wrappingDiv, img, codeLink, liveLink } from "./ProjectItemCard.module.css"

const ProjectItemCard = (props) => {
  return (
    <div className={wrappingDiv}>
      <Card>
        <div>{props.name}</div>
        <a className={codeLink} title="code" href={props.code}>
          <img alt="github" src={gitHub} />
        </a>
        <a className={liveLink} title="live site" href={props.link}>
          <img alt="live site" src={globe} />
        </a>
        <div>{props.date}</div>
        <div>{props.languages}</div>
        <div>{props.description}</div>
        <img className={img} alt={props.name} src={props.image} />
      </Card>
    </div>
  );
};

export default ProjectItemCard