import React from "react";
interface MovieCardProps {
  id: number;
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
            <img src="" alt="" />
            <h2></h2>
            <p></p>
            <p></p>
            <p></p>
        </div>
    )
};
