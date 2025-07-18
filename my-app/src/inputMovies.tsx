import { useState } from "react";
import { searchMoviesByQuery } from ".//createAsyncThunk/movies.api2";
import { useAppDispatch } from "./hooks/appDispatch";

const SearchMovies = () => {
  const [query, setQuery] = useState("");
  const dispatch = useAppDispatch();

  function handleSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (query.trim()) {
      dispatch(searchMoviesByQuery(query.trim()));
    }
  }

  return (
    <form onSubmit={handleSearch}>
      <input
        value={query}
        type="text"
        className="w-full px-4 py-2 rounded-md border border-border bg-white/10 text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-primary"
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter movie title"
      />
    </form>
  );
};
export default SearchMovies;
