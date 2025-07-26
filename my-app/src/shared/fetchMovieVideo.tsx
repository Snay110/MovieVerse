import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiKey = import.meta.env.VITE_API_KEY;

export const fetchMovieVideo = createAsyncThunk<string, string>(
  "movies/fetchMovieVideo",
  async (id) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}&language=en-US`,
    );
    const videos = response.data.results;

    const trailer = videos.find(
      (vid: { site: string; type: string; key: string }) =>
        vid.site === "YouTube" && vid.type === "Trailer",
    );

    if (trailer) {
      return trailer.key;
    }

    throw new Error("Trailer not found");
  },
);
