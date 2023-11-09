import './App.css';
import { SearchBar } from './Components/SearchBar';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { SearchResultsList } from './Components/SearchResultsList';
import { Options } from './Components/Options';
import Cards from './Components/Cards';
import axios from "axios";



function App() {
  // loading topics
  const url = "http://localhost:8000/api/topics/";
  const [topics, setTopics] = useState([]);

  const fetchInfo = () => {
    return axios.get(url).then((res) => setTopics(res.data));
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  console.log("loaded topics: ", topics);

  const navigate = useNavigate();
  const [results, setResults] = useState([]);
  const [subjectResults, setSubjectResults] = useState([])

  return (
    <div className="app__wrapper">
          <header>
            <div className="app__container header__container">
              <div className="app__logo"
              onClick={() => {navigate("/")}}>PrimeStudy</div>
              <nav className="app__menu">
                <Link className="app__team" to="/">Главная</Link>
                <Link className="app__about" to="/about">О нас</Link>
                <Link className="app__lessons" to="/lessons">Уроки</Link>
              </nav>
            </div>
          </header>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1920"
            height="161"
            viewBox="0 0 1920 161"
            fill="none"
            className="app__top-svg"
          >
            <path
              d="M0 0H1920V150.415C1920 156.519 1914.58 161.199 1908.54 160.307L1756.44 137.846C1707.74 130.653 1658.25 130.565 1609.52 137.584L1494.85 154.099C1458.39 159.351 1421.47 160.629 1384.73 157.91L1004.02 129.739C979.373 127.916 954.625 127.889 929.973 129.661L525.427 158.735C495.203 160.907 464.845 160.376 434.715 157.148L295.777 142.262C260.026 138.431 223.97 138.4 188.213 142.168L11.0479 160.836C5.14317 161.458 0 156.828 0 150.891V0Z"
              fill="#FDC51A"
            />
          </svg>
          <main>
            <div className="app__container main__container">
              <div className='app__main__top'>
                <div className="app__main__title">Уроки</div>
                <div className='app__searchbar__container'>
                  <SearchBar topics={topics} setResults={setResults}/>
                  <SearchResultsList results = {results} />
                </div>
              </div>
              <div className='app__main__center'>
                <Options topics={topics} setSubjectResults={setSubjectResults}/>
              </div>
              <div className='app__main__bottom'>
                <Cards topics={topics} topic = {results.length == 0 ?
                subjectResults : results}/>
              </div>
            </div>
          </main>
        </div>
  );
}


export default App;