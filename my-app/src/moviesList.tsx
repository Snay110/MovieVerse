import React, { useState } from "react";
import { fetchPopularMovies } from "./movieSlice";
import { useAppDispatch } from "./hooks/appDispatch";

const MoviesList: React.FC = () => {
  const [query, setQuery] = useState("");
  const dispatch = useAppDispatch();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query.trim()) {
      dispatch(fetchPopularMovies(query.trim()));
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter movie title"
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default MoviesList;
