import React, { Fragment } from "react";
import profileImg from "../../images/face.png"
import { subtitle, paragraph, background, contentWrapper, flexContainer, image } from "./About.module.css";

const About = () => {
  return (
      <div className={flexContainer}>
      <div className={background}></div>
        <div className={contentWrapper}>
          <h3 className={subtitle}>About me</h3>
          <p className={paragraph}>
            My greatest passion in life is learning new things whether that's
            programming languages, foreign languages, or learning about
            philosophy and psychology. My programming journey started 2 years
            ago when I started learning Python. I was immediately hooked and
            loved the creativity and problem solving involved with building my
            own tools. Since then I have discovered the world of web development
            and I've fallen in love with building stuff for the web. I have
            built web pages, games and web apps using a number of technologies.
            I'm currently having lots of fun building things in React.
          </p>

          <h3 className={subtitle}>What I'm doing now</h3>
          <p className={paragraph}>
            I'm currently doing a web development bootcamp with Bath Spa
            University. When I'm not doing that I'm tinkering with my Raspberry
            Pi: building a hifi system with album information displayed on screen.
          </p>
        </div>
        <img alt="profile image" src={profileImg} className={image} />
      </div>
  );
};

export default About;
