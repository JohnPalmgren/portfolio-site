import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  header,
  title,
  subtitle,
  link,
  flexContainer,
  svg,
  scrollButton
} from "./Header.module.css";
import scrollImage from "../../images/icons/scroll.png"
import githubImg from "../../images/icons/github.png";
import emailImg from "../../images/icons/email.png";
import profileImg from "../../images/face.png";

const Header = (props) => {
  return (
    <div className={flexContainer}>
      <div className={header}>
        <h1 className={title}>John Palmgren</h1>
        <h2 className={subtitle}>Web Developer</h2>
        <a
          className={link}
          title="Github"
          href="https://github.com/johnpalmgren"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} className={svg} />
        </a>
        <a
          className={link}
          title="LinkedIn"
          href="https://www.linkedin.com/in/johnpalmgren/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} className={svg} />
        </a>
        <a
          className={link}
          title="Twitter"
          href="https://twitter.com/john_palmgren"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faTwitter} className={svg} />
        </a>
        <a
          className={link}
          title="Email"
          href="mailto:contact@johnpalmgren.co.uk"
        >
          <FontAwesomeIcon icon={faEnvelope} className={svg} />
        </a>
      </div>
      <button onClick={props.aboutScroll} className={scrollButton} >
        <img src={scrollImage} alt="scroll" />
      </button>
    </div>
  );
};

export default Header;
