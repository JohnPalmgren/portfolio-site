import React, { Fragment } from "react";
import Card from "../UI/Card.js";
import { subtitle, paragraph, cardWrapper } from "./About.module.css";

const About = () => {
  return (
    <Fragment>
      <h3 className={subtitle}>About me</h3>
      <div className={cardWrapper}>
        {/* <Card> */}
          <p className={paragraph}>
            I am a highly motivated web developer. I enjoy learning new
            programming concepts and have lots of experience working with other
            people in previous jobs. I spend at least 14 hours a week developing
            my programming skills through courses and projects alongside my
            day-job. I have completed 15 courses in Python and web development.
            I am also part of an online community where I give and receive
            feedback on coding problems and projects. In January I will be
            attending a Bath Spa University Web Development Bootcamp.
          </p>
        {/* </Card> */}
      </div>
    </Fragment>
  );
};

export default About;
