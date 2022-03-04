import React from "react";
import { Fragment } from "react";
import Footer from "../UI/Footer";
import GenNav from "../UI/GenNav";
import { flexContainer, card } from "./Preview.module.css";
import getStarted from "../../images/blog/getStarted.jpg";
import html from "../../images/blog/html.jpg";
import css from "../../images/blog/css.jpg"
import flexbox from "../../images/blog/flexbox.jpg"
import pseudo from "../../images/blog/pseudo.jpg"
import cssHacks from "../../images/blog/cssHacks.jpg"
import variables from "../../images/blog/variables.jpg"
import hash from "../../images/blog/hash.jpg"
import becomeDeveloper from "../../images/blog/becomeDeveloper.jpg"
import array from "../../images/blog/array.jpg"
import truthy from "../../images/blog/truthy.jpg"
import jsVar from "../../images/blog/jsVar.jpg"
import strict from "../../images/blog/strict.jpg"

const blogPreviewData = [
  {
    name: "How does JavaScript strict mode prevent bad practice?",
    description:
      "Strict mode is a way to make JavaScript errors more obvious. It can make the code more optimized for performance and prevent some security vulnerabilities.",
    image: strict,
    category: ["web development", "javascript"],
    link: "",
  },
  {
    name: "What's the difference between var, const and let?",
    description:
      "var has a different scope and it's normally better to use const and let const is for variables that will not be updated var is for variables that will be updated",
    image: jsVar,
    category: ["web development", "javascript", "beginners"],
    link: "",
  },
  {
    name: "What is Truthy and Falsy in JavaScript?",
    description:
      "We know that variables in JavaScript can hold a Boolean value of true or false. As well as this, other JavaScript values equate to truthy or falsy. ",
    image: truthy,
    category: ["web development", "javascript"],
    link: "",
  },
  {
    name: "Advanced array methods: array.forEach array.filter & array.map",
    description:
      "array.forEach, array.filter & array.map are array methods which take functions as arguments. Below we will look at how they work.",
    image: array,
    category: ["web development", "javascript"],
    link: "",
  },
  {
    name: "How to become a web developer in 2022 (from scratch). What I've learned from teaching myself web development.",
    description:
      "Teaching yourself web development has never been easier. There are hundreds of free courses, free books and bundles of content on YouTube...",
    image: becomeDeveloper,
    category: ["web development", "beginners"],
    link: "",
  },
  {
    name: "Wordpress VS Hashnode: where should I host my tech blog?",
    description:
      "There are so many blogging platforms out there now days, how do you know which one to choose? I've spent many years writing blogs on WordPress and I've also recently started using has Hashnode.",
    image: hash,
    category: ["writing", "web development"],
    link: "",
  },
  {
    name: "CSS variables: What are they and how to use them",
    description:
      "CSS custom properties aka CSS variables allow you to define a property in a variable that you can use over and over again. There are a number of use cases for this...",
    image: variables,
    category: ["css", "beginners", "web development"],
    link: "",
  },
  {
    name: "CSS Hacks: What is ::before and ::after?",
    description:
      "::before and ::after are CSS pseudo elements. They can add content before or after that element.",
    image: cssHacks,
    category: ["css", "beginners", "web development"],
    link: "",
  },
  {
    name: "CSS Pseudo Selectors: What's the difference between :first-of-type and :first-child",
    description:
      "first-of-type and first-child are very similar pseudo selectors and will often target the same element. When they don't it can be confusing, so let's look at what they do.",
    image: pseudo,
    category: ["css", "beginners", "web development"],
    link: "",
  },
  {
    name: "Flexbox complete guide for beginners",
    description:
      "Flexbox is a property that you can use in CSS that will position any child elements in accordance with a few simple rules. What does this mean? Well instead of spending a lot of time positioning elements with margins, position absolute and float you can just tell flexbox how you want all the elements to be displayed",
    image: flexbox,
    category: ["flexbox", "css", "beginners", "web development"],
    link: "",
  },
  {
    name: "3 Ways to add CSS to your website",
    description:
      "CSS is where we provide the style to our website. It tells the browser how to position the elements on the page, what color they should be, what font to use and almost anything else you can think of which relates to how the website looks.",
    image: css,
    category: ["css", "beginners", "web development"],
    link: "",
  },
  {
    name: "Build your first HTML webpage in under 30 minutes",
    description:
      "HTML (hypertext markup language) is the building block of the internet. It provides the structure of the webpage and is how you put the content (paragraphs, images, navigation bars) onto the website.",
    image: html,
    category: ["html", "web development", "beginners"],
    link: "",
  },
  {
    name: "What do you need to get started in web development?",
    description:
      "If you want to get started in web development, you'll need a few basic tools and technologies first. First things first you’re going to need a text editor.",
    image: getStarted,
    category: ["web development", "beginners"],
    link: "",
  },
];

const Preview = () => {

  const previews = blogPreviewData.map((item) => {
    return (
      <div className={card}>
        <img src={item.image} alt="blog header" />
        <h1>{item.name}</h1>
        <p>{item.description}</p>
      </div>
    );
  });

  return (
    <Fragment>
      <GenNav>
        <li><button>Catagories</button></li>
        <li><button>Web-Dev Portfolio</button></li>
      </GenNav>
      <div className={flexContainer}>{previews}</div>
      <Footer />
    </Fragment>
  );
};

export default Preview;
