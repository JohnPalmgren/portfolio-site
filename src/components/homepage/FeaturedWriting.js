import React from "react";
import {
  container,
  box,
  content,
  img,
  templateHeading,
  heading,
  buttons,
} from "./FeaturedWriting.module.css";
import flexbox from "../../images/writing4.jpg"
import strictMode from "../../images/strictMode.png"
import button from "../../images/button.png"
import more from "../../images/moreWriting.png"

const ProjectTemplate = ({ title, image, url }) => {
  return (
    <div className={container}>
      <div className={box}>
        <h2 className={templateHeading}>{title}</h2>
        <div className={content}>
          <img src={image} alt="site preview" className={img} />
        <div className={buttons}>
          <button>
            <a href={url} target="_blank" rel="noopener noreferrer">
              Read it here!
            </a>
          </button>
        </div>
        </div>
      </div>
    </div>
  );
};

const FeaturedWriting = () => {
  return (
    <>
      <h1 className={heading}>Featured Writing</h1>
      <ProjectTemplate
        title={"Flexbox Complete Guide for Beginners"}
        image={flexbox}
        url={
          "https://dev.to/johnpalmgren/flexbox-complete-guide-for-beginners-56bp"
        }
      />
      <ProjectTemplate
        title={"JavaScript Strict Mode vs. Bad Programming Practices"}
        image={strictMode}
        url={
          "https://hackernoon.com/javascript-strict-mode-vs-bad-programming-practices"
        }
      />
      <ProjectTemplate
        title={"How to Make Buttons Stand Out with CSS"}
        image={button}
        url={"https://hackernoon.com/how-to-make-buttons-stand-out-with-css"}
      />
      <div className={container}>
        <div className={box}>
          <h2 className={templateHeading}>See More</h2>
          <div className={content}>
            <img src={more} alt="collage of writing images" className={img} />
            <div className={buttons}>
              <button>
                <a
                  href="https://dev.to/johnpalmgren"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  See all writing!
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedWriting;
