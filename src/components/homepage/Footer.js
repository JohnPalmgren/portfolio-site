import React from "react";
import { footer, content, socialMedia, socialIcon } from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import gatsbyLogo from "../../images/icons/gatsbyLogo.png"
import githubLogo from "../../images/icons/github-white.png" 
import linkedInLogo from "../../images/icons/linkedin-white.png"
import emailLogo from "../../images/icons/email-white.png"

const Footer = () => {
  return (
    <div className={footer}>
      <span className={content}>
        <p>Powered by</p>
        <a
          href="https://www.gatsbyjs.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={gatsbyLogo} alt="Gatsby Logo" width="120"></img>

        </a>
      </span>
      <span className={socialMedia}>
        <a
          title="Github"
          href="https://github.com/eniac01"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} className={socialIcon} />
        </a>
        <a
          title="LinkedIn"
          href="https://www.linkedin.com/in/john-p-6742aa40/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} className={socialIcon} />
        </a>
        <a
          title="Twitter"
          href="https://twitter.com/john_palmgren"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faTwitter} className={socialIcon} />
        </a>
        <a title="Email" href="mailto:johnpalmgrendev@outlook.com">
          <FontAwesomeIcon icon={faEnvelope} className={socialIcon} />
        </a>
      </span>
    </div>
  );
};

export default Footer;
