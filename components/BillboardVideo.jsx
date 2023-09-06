import useMovieTrailer from "@/hooks/useMovieTrailer";
import React from "react";
import { useSelector } from "react-redux";

const BillboardVideo = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  useMovieTrailer(movieId);
  return (
    <div>
      <iframe
        className="w-full h-[56.25vw] object-cover brightness-[60%]"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?&autoplay=1&mute=1"
        }
        muted
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default BillboardVideo;
