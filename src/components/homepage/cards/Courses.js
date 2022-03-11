import React, { Fragment, useState, useEffect } from "react";
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
import python from "../../../images/python.jpg"
import html from "../../../images/html.png"
import interactivity from "../../../images/interactivity.jpg"
import agile from "../../../images/agile.jpg"
import ux from "../../../images/ux.png"

const coursesData = [
  {
    name: "Web Development Bootcamp",
    institution: "Bath Spa University",
    date: "2022",
    image: bathSpa,
  },
  {
    name: "React the Complete Guide",
    institution: "Udemy",
    date: "2021",
    image: react,
  },
  {
    name: "Introduction to Google SEO",
    institution: "Coursera",
    date: "2022",
    image: seo,
  },
  {
    name: "Agile Project Management",
    institution: "Coursera",
    date: "2022",
    image: agile,
  },
  {
    name: "UX Design Fundamentals",
    institution: "Coursera",
    date: "2022",
    image: ux,
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
    name: "Advanced Styling with responsive Design",
    institution: "Coursera",
    date: "2021",
    image: styling,
  },
  {
    name: "Web Design for Everyone",
    institution: "Coursera",
    date: "2021",
    image: webdesign,
  },
  {
    name: "Interactivity with Javascript ",
    institution: "Coursera",
    date: "2021",
    image: interactivity,
  },
  {
    name: "Introduction to CSS 3 ",
    institution: "Coursera",
    date: "2020",
    image: css,
  },
  {
    name: "Introduction to HTML 5",
    institution: "Coursera",
    date: "2020",
    image: html,
  },
  {
    name: "The Complete Python Programmer Bootcamp ",
    institution: "Udemy",
    date: "2020",
    image: python,
  },
  {
    name: "Using Databases with Python",
    institution: "Coursera",
    date: "2019",
    image: python,
  },
  {
    name: "Using Python to Access Web Data ",
    institution: "Coursera",
    date: "2019",
    image: python,
  },
  {
    name: "Python Data Structures",
    institution: "Coursera",
    date: "2019",
    image: python,
  },
  {
    name: "Getting Started with Python",
    institution: "Coursera",
    date: "2019",
    image: python,
  },
];

const Courses = () => {
  const { ref, inView, entry } = useInView({ threshold: 0 });
  const [onView, setOnView] = useState(false);

  let animationDelay = 0;

  const changeDelay = () => {
    animationDelay += 500;
    return `${animationDelay.toString()}ms`;
  };

  /*
    Sets onView to true the first time the ref (ul) enters the viewport
    Apply animation class to li only the first time it comes in view
    */
  useEffect(() => {
    if (inView) {
      setOnView(true);
    }
  }, [inView]);

  const courses = coursesData.map((item, i) => {
    const delay = changeDelay();

    return (
      <li
        style={inView ? { animationDelay: delay } : null}
        className={onView ? listItem : hide}
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
