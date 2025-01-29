import React, { useState } from "react";

function SearchBar(props) {
    const [ search, setSearch ]  = useState('');

    function handleChange(e) {
        setSearch(e.target.value);
    }

    return (
        <>
            <label htmlFor="search-bar">Search:</label>
            <input 
                id="search-bar" 
                type="text" 
                name="search-bar" 
                value={search} 
                onChange={handleChange}
            />
        </>
    )
}

export default SearchBar;