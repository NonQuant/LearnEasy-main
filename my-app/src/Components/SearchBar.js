import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./css/SearchBar.css";
// import topics from "../topics";

export const SearchBar = ({ setResults, topics }) => {
  const [input, setInput] = useState("");
  const searchInput = React.useRef(null);
  console.log("Search bar topics", topics)
  
  const fetchData = (value) => {
    const results = topics.filter((user) => {
      if (value !== "" && document.activeElement === searchInput.current) {
        return user && user.topic && user.topic.toLowerCase().includes(value);
      }
    });
    setResults(results);
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        className="searchbar__input"
        placeholder="Поиск..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
        ref={searchInput}
      />
    </div>
  );
};
