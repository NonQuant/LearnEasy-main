import React from "react";
import { Link } from "react-router-dom";
import "./about.css";
import {FiPhone} from "react-icons/fi";
import {HiOutlineMail} from "react-icons/hi";


function About(){
    return(
        <div className="wrapper">
      <header>
        <div className="container header__container">
          <Link className="logo"
          to="/">PrimeStudy</Link>
          <nav className="menu">
            <Link className="team" to="/">Главная</Link>
            <Link className="about" to="/about">О нас</Link>
            <Link className="lessons" to="/lessons">Уроки</Link>
          </nav>
        </div>
      </header>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1920"
        height="161"
        viewBox="0 0 1920 161"
        fill="none"
        className="top-svg"
      >
        <path
          d="M0 0H1920V150.415C1920 156.519 1914.58 161.199 1908.54 160.307L1756.44 137.846C1707.74 130.653 1658.25 130.565 1609.52 137.584L1494.85 154.099C1458.39 159.351 1421.47 160.629 1384.73 157.91L1004.02 129.739C979.373 127.916 954.625 127.889 929.973 129.661L525.427 158.735C495.203 160.907 464.845 160.376 434.715 157.148L295.777 142.262C260.026 138.431 223.97 138.4 188.213 142.168L11.0479 160.836C5.14317 161.458 0 156.828 0 150.891V0Z"
          fill="#FDC51A"
        />
      </svg>
      <main>
        <div className="container main__container">
          <div className="title">О нас</div>
          <div className="text">
            Этот сайт предназначен для обучения детей школьной программе путем
            вербального и иммерсивного способа. Сайт помогает облегчить процесс
            изучения с помощью таймера, преобразования текста в речь и словаря,
            так как позволяет сфокусироваться на определенной теме, увеличить
            концентрацию в будущем и заполнить пробелы по непонятным темам
          </div>
          <div className="images">
            <img src={require("./img/img3.png")} alt="" />
            <img src={require("./img/img2.png")} alt="" />
            <img src={require("./img/img1.png")} alt="" />
          </div>
        </div>
      </main>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1920"
        height="192"
        viewBox="0 0 1920 192"
        fill="none"
        className="bottom-svg"
      >
        <path
          d="M-191 192H2111V10.5745C2111 4.47371 2105.58 -0.205276 2099.55 0.680496L1899.83 29.987C1851.43 37.0903 1802.25 37.1775 1753.82 30.2461L1590.02 6.80222C1553.78 1.61588 1517.09 0.353928 1480.58 3.03827L1005.18 37.9927C980.687 39.7935 956.096 39.8194 931.599 38.07L429.641 2.22366C399.606 0.0787964 369.44 0.603302 339.498 3.79103L152.588 23.6902C117.06 27.4727 81.2325 27.5038 45.698 23.7832L-179.959 0.156082C-185.861 -0.461945 -191 4.16692 -191 10.1017V192Z"
          fill="#FDC51A"
        />
      </svg>
      <footer className="footer">
        <div className="container footer__container">
          <div className="footer__author">©2023 PrimeStudy</div>
          <div className="footer__contacts">
            <div className="footer__contact-us">Наши контакты</div>
            <div className="footer__contact footer__contact--number">
              <FiPhone className="footer__icon" />
              <span className="footer__number">+7 705 811 2025</span>
            </div>
            <div className="footer__contact footer__contact--email">
              <HiOutlineMail className="footer__icon" />
              <span className="footer__email">CodeGirlzz@gmail.com</span>
            </div>
          </div>
          <div className="footer__text">Труд, Усилия, Успех</div>
        </div>
      </footer>
      </div>
    )
}

export default About;
