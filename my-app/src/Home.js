import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import axios from "axios";

function Home(){
    const navigate = useNavigate();
    return(
        <div className="home__wrapper">
        <header>
            <div className="home__container header__container">
            <div className="home__logo"
                onClick={() => {navigate("/")}}>PrimeStudy</div>
            <nav className="home__menu">
                <Link className="home__team" to="/">Главная</Link>
                <Link className="home__about" to="/about">О нас</Link>
                <Link className="home__lessons" to="/lessons">Уроки</Link>
            </nav>
            </div>
        </header>
        <main className="home__container">
            <div className="home__text">
                <div className="home__text__blue">PrimeStudy - </div>
                <div className="home__text__after"> simple</div>
                <div className="home__text__dropped">lessons</div>
            </div>
            <button
                className="home__main__button home__button"
                onClick={(prev) => {navigate("/lessons")}}>Начать обучение</button>
        </main>
    </div>
    )
}

export default Home;