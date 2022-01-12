import React from "react";
import { Fragment } from "react";
import { header, title, subtitle, link, image, flexContainer } from "./Header.module.css";
import linkedInImg from "../../images/icons/linkedin.png";
import githubImg from "../../images/icons/github.png";
import emailImg from "../../images/icons/email.png";
import profileImg from "../../images/face.png";

const Header = () => {
  return (
    <div className={flexContainer}>
      <img alt="profile image" src={profileImg} className={image} />
      <div className={header}>
        <h1 className={title}>John Palmgren</h1>
        <h2 className={subtitle}>Web Developer</h2>
        <a
          className={link}
          title="Github"
          href="https://github.com/eniac01"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={githubImg} alt="github logo" height="48px" width="48px" />
        </a>
        <a
          className={link}
          title="LinkedIn"
          href="https://www.linkedin.com/in/john-p-6742aa40/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={linkedInImg}
            alt="linkedIn logo"
            height="48px"
            width="48px"
          />
        </a>
        <a
          className={link}
          title="Email"
          href="mailto:johnpalmgrendev@outlook.com"
        >
          <img src={emailImg} alt="email logo" height="48px" width="48px" />
        </a>
      </div>
    </div>
  );
};

export default Header;
