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
    <div className="min-h-screen px-4 py-8 text-white relative z-10">
      <div className="max-w-xl mx-auto space-y-6">
        {isLoading && <p className="text-muted-foreground">Loading...</p>}
        {error && <p className="text-destructive">{error}</p>}

        <form onSubmit={onSubmit} className="space-y-4">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full px-4 py-2 rounded-md border border-border bg-white/10 text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Enter movie title"
          />
        
        </form>

        {movies.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {movies.map((movie) => (
              <MovieCard key={movie.id} {...movie} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MoviesList;