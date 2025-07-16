import React from "react";

type MovieCardProps = {
  title: string;
  poster_path: string;
  overview: string;
  release_date: string;
  vote_average: number;
  onClick: () => void;
};

const MovieCard: React.FC<MovieCardProps> = ({
  title,
  poster_path,
  onClick,
}) => {
  const posterUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;

  return (
    <div
      onClick={onClick}
      className="cursor-pointer transition-transform hover:scale-105"
    >
      <img
        src={posterUrl}
        alt={title}
        className="w-full h-auto rounded shadow-md"
      />
    </div>
  );
};

export default MovieCard;
