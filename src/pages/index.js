import * as React from "react";
import Fragment from "react";
import Layout from "../components/Layout";

const header = <div>
      <h2>Web Developer</h2>
      <a href="https://www.linkedin.com/in/john-p-6742aa40/">linkedin</a>
      <a href="https://github.com/eniac01">github</a>
      <a href="mailto:addemail@newemail.com">email</a>
</div>

const IndexPage = () => {
  return <Layout pageTitle="John Palmgren" header={header}></Layout>;
};

export default IndexPage;
