import React, { Component } from "react";
import { Link } from "react-router-dom";
// import topics from "../topics";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./css/Cards.css";
import image1 from "./images/image1-hover.jpg";
import image2 from "./images/image2.jpg";
import image3 from "./images/image3.jpg";


class CustomSlide extends Component {
  render() {
    const { index, topic, ...props } = this.props;

    const background = (subject) => {
      switch (subject) {
        case "Математика":
          return `url(${image1})`;
        case "Физика":
          return `url(${image2})`;
        case "Информатика":
          return `url(${image3})`;
        default:
          return `url(${image1})`;
      }
    };

    return (
      <div {...props}>
        <Link
          to={"/" + topic.relative_url}
          className="card"
          index={index}
          style={{ backgroundImage: background(topic.subject_grade_name.split(" ")[0]) }}
        >
          <h2>{topic.topic}</h2>
          <h3>
          {topic.subject_grade_name}
          </h3>
        </Link>
      </div>
    );
  }
}

export default class Cards extends Component {
  render() {
    const { topic, topics, ...props } = this.props;
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "0px",
      dots: true,
      slidesToShow: 3,
      speed: 400,
    };
    return (
      <Slider {...settings}>
        {topic.length == 0 ? topics.map((topic, index) => (
          <CustomSlide key={index} index={index} topic={topic} />
        )) : topic.map((topic, index) => (
          <CustomSlide key={index} index={index} topic={topic} />
        ))}
      </Slider>
    );
  }
}