import React from 'react';
import ReactDOM from 'react-dom/client';
import { Navigate, Route, HashRouter as Router, Routes } from "react-router-dom";
import About from './About';
import App from './App';
import Func from './Func';
import Home from './Home';
import './index.css';
import reportWebVitals from './reportWebVitals';


export default function Main() {
    return (
        <Router>
            <Routes>
                <Route index element={<Home />} />
                <Route path="lessons" element={<App />} />
                <Route path="about" element={<About />} />
                <Route path="/:subject_grade/:topic" element={<Func />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Router>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Main />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
