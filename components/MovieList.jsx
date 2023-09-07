import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log(movies);
  return (
    <div className="px-4 md:px-12 mt-4 space-y-8">
      <div>
        <p className="text-white text-md md:text-xl lg:text-2xl font-semibold mb-4">
          {title}
        </p>
        <div className="grid grid-cols gap-2 grid-flow-col">
          {movies.map((movie) => (
            <MovieCard key={movie.id} thumbnail={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
