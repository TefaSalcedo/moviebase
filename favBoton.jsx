import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import "./favBotonStyle.css";


const FavoriteClick = (pelicula) => {
    const [favorites, setFavorites] = React.useState([]);

    const addFavoriteClick = (e) => {
        e.preventDefault();
        const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
        // Verificar si la película ya está en favoritos
        if (storedFavorites.some(fav => fav.id === pelicula.id)) {
            console.log("Ya existe en favoritos");
            return;
        }
        // Agregar la nueva película a la lista de favoritos
        const updatedFavorites = [...storedFavorites, pelicula];

        // Guardar la lista actualizada en el Local Storage
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));

        console.log("Película agregada a favoritos:", pelicula);
        
    }

    return (
        <button
            className="favButton"
            onClick={addFavoriteClick}>
            <FontAwesomeIcon icon={faHeart} size="2xl" style={{ color: "#FF0000", }} />
        </button>
    );
};

export default FavoriteClick;
