import React, { useState } from "react";
import { SearchResult } from "./SearchResult";
import './css/SearchResultsList.css';

export const SearchResultsList = ({results}) => {
    return <div className="results-lists">
        {
            results?.map((result, id) => {
                return <SearchResult result={result} key={id}/>
            })
        }
    </div>
}