import React from 'react';
import './SearchBar.css';

function SearchBar(props){
    return (
        <div>
        <i class="fas fa-search"></i>
        <input onChange={(event) => props.returnKeyword(event.target.value)} class="search-bar" placeholder="Enter Keywords..."></input>
        </div>
    )
}

export default SearchBar;