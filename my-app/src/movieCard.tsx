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
  overview,
  release_date,
  vote_average,
  onClick,
}) => {
  return (
    <div onClick={onClick} className="cursor-pointer">
      <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
      <h2>{title}</h2>
      <p>{release_date}</p>
      <p>{overview}</p>
      <p>{vote_average}</p>
    </div>
  );
};

export default MovieCard;
