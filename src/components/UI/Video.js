import React from "react";
import background from "../../images/background-video.mp4";
import poster from "../../images/poster.jpg"
import { backgroundVideo } from "./Video.module.css"

const Video = () => {
  return (
    <div>
    <video className={backgroundVideo} autoplay="autoplay" loop muted poster={poster}>
      <source src={background} type="video/mp4" />
    </video>
    </div>
  );
};

export default Video;
