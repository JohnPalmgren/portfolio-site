import React, { Fragment } from "react";
//fix import location
import classes from "./Layout.module.css";

const Layout = ({ pageTitle, children }) => {
  return (
    <Fragment className={classes.background}>
      <title>{pageTitle}</title>
      <div>{children}</div>
    </Fragment>
  );
};

export default Layout;
