import React, { Fragment } from "react";
import writing1 from "../../images/writing1.jpg"
import writing2 from "../../images/writing2.jpg";
import writing3 from "../../images/writing3.jpg";
import writing4 from "../../images/writing4.jpg";
import WritingItemCard from "./WritingItemCard";
import { subtitle, listItem, list } from "./Writing.module.css"


const Writing = () => {

    const writingData = [
        {
            name: "Flexbox complete guide for beginners",
            url:"https://johnpalmgren.hashnode.dev/flexbox-complete-guide-for-beginners",
            image:writing4
        },
        {
            name: "3 Ways to add CSS to your website",
            url: "https://johnpalmgren.hashnode.dev/3-ways-to-add-css-to-your-website",
            image:writing3
        },
        {
            name: "Build your first HTML webpage in under 30 minutes",
            url: "https://johnpalmgren.hashnode.dev/build-your-first-html-webpage-in-under-30-minutes",
            image: writing2,
        },
        {
            name: "What do you need to get started in web development?",
            url: "https://johnpalmgren.hashnode.dev/what-do-you-need-to-get-started-in-web-development",
            image: writing1,
          }
    ];

    const writing = writingData.map((item, i) => {
        return(
        <li className={listItem} key={i}>
          <WritingItemCard name={item.name} url={item.url} image={item.image} />
        </li>
        )
    })

    return(
        <Fragment>
            <h3 className={subtitle}>Writing</h3>
            <ul className={list}>{writing}</ul>
        </Fragment>
    )
}

export default Writing