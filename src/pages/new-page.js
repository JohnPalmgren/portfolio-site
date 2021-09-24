import * as React from "react";
import { Link } from "gatsby"
import Layout from "../components/Layout";

const newPage = () => {
  return (
    <Layout pageTitle="New Page">This is an example new page</Layout>
    // <main>
    //   <title>New Page</title>
    //   <h1>New Page</h1>
    //   <Link to="/">back to home</Link>
    //   <p>this is an example new page</p>
    // </main>
  );
};

export default newPage;
