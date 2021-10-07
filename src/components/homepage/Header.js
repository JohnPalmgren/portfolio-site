import React from "react";
import { header, title, subtitle, link } from "./Header.module.css";
import linkedInImg from "../../images/icons/linkedin.png"
import githubImg from "../../images/icons/github.png";
import emailImg from "../../images/icons/email.png";


const Header = () => {
  return (
    <div className={header}>
      <h1 className={title}>John Palmgren</h1>
      <h2 className={subtitle}>Web Developer</h2>
      <a className={link} title="Github" href="https://github.com/eniac01">
        <img src={githubImg} alt="github logo" height="48px" width="48px" />
      </a>
      <a className={link} title="LinkedIn" href="https://www.linkedin.com/in/john-p-6742aa40/">
        <img src={linkedInImg} alt="linkedIn logo" height="48px" width="48px" />
      </a>
      <a className={link} title="Email" href="mailto:addemail@newemail.com">
        <img src={emailImg} alt="email logo" height="48px" width="48px" />
      </a>
    </div>
  );
};

export default Header;
