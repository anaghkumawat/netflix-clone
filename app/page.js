"use client";

import Navbar from "@/components/Navbar";
import Billboard from "@/components/Billboard";
import useNowPlayingMovies from "@/hooks/useNowPlayingMovies";
import MovieList from "@/components/MovieList";

export default function Home() {
  useNowPlayingMovies();

  return (
    <>
      <Navbar />
      <Billboard />
      <div className="pb-40">
        <MovieList />
      </div>
    </>
  );
}
