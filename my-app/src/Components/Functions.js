import React, { Component } from "react";
import "./css/Functions.css";
import { Timer } from "./Timer";
import { Explanation } from "./Explanation";
import { TextToSpeech } from "./TextToSpeech";
import { Colorblind } from "./Colorblind";
import {FaBold} from "react-icons/fa"

export const Functions = ({colored, allToBold, setColored}) => {
  return (
    <div className="functions__container">
      <Timer colored = {colored} setColored = {setColored}/>
      <Explanation />
      <div
      className="functions__voicing"
      onMouseEnter={() => {
        document.querySelector("#tts_onhover").style.display = "flex";
      }}
      onMouseLeave={() => {
        document.querySelector("#tts_onhover").style.display = "none";
      }}>
        <TextToSpeech />
      </div>
      <Colorblind colored = {colored} setColored = {setColored} />
      <div
      className="functions__voicing"
      onMouseEnter={() => {
        document.querySelector("#bold_onhover").style.display = "flex";
      }}
      onMouseLeave={() => {
        document.querySelector("#bold_onhover").style.display = "none";
      }}>
        <div
        className="functions__onhover"
        id="bold_onhover"
        style={{display: "none", right: "64px", height: "70px"}}>
            <span className="functions__onhover__header">Bionic Reading</span>
            <span className="functions__onhover__text">Ускорить свое чтение</span>
        </div>
        <FaBold onClick={allToBold} className = "functions__button"/>
      </div> 
    </div>
  );
};
