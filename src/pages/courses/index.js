import React from "react";
import { navigate } from "gatsby";
import Layout from "../../components/UI/Layout"
import Courses from "../../components/homepage/cards/Courses"
import GenNav from "../../components/UI/GenNav";
import Footer from "../../components/UI/Footer"

const CoursesPage = () => {

    const clickHandler = () => {
        navigate("/")
    }

    return (
      <Layout pageTitle="courses">
        <GenNav>
          <li>
            <button onClick={clickHandler}>
                Home
            </button>
          </li>
        </GenNav>
        <Courses />
        <Footer />
      </Layout>
    );
}
export default CoursesPage