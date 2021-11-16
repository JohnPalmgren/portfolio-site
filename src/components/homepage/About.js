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
          My greatest passion in life is learning new things whether that's
          programming languages, foreign languages, or learning about philosophy
          and psychology. My programming journey started 2 years ago when I
          started learning Python. I was immediately hooked and loved the
          creativity and problem solving involved with building my own tools.
          Since then I have discovered the world of web development and I've 
          fallen in love with building stuff for the web. I have built web pages,
          games and web apps using a number of technologies. I'm currently having lots of 
          fun building things in React. 

        </p>
        {/* </Card> */}
      </div>
    </Fragment>
  );
};

export default About;
