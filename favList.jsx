import React, { useState, useEffect } from "react";
import "./movieList.css";

const FavoriteList = () => {
  
  return (
    <div className="listAllMovies">
        <h2>Lista de Favoritos</h2>
        <ul className="listMovies">
            <li>
                <div className="movieDetails"> 
                <img
                    src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz2TZOR3sLpq1gPNb14LkmbBIVUTRdwxiZLw&s`}
                    alt="Pelicula"
                />
                <p>Hola</p>
                </div>
                <button className="favButton">Eliminar</button>
            </li>
        </ul>
    </div>
  );
};

export default FavoriteList;
