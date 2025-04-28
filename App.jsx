import React, { useEffect } from "react";
import MovieList from "./movieList";
import FavoriteList from "./favList";
import "./index.css"

function app() {
  return (
    <div className="App">
      <h2>Movie List</h2>
      <MovieList/>
      <FavoriteList />
    </div>
  );
}

export default app;