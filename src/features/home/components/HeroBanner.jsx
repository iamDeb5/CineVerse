import React from "react";

const HeroBanner = () => {
  return (
    <div className="relative h-screen w-full text-white">
      {/* Background Image */}
      <img
        src="https://image.tmdb.org/t/p/original/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg"
        alt="hero"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      {/* Overlay Gradient */}

      <div className="absolute inset-0 bg-gradient-to-r from-[#0A1514] via-[#0A1514]/70 to-transparent" />

      <div className="absolute inset-0 bg-gradient-to-t from-[#0A1514] via-[#0A1514]/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-16 max-w-2xl">
        {/* Tag */}
        <span className="bg-green-500/20 text-green-400 text-xs px-3 py-1 rounded-full w-fit mb-4">
          TRENDING NOW
        </span>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4">NEON DREAMS</h1>

        {/* Description */}
        <p className="text-gray-300 mb-6">
          In a city that never sleeps, one man must choose between the virtual
          life he loves and the harsh reality that’s hunting him down.
        </p>

        {/* Buttons */}
        <div className="flex gap-4">
          <button className="bg-gradient-to-r from-[#9dd2bbe0] to-[#015940] text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition">
            ▶ Watch Trailer
          </button>

          <button className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 hover:bg-white/20 transition">
            ♡ Add to Favorites
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
