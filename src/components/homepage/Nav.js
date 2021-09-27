import React from "react";
import { header, list, listItem } from "./Nav.module.css"

const Nav = () => {
  return (
    <nav>
      <div className={header}>
        <ul className={list}>
          <li className={listItem}>
            <a href="#">About</a>
          </li>
          <li className={listItem}>
            <a href="#">Projects</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
