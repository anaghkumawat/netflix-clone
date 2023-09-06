"use client";

import Navbar from "@/components/Navbar";
import Billboard from "@/components/Billboard";
import useNowPlayingMovies from "@/hooks/useNowPlayingMovies";

export default function Home() {
  useNowPlayingMovies();

  return (
    <>
      <Navbar />
      <Billboard />
    </>
  );
}
