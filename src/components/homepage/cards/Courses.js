import React, { Fragment } from "react";
import { useInView } from "react-intersection-observer";
import { subtitle, list, listItem, hide } from "./sharedCardStyles.module.css";
import CoursesItemCard from "./CoursesItemCard";
import bathSpa from "../../../images/BSU.jpg";
import seo from "../../../images/seo.jpg";
import react from "../../../images/react.png";
import javaScript from "../../../images/javascript.png";
import css from "../../../images/css.png";
import webdev from "../../../images/webdev.jpg";
import webdesign from "../../../images/webdesign.png";
import styling from "../../../images/styling.jpg";

const coursesData = [
  {
    name: "Web Development Bootcamp",
    institution: "Bath Spa University",
    date: "2022",
    image: bathSpa,
  },
  {
    name: "Introduction to Google SEO",
    institution: "Coursera",
    date: "2022",
    image: seo,
  },
  {
    name: "React the Complete Guide",
    institution: "Udemy",
    date: "2021",
    image: react,
  },
  {
    name: "JavaScript the Complete Guide",
    institution: "Udemy",
    date: "2021",
    image: javaScript,
  },
  {
    name: "CSS the Complete Guide",
    institution: "Udemy",
    date: "2021",
    image: css,
  },
  {
    name: "HTML CSS and JavaScript for Web Developers",
    institution: "Coursera",
    date: "2021",
    image: webdev,
  },
  {
    name: "Web Design for Everyone",
    institution: "Coursera",
    date: "2021",
    image: webdesign,
  },
  {
    name: "Advanced Styling with responsive Design",
    institution: "Coursera",
    date: "2021",
    image: styling,
  },
];

const Courses = () => {
  const { ref, inView, entry } = useInView({ threshold: 0 });

  let animationDelay = 0;

  const changeDelay = () => {
    animationDelay += 500;
    return `${animationDelay.toString()}ms`;
  };

  const courses = coursesData.map((item, i) => {
    const delay = changeDelay();

    return (
      <li
        style={inView ? { animationDelay: delay } : null}
        className={inView ? listItem : hide}
        key={i}
      >
        <CoursesItemCard
          name={item.name}
          institution={item.institution}
          date={item.date}
          image={item.image}
        />
      </li>
    );
  });

  return (
    <Fragment>
      <h3 className={subtitle}>Courses</h3>
      <ul className={list} ref={ref}>
        {courses}
      </ul>
    </Fragment>
  );
};

export default Courses;
