
const MovieApi = async () => {
const apiKey = import.meta.env.VITE_API_KEY;

const options = {
    method: 'GET',
    headers: { 
      accept: 'application/json',
      Authorization: `Bearer ${apiKey}`,
    }
  };

  const respuesta = await fetch("https://api.themoviedb.org/3/movie/popular?language=es-ES&page=1", options);
  const data = await respuesta.json();
  return data.results;
}

export default MovieApi;