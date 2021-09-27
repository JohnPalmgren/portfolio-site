import React, { Fragment } from "react";
import { red, green, blue, content } from "./Layout.module.css";


const Layout = ({ pageTitle, children }) => {
  return (
    <Fragment>
      <title>{pageTitle}</title>
      <div className={red}></div>
      <div className={green}></div>
      <div className={blue}></div>
      <div className={content}>{children}</div>
    </Fragment>
  );
};

export default Layout;
