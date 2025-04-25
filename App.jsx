import React, { useEffect } from "react";
import MovieList from "./movieList";

function app() {
    const [Peliculas, setPeliculas] = React.useState([]);
    const [Pelicula, setPelicula] = React.useState({});
    
    const agregarPeliculaClick = (e) => {
        e.preventDefault();
        if ( Pelicula.trim() === "" ) return;
        const nuevoPelicula = {
            id: Peliculas.length + 1,
        };
    }

    const eliminarPeliculaClick = (id) => {
        const nuevasPelicula = Peliculas.filter((Pelicula) => Pelicula.id !== id);
        setPeliculas(nuevasPelicula);
    }
    
  return (
    <div className="App">
      <h2>Movie List</h2>
      <MovieList/>
      {/* <form>
        <input
          type="text"
          placeholder="Add a movie"
          value={Pelicula}
          onChange={(e) => setPelicula(e.target.value)}
        />
        <button 
            type="submit"
            onClick={agregarPeliculaClick}>Add</button>
        <ul>
            {Peliculas.map((Pelicula) => (
                <li key={Pelicula.id}>
                {Pelicula.name}
                <button onClick={() => eliminarPeliculaClick(Pelicula.id)}>Delete</button>
                </li>
            ))}
        </ul>
      </form> */}
    </div>
  );
}

export default app;