import React from "react";
import { useState } from "react";
import {
  header,
  navBar,
  headerScroll,
  navList,
  menuButtonContainer,
  menuButton,
  menuToggle,
  menuButtonScroll,
  navListScroll,
} from "./GenNav.module.css";

const GenNav = (props) => {

  const [colorChange, setColorchange] = useState(false);

  const isBrowser = () => typeof window !== "undefined";

  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  isBrowser() && window.addEventListener("scroll", changeNavbarColor);

  return (
    <nav className={navBar}>
      <div className={colorChange ? headerScroll : header}>
        <input id="menuToggle" type="checkbox" className={menuToggle} />
        <label className={menuButtonContainer} htmlFor="menuToggle">
          <div className={colorChange ? menuButtonScroll : menuButton}></div>
        </label>
        <ul className={colorChange ? navListScroll : navList}>
        {props.children}

          {/* <li>
            <button onClick={props.aboutScroll}>About</button>
          </li>
          <li>
            <button onClick={props.projectScroll}>Projects</button>
          </li>
          <li>
            <button onClick={props.writingScroll}>Writing</button>
          </li>
          <li>
            <button onClick={props.coursesScroll}>Courses</button>
          </li> */}
        </ul>
      </div>
    </nav>
  );


}

export default GenNav;