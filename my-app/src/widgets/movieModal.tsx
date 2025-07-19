import React from "react";
import type { MoviesType } from "../entities/type"
type MovieModalProps = {
  movie: MoviesType
  onClose: () => void;
};

const MovieModal: React.FC<MovieModalProps> = ({ movie, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded max-w-lg w-full relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-black text-xl"
        >
          ✖️
        </button>
        <h2 className="text-xl font-bold mb-2">{movie.title}</h2>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="mb-4"
        />
        <p>{movie.overview}</p>
      </div>
    </div>
  );
};

export default MovieModal;