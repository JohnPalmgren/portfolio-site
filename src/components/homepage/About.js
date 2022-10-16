import React, { Fragment } from "react";
import profileImg from "../../images/face.png"
import { subtitle, paragraph, background, contentWrapper, flexContainer, image } from "./About.module.css";

const About = () => {
  return (
    <Fragment>
      <div className={background}></div>
      <div className={flexContainer}>
        <div className={contentWrapper}>
          <h3 className={subtitle}>About me</h3>
          <p className={paragraph}>
            I'm a software developer who works with Angular, Typescript, Node,
            and AWS. I also have experience with React and other web
            technologies. Learning and self-development are important to me.
            Whether that's learning new technologies or learning a foreign
            language. When I'm not working I enjoy rock climbing, cycling,
            swimming, and playing squash.
          </p>

          <h3 className={subtitle}>What I'm doing now</h3>
          <p className={paragraph}>
            I'm currently building a website in React that will help people who
            want to learn English as a second language find resources that will
            help them.
          </p>
        </div>
        <img alt="profile image" src={profileImg} className={image} />
      </div>
    </Fragment>
  );
};

export default About;
