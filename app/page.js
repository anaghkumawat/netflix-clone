"use client";

import Navbar from "@/components/Navbar";
import { useEffect } from "react";
import { API_OPTIONS } from ".env";

export default function Home() {
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json.results);
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  return (
    <>
      <Navbar />
    </>
  );
}
