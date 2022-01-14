import React from "react";
import { useState } from "react"
import { header, navBar, headerScroll } from "./Nav.module.css"

const Nav = (props) => {

  
const [colorChange, setColorchange] = useState(false);

const changeNavbarColor = () => {
  if (window.scrollY >= 80) {
    setColorchange(true);
  } else {
    setColorchange(false);
  }
};
window.addEventListener("scroll", changeNavbarColor);
  
  return (
    <nav className={navBar}>
      <div className={colorChange ? headerScroll : header}>
        <ul></ul>
        <button onClick={props.aboutScroll}>About</button>
        <button onClick={props.projectScroll}>Projects</button>
        <button onClick={props.writingScroll}>Writing</button>
        <button onClick={props.coursesScroll}>Courses</button>
      </div>
    </nav>
  );
};

export default Nav;
