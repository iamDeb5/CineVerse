function FeaturedSection({ movies }) {
  return (
    <div className="px-10 py-10 text-white">
      {/* Title */}
      <h2 className="text-2xl font-bold mb-6">New Releases</h2>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {movies.slice(0, 2).map((movie) => (
          <div
            key={movie.id}
            className="relative rounded-2xl overflow-hidden group cursor-pointer"
          >
            {/* Background */}
            <img
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              alt={movie.title}
              className="w-full h-[220px] object-cover group-hover:scale-105 transition duration-300"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent" />

            {/* Content */}
            <div className="absolute bottom-4 left-4 right-4">
              <h3 className="text-lg font-semibold">{movie.title}</h3>

              <p className="text-sm text-gray-300 mb-2">Watch Now →</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedSection;
