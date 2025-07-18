import React, { useState } from "react";
import { fetchPopularMovies } from ".//createAsyncThunk/movies.api";
import { useAppDispatch } from "./hooks/appDispatch";
import { useSelector } from "react-redux";
import { selectError, selectIsLoading, selectMovies } from "./movies.selector";
import MovieCard from "./movieCard";
import { useEffect } from "react";
import type { MoviesType } from "./type";
import MovieModal from "./movieModal";
import ErrorMessage from "./errorMessage";
import Loader from "./loader";
import SearchMovies from "./inputMovies";
const MoviesList = () => {
  const [selectedMovie, setSelectedMovie] = useState<MoviesType | null>(null);


  const dispatch = useAppDispatch();
  const movies = useSelector(selectMovies);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchPopularMovies(""));
  }, [dispatch]);

  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-screen-md px-4">
        <SearchMovies />
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
