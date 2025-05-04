import "./moviesList.css";
import axios from 'axios';
import { useEffect, useState } from 'react';

const MoviesList = () => {
  const [movies, setMovies] = useState([]);
  const [inputText, setInputText] = useState('');
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/search/movie?query=${query}&language=pt-BR`,
          {
            headers: {
              accept: 'application/json',
              Authorization: process.env.REACT_APP_TMDB_TOKEN,
            },
          }
        );
        setMovies(response.data.results);
      } catch (error) {
        console.error('Erro ao buscar filmes:', error);
      }
    };

    if (query) {
      fetchMovies();
    }
  }, [query]);

  return (
    <div className='bloco'>
      <h1>Buscar Filmes</h1>

      <div className="form-container">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Digite o nome do filme"
          className="input-filme"
        />
        <button className="botao" onClick={() => setQuery(inputText)}>
          Buscar
        </button>
      </div>

      <div className="movies-grid">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt={movie.title}
            />
            <h3>{movie.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoviesList;
