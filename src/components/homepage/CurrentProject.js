import React, { Fragment } from "react";
import { subtitle, wrapper, paragraph } from "./CurrentProject.module.css";

const CurrentProject = () => {
  return (
    <Fragment>
      <h3 className={subtitle}>What I'm doing now</h3>
      <div className={wrapper}>
        <p className={paragraph}>
          I'm currently doing a web development bootcamp with Bath Spa
          University. When I'm not doing that I'm tinkering with my Raspberry
          Pi: building a hifi system with album art displayed on screen.
        </p>
      </div>
    </Fragment>
  );
};

export default CurrentProject;
