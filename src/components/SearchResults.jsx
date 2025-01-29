import React, { useState } from "react";

function SearchResults(props) {
    const [ results, setResults ]  = useState('');

    return (
        <>
            <label htmlFor="search-results">results: </label>
            <p>results: {results} </p>
        </>
    )
}

export default SearchResults;