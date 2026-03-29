import MovieCard from "../../movies/components/MovieCard.jsx";

function MovieRow({ title, movies }) {
  return (
    <div className=" text-white">
      {/* Title */}
      <div className="flex justify-between items-center mb-4 px-10 py-8">
        <div>
          <h2 className="text-3xl font-semibold tracking-wide text-[#9DD2BB]">
            {title}
          </h2>
          <p className="text-sm text-gray-400 mt-1 font-medium tracking-wide">
            The most watched this week
          </p>
        </div>

        <span className="text-lg text-[#9DD2BB] font-semibold cursor-pointer">
          Explore All →
        </span>
      </div>

      {/* Scroll Row */}
      <div className="flex gap-6 overflow-x-auto scrollbar-hide pl-10 pb-2">
        {movies.map((movie) => (
          <div key={movie.id} className="min-w-[256px] min-h-[444px]">
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieRow;
