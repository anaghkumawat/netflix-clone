import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const MovieListsContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className="pb-40">
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
    </div>
  );
};

export default MovieListsContainer;
