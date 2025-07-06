import React from "react";
interface MovieCardProps {
  title: string;
  poster_path: string;
  overview: string;
  release_date: string;
  vote_average: number;
}
const MovieCard: React.FC<MovieCardProps> = ({
  title,
  poster_path,
  overview,
  release_date,
  vote_average
}) => {
    return(
        <div>
            <img src={`https://image.tmdb.org/t/p/w500 ${poster_path}`}/>"
            <h2>{title}</h2>
            <p>{release_date}</p>
            <p>{overview}</p>
            <p>{vote_average}</p>
        </div>
    )
};
export default MovieCard