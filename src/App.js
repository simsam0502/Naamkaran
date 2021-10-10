// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Header from './components/header/Header'
import SearchBar from './components/searchbar/SearchBar'
import Suggestions from './components/suggestions/Suggestions';

function App() {
  var [isSearchBarEmpty,setIsSearchBarEmpty] = React.useState(true);
  var [keyword,setKeyword] = React.useState("");
  function returnKeyword(keyword){
    // console.log(keyword);
    setKeyword(keyword);
    setIsSearchBarEmpty(keyword.length===0);
  }
  return (
    <div className="app">
      <Header isSearchBarEmpty={isSearchBarEmpty}/>
      <SearchBar returnKeyword={returnKeyword}/>
      <Suggestions keyword={keyword}/>
    </div>
  );
}

export default App;
