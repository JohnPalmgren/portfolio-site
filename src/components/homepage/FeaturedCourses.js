import React from "react";
import {
  container,
  box,
  content,
  gif,
  list,
  templateHeading,
  heading,
  subheading,
  buttons,
} from "./FeaturedCourses.module.css";
import bootcamp from "../../images/BSU.jpg"
import reactImage from "../../images/react.png"
import styling from "../../images/styling.jpg"
import more from "../../images/moreCourses.jpg"

const ProjectTemplate = ({ title, institution, image, features }) => {
  return (
    <div className={container}>
      <div className={box}>
        <h2 className={templateHeading}>{title}</h2>
        <h3 className={subheading}>{institution}</h3>
        <div className={content}>
          <img src={image} alt="site preview" className={gif} />
          <ul className={list}>
            {features.map((item) => {
              return <li>{item}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

const FeaturedCourses = () => {
  return (
    <>
      <h1 className={heading}>Featured Courses</h1>
      <ProjectTemplate
        title={"Web Development Bootcamp"}
        institution={"Bath Spa University"}
        image={bootcamp}
        features={[
          "Intensive full time bootcamp",
          "React",
          "JavaScript",
          "Best practice",
          "Accessability",
          "APIs",
          "SASS",
        ]}
      />
      <ProjectTemplate
        title={"React the Complete Guide"}
        institution={"Udemy / Academind"}
        image={reactImage}
        features={[
          "Components, props & dynamic data binding",
          "Working with user events and state to create interactive applications",
          "Built-in and custom Hooks",
          "Debugging React apps",
          "Styling with 'Styled Components' and 'CSS Modules'",
          "Sending Http requests & handling transitional states + responses",
        ]}
      />
      <ProjectTemplate
        title={"Advanced Styling with Responsive Design"}
        institution={"Coursera / University of Michigan"}
        image={styling}
        features={[
          "Mobile first design",
          "Wireframing",
          "Bootstrap",
          "Fluid design & media queries",
          "Cross platform style and performance",
        ]}
      />
      <div className={container}>
        <div className={box}>
          <h2 className={templateHeading}>See More</h2>
          <div className={content}>
            <img src={more} alt="site preview GIF" className={gif} />
            <ul className={list}>
                <li>UX Design Fundamentals</li>
                <li>Agile Project Management</li>
                <li>Introduction to Google SEO</li>
                <li>Using Python to Access Web Data</li>
                <li>and more</li>
            </ul>
          </div>
          <div className={buttons}>
            <button>
              <a href="#" target="_blank" rel="noopener noreferrer">
                See all courses
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedCourses;
