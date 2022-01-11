import React from "react";
import Card from "../../../components/UI/Card";
import { wrappingDiv, image } from "./sharedCardItemStyles.module.css"
// import { image } from "./CourseItemCard.module.css"

const CoursesItemCard = (props) => {
    console.log("runs")
    return (
      <Card>
        <div className={wrappingDiv}>
          <h4>{props.name}</h4>
          <p>{props.institution}</p>
          <img alt="course image" src={props.image} className={image} />
        </div>
      </Card>
    );

}

export default CoursesItemCard