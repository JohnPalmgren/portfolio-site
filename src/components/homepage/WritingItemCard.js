import React from "react"
import Card from "../UI/Card"
import { wrappingDiv, image, link } from "./WritingItemCard.module.css"

const WritingItemCard = (props) => {
    console.log("runs")
    return (
      <Card>
        <a href={props.url} className={link} target="_blank">
          <div className={wrappingDiv}>
            <h4>{props.name}</h4>
            <img alt="blog post" src={props.image} className={image} />
          </div>
        </a>
      </Card>
    );
}


export default WritingItemCard;