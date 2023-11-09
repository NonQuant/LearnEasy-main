import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./css/TopicsList.css";
// import topics from "../topics";

export const TopicsList = ({ topics, subject_grade }) => {
  return (
    <div className="topics-list__container">
      {topics.map((topic, index) => (
        <TopicElement key={index} index={index} topic={topic} topics={topics}/>
      ))}
    </div>
  );
};

class TopicElement extends Component {

  render() {
    const { index, topics } = this.props;
    return (
      <Link to={"/" + topics[index]["relative_url"]} className="topic-list__element">
        <div className="topic-list__topic">
          {topics[index].topic}
        </div>
        <div className="topic-list__indicator"></div>
      </Link>
    );
  }
}
