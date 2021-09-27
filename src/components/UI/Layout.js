import React, { Fragment } from "react";

const Layout = ({ pageTitle, children }) => {
  return (
    <Fragment >
      <title>{pageTitle}</title>
      <div>{children}</div>
    </Fragment>
  );
};

export default Layout;
