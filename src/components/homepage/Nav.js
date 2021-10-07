import React from "react";
import { header, list, listItem } from "./Nav.module.css"

const Nav = (props) => {
  return (
    <nav>
      <div className={header}>
        <button onClick={props.aboutScroll}>About</button>
        <button onClick={props.projectScroll}>Projects</button>
        {/* <ul className={list}>
          <li className={listItem}>
            <a href="#">About</a>
          </li>
          <li className={listItem}>
            <a href="#">Projects</a>
          </li>
        </ul> */}
      </div>
    </nav>
  );
};

export default Nav;
