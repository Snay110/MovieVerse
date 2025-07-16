import React, { useState } from "react";
import { fetchPopularMovies } from "./movies.api";
import { useAppDispatch } from "./hooks/appDispatch";
import { useSelector } from "react-redux";
import { selectError, selectIsLoading, selectMovies } from "./movies.selector";
import MovieCard from "./movieCard";
import { useEffect } from "react";
import type { MoviesType } from "./type";
import MovieModal from "./movieModal";
import ErrorMessage from "./errorMessage";
import Loader from "./loader";

const MoviesList = () => {
  const [query, setQuery] = useState("");
  const [selectedMovie, setSelectedMovie] = useState<MoviesType | null>(null);

  const dispatch = useAppDispatch();
  const movies = useSelector(selectMovies);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchPopularMovies(""));
  }, [dispatch]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query.trim()) {
      dispatch(fetchPopularMovies(query.trim()));
    }
  };

  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-screen-md px-4">
        <form onSubmit={onSubmit} className="space-y-4">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full px-4 py-2 rounded-md border border-border bg-white/10 text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Enter movie title"
          />
        </form>

        {isLoading && <Loader />}
        {error && <ErrorMessage message={error} />}

        {movies.length > 0 && (
          <div className="mt-48 px-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {movies.map((movie) => (
              <MovieCard
                key={movie.id}
                {...movie}
                onClick={() => setSelectedMovie(movie)}
              />
            ))}
          </div>
        )}
      </div>

      {selectedMovie && (
        <MovieModal
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}
    </div>
  );
};

export default MoviesList;
