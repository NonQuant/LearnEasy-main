import React, { useRef } from "react";
import { useState, useEffect } from "react";
import { LuTimer } from "react-icons/lu";
import { CountDownTimer } from "./CountDownTimer";


export const Timer = ({colored, setColored}) => {
    const defaultTime = 1500;

    const [showTimer, setShowTimer] = useState(false);
    // number of seconds
    const [seconds, setSeconds] = useState(defaultTime);
    const [isCounting, setIsCounting] = useState(false);
  
    const handleToggle = () => {
      setIsCounting((prev) => !prev);
    };
  
    const handleReset = () => {
      setSeconds(defaultTime);
      setIsCounting(false);
    };
  
    const handleTimerToggle = () => {
      setShowTimer((prev) => !prev);
    };
  
    const formatTime = (time) => {
      const minutes = Math.floor((time % 3600) / 60);
      const seconds = Math.floor(time % 60);
  
      const formattedMinutes = minutes.toString().padStart(2, "0");
      const formattedSeconds = seconds.toString().padStart(2, "0");
  
      return `${formattedMinutes}:${formattedSeconds}`;
    };

    useEffect(() => {
        let interval = null;
    
        if (isCounting) {
          interval = setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds - 1);
          }, 1000);
        } else if (!isCounting && seconds !== 0) {
          clearInterval(interval);
        }

        if (seconds < 1 && isCounting) {
          setIsCounting(false);
          setSeconds(0);
          alert("Время закончилось!!!");
        }
    
        return () => clearInterval(interval);
      }, [isCounting, seconds]);
  
    return (
      <div
      className="functions__timer"
      onMouseEnter={() => {
        if (showTimer) return;
        document.querySelector("#timer_onhover").style.display = "flex";
      }}
      onMouseLeave={() => {
        document.querySelector("#timer_onhover").style.display = "none";
      }}>
        <div
        className="functions__onhover"
        id="timer_onhover"
        style={{display: "none"}}>
          <span className="functions__onhover__header">Таймер</span>
          <span className="functions__onhover__text">Отслеживать время за учебой</span>
        </div>
        <LuTimer className="functions__button" onClick={() => {
          handleTimerToggle();
          document.querySelector("#timer_onhover").style.display = "none";
        }} />
        {showTimer && (
          <div className="functions__timer__counter">
            <div className="functions__timer__counter__buttons">
            {!isCounting &&
            <button
            className={colored ? "functions__regulate__btn__colored" : "functions__regulate__btn"}
            onClick={() => {
              setSeconds((prev) => {
                if ((prev - 300) < 0) {
                  return prev;
                }
                return prev - 300;
              })
            }}>-</button>
            }
            <div className="functions__timer__counter__timer">{formatTime(seconds)}</div>
            {!isCounting &&
            <button
            className={colored ? "functions__regulate__btn__colored" : "functions__regulate__btn"}
            onClick={() => {
              setSeconds((prev) => prev + 300)
            }}>+</button>
            }
            </div>
            <button className={ colored ? "functions__timer__counter__btn__colored" : "functions__timer__counter__btn"}
            style={isCounting ? ( colored ? {backgroundColor: "#716a31"} : {backgroundColor: "#cd0e0e"}) : ( colored ? {backgroundColor: "#e1e500"} : {backgroundColor: "green"})}
            onClick={handleToggle}>{isCounting ? "Stop" : "Start"}</button>
            <button className={ colored ? "functions__timer__counter__btn__colored" : "functions__timer__counter__btn"}
            onClick={handleReset}>Reset</button>
          </div>
        )}
        {showTimer && (
            <div className="functions__timer__connector"></div>
        )}
      </div>
    );
  };
  
  export default Timer;