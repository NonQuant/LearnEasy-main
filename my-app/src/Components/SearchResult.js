import React from "react";
import "./css/SearchResult.css";

export const SearchResult = ({result}) => {
    return (
        <div className="search-result"  >{result.topic} </div>
    )
}