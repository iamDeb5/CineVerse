import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="relative min-w-[256px] min-h-[444px] rounded-xl overflow-hidden group cursor-pointer">
      {/* Image */}
      <img
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            : "https://via.placeholder.com/300x450"
        }
        alt={movie.title}
        className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
      />

      {/* Rating Badge */}
      <div className="absolute top-2 right-2 bg-black/70 text-xs px-2 py-1 rounded-full">
        ⭐ {movie.vote_average?.toFixed(1)}
      </div>

      {/* Bottom Info */}
      <div className="mt-2 px-1">
        <h3 className="text-sm font-semibold">{movie.title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
