import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useAppDispatch } from "./hooks/appDispatch";
import { useAppSelector } from "./hooks/useAppSelector";
import { fetchMovieById } from "./createAsyncThunk/movieDetail";
import { fetchMovieVideo } from "./createAsyncThunk/fetchMovieVideo";
import VideoPlayer from "./videoPlayer";
import type { RootState } from "./store";

const MovieDetails = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id) {
      dispatch(fetchMovieById(id));
      dispatch(fetchMovieVideo(id));
    }
  }, [dispatch, id]);

  const { selectedMovie, isLoading, videoUrl } = useAppSelector(
    (state: RootState) => state.movies
  );

  if (isLoading) {
    return <div className="text-center text-white mt-10">Loading...</div>;
  }

  if (!selectedMovie) {
    return (
      <div className="text-center text-white mt-10">
        <p>Movie not found</p>
      </div>
    );
  }

  return (
    <div className="p-6 text-white">
      <h1 className="text-3xl font-bold mb-4">{selectedMovie.title}</h1>
      <p className="mb-4">{selectedMovie.overview}</p>
      <img
        src={`https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`}
        alt={selectedMovie.title}
        className="w-full max-w-md rounded"
      />
      {videoUrl && <VideoPlayer videoUrl={videoUrl} />}
    </div>
  );
};

export default MovieDetails;