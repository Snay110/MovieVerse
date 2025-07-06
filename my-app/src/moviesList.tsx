import React, { useState } from "react";
import { fetchPopularMovies } from "./movies.api";
import { useAppDispatch } from "./hooks/appDispatch";
import { useSelector } from "react-redux";
import { selectError, selectIsLoading, selectMovies } from "./movies.selector";
import MovieCard from "./movieCard";
import ErrorMessage from "./errorMessage";
import Loader from "./loader";
const MoviesList = () => {
  const [query, setQuery] = useState("");
  const dispatch = useAppDispatch();

  const movies = useSelector(selectMovies);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query.trim()) {
      dispatch(fetchPopularMovies(query.trim()));
    }
  };
  if (isLoading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;
  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter movie title"
        />
        <button type="submit">Search</button>
      </form>
      {movies.length > 0 &&
        movies.map((movie) => (
          <div key={movie.id}>
            <h3>{movie.title}</h3>
            <p>{movie.overview}</p>
          </div>
        ))}
      {movies.map((movie) => (
        <MovieCard key={movie.id} {...movie} />
      ))}
    </>
  );
};

export default MoviesList;
