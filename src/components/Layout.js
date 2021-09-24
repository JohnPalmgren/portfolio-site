import { Link } from "gatsby";
import { Fragment } from "react";
import React from "react"

const Layout = ({ pageTitle, header, children }) => {
  return (
    <Fragment>
      <title>{pageTitle}</title>
      <nav>
        <ul>
          <li>
            <Link to="/">Homepage</Link>
          </li>
          <li>
            <Link to="/new-page">New Page</Link>
          </li>
        </ul>
      </nav>
      <header>
        <h1>{pageTitle}</h1>
        {header}
      </header>
      <main>{children}</main>
    </Fragment>
  );
};

export default Layout;
