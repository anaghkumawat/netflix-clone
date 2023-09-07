import useMovieTrailer from "@/hooks/useMovieTrailer";
import React from "react";
import { useSelector } from "react-redux";

const BillboardVideo = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  useMovieTrailer(movieId);
  return (
    <div className="w-full">
      <iframe
        className="w-full brightness-[60%] object-cover h-[56.25vw]"
        //className="w-full h-[56.25vw]"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?&autoplay=1&mute=1&rel=0"
        }
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default BillboardVideo;
