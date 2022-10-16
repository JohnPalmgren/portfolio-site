import React from "react";
import {
  flexContainer,
  creativity,
  communication,
  collaboration,
} from "./Skills.module.css";
import createIcon from "../../images/icons/creativity.png";
import comIcon from "../../images/icons/communication.png";
import colabIcon from "../../images/icons/collaboration.png";


const Skills = () => {
  return (
    <div className={flexContainer}>
      <div className={creativity}>
        <img src={createIcon} />
        <h2>Creativity</h2>
        <p>
          I have a degree in Creative Writing, where I honed my creative
          process. Whether writing or coding, I am confident in generating ideas
          and thinking outside the box.
        </p>
      </div>
      <div className={communication}>
        <img src={comIcon} />
        <h2>Communication</h2>
        <p>
          Whether working as a manager or in a call centre I've always needed to
          be an effective communicator. I have also written for a number of
          publications and currently write technical articles and tutorials
        </p>
      </div>
      <div className={collaboration}>
        <img src={colabIcon} />
        <h2>Collaboration</h2>
        <p>
          I have worked with a number of charities, organising photography
          workshops and being part of the management team for my local community
          garden. I was also the founding president of my universities
          journalism society
        </p>
      </div>
    </div>
  );
};

export default Skills;
