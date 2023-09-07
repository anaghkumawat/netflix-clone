"use client";

import Navbar from "@/components/Navbar";
import Billboard from "@/components/Billboard";
import useNowPlayingMovies from "@/hooks/useNowPlayingMovies";
import MovieList from "@/components/MovieList";
import MovieListsContainer from "@/components/MovieListsContainer";

export default function Home() {
  useNowPlayingMovies();

  return (
    <>
      <Navbar />
      <Billboard />
      <MovieListsContainer />
    </>
  );
}
