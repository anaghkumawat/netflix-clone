import React, { useEffect } from "react";

import { Info } from "lucide-react";
import { useSelector } from "react-redux";
import useMovieTrailer from "@/hooks/useMovieTrailer";
import BillboardInfo from "./BillboardInfo";
import BillboardVideo from "./BillboardVideo";

const Billboard = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;
  const mainMovie = movies[0];
  console.log(mainMovie);

  const { original_title, overview, id } = mainMovie;

  return (
    <div className="relative h-[56.25vw]">
      <BillboardVideo movieId={id} />
      <BillboardInfo title={original_title} overview={overview} />
    </div>
  );
};

export default Billboard;
