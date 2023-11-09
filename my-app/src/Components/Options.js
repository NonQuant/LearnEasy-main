import React, { useState } from "react";
// import topics from "../topics";
import "./css/Options.css";

export const Options = ({setSubjectResults, topics}) => {
    console.log("Options topics", topics)
    return (
        <div className="main__options">
            <div className="main__options__all"
            onClick={(prev) => {
                setSubjectResults(topics);
            }}
            >Все</div>
            <div className="main__options__physics"
            onClick={(prev) => {
                    const results = topics.filter((elem) => {
                        return elem["subject_grade_name"].split(" ")[0] == "Физика";
                    })
                    setSubjectResults(results);
                }}>Физика</div>
            <div className="main__options__math"
            onClick={(prev) => {
                    const results = topics.filter((elem) => {
                        return elem["subject_grade_name"].split(" ")[0] == "Математика";
                    })
                    setSubjectResults(results);
                }}>Математика</div>
            <div className="main__options__cs"
            onClick={(prev) => {
                    const results = topics.filter((elem) => {
                        return elem["subject_grade_name"].split(" ")[0] == "Информатика";
                    })
                    setSubjectResults(results);
                }}>Информатика</div>
        </div>
    )
}