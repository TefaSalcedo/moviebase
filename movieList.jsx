import React, { useState, useEffect } from "react";
import MovieApi from "./movieApi";
import FavoriteClick from "./favBoton";
import "./movieList.css";

const MovieList = () => {
    const [Peliculas, setPeliculas] = useState([]); // Define el estado para las películas

    useEffect(() => {
        const fetchData = async () => {
            const data = await MovieApi();
            setPeliculas(data);
        };
        fetchData();
    }, []);

    return (
        <div className="listAllMovies">
            <ul className="listMovies">
                {Peliculas.map((Pelicula) => (
                    <li key={Pelicula.id}>
                        {Pelicula.name}
                        <div className="movieDetails">
                            <img
                                src={`https://image.tmdb.org/t/p/w500${Pelicula.poster_path}`}
                                alt={Pelicula.title}
                            />
                            <p>{Pelicula.original_title}</p>
                            {/* <p>{Pelicula.release_date}</p> */}

                        </div>
                        <FavoriteClick pelicula={Pelicula} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MovieList;
