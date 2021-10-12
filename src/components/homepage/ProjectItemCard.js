import React from "react";
import Card from "../UI/Card";
import gitHub from "../../images/icons/github.png";
import globe from "../../images/icons/globe.png";
import {
  name,
  wrappingDiv,
  img,
  codeLink,
  liveLink,
  date,
  languagesHeading,
  languageList,
  languageWrapper,
} from "./ProjectItemCard.module.css";

const ProjectItemCard = (props) => {

  let liveSite = props.link !== "none";

  const languages = props.languages.map((item) => {
    return <li key={Math.random()}>{item}</li>;
  });

  return (
    <Card>
      <div className={wrappingDiv}>
        <div className={date}>{props.date}</div>
        <h4 className={name}>{props.name}</h4>
        {liveSite ? (
          <a
            className={liveLink}
            title="live site"
            href={props.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img alt="live site" src={globe} />
          </a>
        ) : (
          <span></span>
        )}
        <a
          className={codeLink}
          title="code"
          href={props.code}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img alt="github" src={gitHub} />
        </a>
        <div className={languageWrapper}>
          <h5 className={languagesHeading}>Languages</h5>
          <ul className={languageList}>{languages}</ul>
        </div>
        <div>{props.description}</div>
        <img className={img} alt={props.name} src={props.image} />
      </div>
    </Card>
  );
};

export default ProjectItemCard;
