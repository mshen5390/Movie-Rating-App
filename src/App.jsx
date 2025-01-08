import React, { useState, useEffect } from "react";

import MovieCard from "./MovieCard";
import SearchIcon from "./Search.svg";
import "./index.css";
//OMDB API url for fetching data
const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=cec1f26b";

//Main code for App
const App = () => {
  //Sets the states of the search and movies
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  
  //calls searchMovies each render
  useEffect(() => {
    searchMovies();
  }, []);

  //fetches the movies data from the API syncronously
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    //console.log(data);

    setMovies(data.Search);
  };

  //handles the changes in the search bar so that each
  //letter will update the searched items
  const handleChange = (value) => {
    setSearchTerm(value);

    //still need to find a way to get that default page for movies want to be "sesame street"
    if (value.trim() !== "") {
      searchMovies(value);
    }

    searchMovies(value);
  };

  //return statement calling all the functions and producing the html
  return (
    <div className="app">
      <h1>The Watchers App</h1>

      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => handleChange(e.target.value)}
          placeholder="Search for Movies"
        />
        <img
          src={SearchIcon}
          // alt="search"
          // onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;