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

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition" />

      {/* Rating Badge */}
      <div className="absolute top-2 right-2 bg-black/70 text-xs px-2 py-1 rounded-full backdrop-blur">
        ⭐ {movie.vote_average?.toFixed(1)}
      </div>

      {/* Title */}
      <div className="absolute bottom-2 left-2 right-2 text-sm font-semibold opacity-0 group-hover:opacity-100 transition">
        {movie.title}
      </div>
    </div>
  );
};

export default MovieCard;
