import React, { Fragment } from "react"
import { subtitle, wrapper, paragraph } from "./CurrentProject.module.css"

const CurrentProject = () => {
    return (
      <Fragment>
        <h3 className={subtitle}>What I'm doing now</h3>
        <div className={wrapper}>
        <p className={paragraph}>I'm currently using Python, Flask and React to build a 
        bluetooth speaker system with my raspberry pi. When I'm not doing this I'm doing
        a deep dive into React in a Udemy course. 
        </p>
        </div>
      </Fragment>
    );
}

export default CurrentProject