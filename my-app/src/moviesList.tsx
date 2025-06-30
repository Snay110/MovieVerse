import { useState } from "react";
import { useDispatch} from "react-redux";
import fetchPopularMovies from "./movieSlice";

const moviesList: React.FC = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch()
};
