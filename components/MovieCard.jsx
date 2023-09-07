import React from "react";

const MovieCard = () => {
  return (
    <div className="group bg-zinc-900 col-span relative h-[12vw]">
      <img
        className="cursor-pointer object-cover transition duration shadow-xl rounded-md group-hover:opacity-90 sm:group-hover:opacity-0 delay-300 w-full h-[12vw]"
        src=""
        alt="Thumbnail"
      />
      <div></div>
    </div>
  );
};

export default MovieCard;
