import React, { useState } from "react";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";

export const Colorblind = ({colored, setColored}) => {
  const handleColoring = () => {
    setColored((prev) => !prev);
  } 
  return (
    <div className="functions__colorblind"
    onMouseEnter={() => {
      document.querySelector("#colorblind_onhover").style.display = "flex";
    }}
  onMouseLeave={() => {
      document.querySelector("#colorblind_onhover").style.display = "none";
    }}>
      <div
      className="functions__onhover"
      id="colorblind_onhover"
      style={{display: "none", right: "66px", height: "71px"}}>
          <span className="functions__onhover__header">Дальтонизм</span>
          <span className="functions__onhover__text">Увидеть оригинальные цвета</span>
      </div>
      {colored ? (<AiOutlineEye className = "functions__button" onClick={() => handleColoring()}/>) : (<AiOutlineEyeInvisible className = "functions__button" onClick={() => handleColoring()}/>)}
    </div>
  );
};