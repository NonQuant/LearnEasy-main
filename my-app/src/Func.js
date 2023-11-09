import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Content } from "./Components/Content";
import { Functions } from "./Components/Functions";
import { TopicsList } from "./Components/TopcisList";
import { AiOutlineFullscreenExit } from "react-icons/ai";
import { AiOutlineFullscreen } from "react-icons/ai";
import "./Func.css";
import axios from "axios";

function Func() {
  // loading topics
  const url = "http://localhost:8000/api/topics/";
  const [topics, setTopics] = useState([]);
  const [fullScreen, setFullScreen] = useState(false);
  const [colored, setColored] = useState(false);
  const [isBold, setBold] = useState(false)


  const fetchInfo = () => {
    return axios.get(url).then((res) => setTopics(res.data));
  };

  useEffect(() => {
    fetchInfo();
  }, []);
  // end of loading topics

  const navigate = useNavigate();
  const { subject_grade, topic } = useParams();

  let pageExists = false;
  let topicItem = undefined;
  for (let i = 0; i < topics.length; i++) {
    if (topics[i]["relative_url"] == subject_grade + "/" + topic) {
      pageExists = true;
      topicItem = topics[i];
    }
  }

  function toggleFullscreen() {
    let elem = document.querySelector(".func__main__fullscreen");
    const fullscreenIcon = document.querySelector(
      ".func__main__fullscreen__button__icon"
    );
    const fullscreenExitIcon = document.querySelector(
      ".func__main__fullscreen__button__icon.hidden"
    );

    setFullScreen((prev) => !prev);

    if (!document.fullscreenElement) {
      elem.requestFullscreen().catch((err) => {
        alert(
          `Error attempting to enable fullscreen mode: ${err.message} (${err.name})`
        );
      });
    } else {
      document.exitFullscreen();
    }
  }

  const fullScreenChanged = (event) => {
    const elem = document.querySelector(".func__main__fullscreen");
    if (document.fullscreenElement) {
      // console.log("Koten entering...");
    }
    else {
      // console.log("Koten leaving...");
      document.querySelector("#full_screen").style.left = "83px";
      document.querySelector("#main_content").style.left = "0px";
      document.querySelector("#main_functions").style.left = "0px";
    }
  }
  
  document.addEventListener("fullscreenchange", fullScreenChanged);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        // console.log("Koten");
        event.preventDefault();
        // Add your custom logic here to handle the denial of escape key
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  // {colored ? "" : ""}
  function allToBold() {
    setBold(!isBold)
  }

  return (
    <div className="func__wrapper">
      <header className= { colored ? "func__header__container__colored container" : "func__header__container container"} >
        <div
          className={colored ? "func__logo__colored" : "func__logo"}
          onClick={() => {
            navigate("/");
          }}
        >
          PrimeStudy
        </div>
        <div className={colored ? "func__menu__colored" : "func__menu"}>
          <Link className={colored ? "func__team__colored" : "func__team"} to="/">
            Главная
          </Link>
          <Link className={colored ? "func__about__colored" : "func__about"} to="/about">
            О нас
          </Link>
          <Link className={colored ? "func__lessons__colored" : "func__lessons"} to="/lessons">
            Уроки
          </Link>
        </div>
      </header>
      <main className="func__main__container">
        <div className="func__main__topics-list">
          {topicItem && (
            <TopicsList
              topics={topics.filter((elem) => {
                return elem.subject_grade_name == topicItem.subject_grade_name;
              })}
              subject={subject_grade}
            />
          )}
        </div>
        <section
          className="func__main__fullscreen"
          style={
            fullScreen
              ? { backgroundColor: "white" }
              : { backgroundColor: "white" }
          }
        >
          <button
            className="func__main__fullscreen__button"
            id="full_screen"
            onClick={() => toggleFullscreen()}
            style={fullScreen ? { left: "5px" } : { left: "83px" }}
          >
            {fullScreen ? (
              <AiOutlineFullscreenExit className="func__main__fullscreen__button__icon" />
            ) : (
              <AiOutlineFullscreen className="func__main__fullscreen__button__icon" />
            )}
          </button>
          <div
            className="func__main__content"
            id="main_content"
            style={fullScreen ? { left: "120px" } : { left: "0px" }}
          >
            {pageExists ? (
              <Content subjectGrade={subject_grade} topic={topicItem} isBold={isBold}/>
            ) : (
              navigate("/lessons")
            )}
          </div>
          <div
            className="func__main__functions"
            id="main_functions"
            style={fullScreen ? { left: "80px" } : { left: "0px" }}
          >
            <Functions colored = {colored} setColored = {setColored} allToBold={allToBold}/>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Func;
