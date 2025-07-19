import React from "react";
import { useNavigate } from "react-router-dom";

type MovieCardProps = {
  id:number
  title: string;
  poster_path: string;
  overview: string;
  release_date: string;
  vote_average: number;
};

const MovieCard: React.FC<MovieCardProps> = ({
  id,
  title,
  poster_path,
}) => {
  const navigate = useNavigate();
  const posterUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;

  const handleClick = () => {
    navigate(`/movies/${id}`);
  };

  return (
    <div
      onClick={handleClick}
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
