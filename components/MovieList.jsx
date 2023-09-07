import React from "react";
import MovieCard from "./MovieCard";

const MovieList = () => {
  return (
    <div className="px-4 md:px-12 mt-4 space-y-8">
      <div>
        <p className="text-white text-md md:text-xl lg:text-2xl font-semibold mb-4">
          Trending Now
        </p>
        <div className="grid grid-cols gap-2">
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </div>
      </div>
    </div>
  );
};

export default MovieList;
