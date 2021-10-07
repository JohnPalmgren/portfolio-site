import React from "react";
import { footer, content, socialMedia } from "./Footer.module.css";
import gatsbyLogo from "../../images/gatsby-logo.png"
import githubLogo from "../../images/icons/github-white.png" 
import linkedInLogo from "../../images/icons/linkedin-white.png"
import emailLogo from "../../images/icons/email-white.png"

const Footer = () => {
  return (
    <div className={footer}>
      <span className={content}>
        <span>John Palmgren Portfolio — Powered by</span>
        <a href="https://www.gatsbyjs.com/">
          <img src={gatsbyLogo} alt="Gatsby Logo" width="100"></img>
        </a>
      </span>
      <span className={socialMedia}>
        <a title="Github" href="https://github.com/eniac01">
          <img src={githubLogo} alt="github logo" height="28" width="28" />
        </a>
        <a
          title="LinkedIn"
          href="https://www.linkedin.com/in/john-p-6742aa40/"
        >
          <img
            src={linkedInLogo}
            alt="linkedIn logo"
            height="28"
            width="28"
          />
        </a>
        <a title="Email" href="mailto:addemail@newemail.com">
          <img src={emailLogo} alt="email logo" height="28" width="28" />
        </a>
      </span>
    </div>
  );
};

export default Footer;
