import React, { useState } from "react";
import { fetchPopularMovies } from "./movies.api";
import { useAppDispatch } from "./hooks/appDispatch";
import { useSelector} from "react-redux";
import type { RootState } from "./store"
const MoviesList = () => {
  const [query, setQuery] = useState("");
  const dispatch = useAppDispatch();
    const selector = useSelector((state:RootState)=> state.movies.movies);
const isLoading = useSelector((state:RootState)=> state.movies.isLoading)
const error = useSelector((state:RootState)=> state.movies.error)

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query.trim()) {
      dispatch(fetchPopularMovies(query.trim()));
    }
  };

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
    {selector}
 </>
  );
};

export default MoviesList;
