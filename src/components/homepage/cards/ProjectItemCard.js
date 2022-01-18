import React from "react";
import Card from "../../UI/Card";
import { faGit, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { wrappingDiv } from "./sharedCardItemStyles.module.css"
import {
  name,
  img,
  codeLink,
  liveLink,
  date,
  languagesHeading,
  languageList,
  languageWrapper,
  fa,
  flexContainer
} from "./ProjectItemCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
            <FontAwesomeIcon icon={faGlobe} size="2x" className={fa} />
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
          <FontAwesomeIcon icon={faGithub} size="2x" className={fa} />
        </a>
        <div className={flexContainer}>
          <img className={img} alt={props.name} src={props.image} />
          <ul className={languageList}>{languages}</ul>
        </div>
      </div>
    </Card>
  );
};

export default ProjectItemCard;
