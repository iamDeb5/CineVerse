function RecentlyWatched({ movies }) {
  return (
    <div className="px-10 py-8 text-white">
      {/* Title */}
      <h2 className="text-2xl font-bold mb-1">Recently Watched</h2>
      <p className="text-sm text-gray-400 mb-6">Continue where you left off</p>

      {/* Scroll Row */}
      <div className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory">
        {movies.slice(0, 5).map((movie, index) => (
          <div key={movie.id} className="min-w-[250px] snap-start">
            {/* Image */}
            <div className="relative rounded-xl overflow-hidden">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-[140px] object-cover"
              />

              {/* Progress Bar */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-700">
                <div
                  className="h-full bg-green-400"
                  style={{ width: `${(index + 1) * 20}%` }}
                />
              </div>
            </div>

            {/* Info */}
            <div className="mt-2">
              <h3 className="text-sm font-semibold">{movie.title}</h3>
              <p className="text-xs text-gray-400">
                Remaining: {(index + 1) * 10}m
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentlyWatched;
