import React, { useState, useEffect } from "react";
import MovieApi from "./movieApi";
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

    return(
        <div className="listPopularMovies">
            <ul className="listMovies">
                {Peliculas.map((Pelicula) => (
                    <li key={Pelicula.id}>
                        {Pelicula.name}
                        <div className="movieDetails">
                            <p>{Pelicula.original_title}</p>
                            <img src={`https://image.tmdb.org/t/p/w500${Pelicula.poster_path}`} alt={Pelicula.title} />
                            <p>{Pelicula.vote_average}</p>
                            <p>Release Date: {Pelicula.release_date}</p>
                        </div>
                        {/* <button onClick={() => eliminarPeliculaClick(Pelicula.id)}>Delete</button> */}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default MovieList;