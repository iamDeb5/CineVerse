import { useParams } from "react-router-dom";
import { fetchMovieDetails, fetchMovieVideos } from "../../movies/movieAPI.js";
import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { Play } from "lucide-react";
import { fetchMovieCredits } from "../../movies/movieAPI.js";
import { fetchSimilarMovies } from "../../movies/movieAPI.js";

function MovieDetails() {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const [playTrailer, setPlayTrailer] = useState(false);
  const [cast, setCast] = useState([]);
  const [similar, setSimilar] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);

  // Fetch movie
  useEffect(() => {
    const getMovie = async () => {
      const data = await fetchMovieDetails(id);
      setMovie(data);
    };
    getMovie();
  }, [id]);

  // Fetch trailer
  useEffect(() => {
    const getVideos = async () => {
      const videos = await fetchMovieVideos(id);

      const trailerVideo = videos.find(
        (v) => v.type === "Trailer" && v.site === "YouTube",
      );

      if (trailerVideo) {
        setTrailer(trailerVideo.key);
      }
    };

    getVideos();
  }, [id]);

  // Fetch cast
  useEffect(() => {
    const getCredits = async () => {
      const data = await fetchMovieCredits(id);
      setCast(data.slice(0, 3)); // only top 3 (like your UI)
    };
    getCredits();
  }, [id]);

  // Fetch similar movies
  useEffect(() => {
    const getSimilar = async () => {
      const data = await fetchSimilarMovies(id);
      setSimilar(data.slice(0, 8)); // UI shows limited cards
    };
    getSimilar();
  }, [id]);

  if (!movie) {
    return <div className="text-white p-10">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-[#0A1514] text-white">
      {/* HERO */}
      <div
        className="relative min-h-[85vh] bg-cover bg-center"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
        }}
      >
        {/* overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#071312] via-[#071312]/85 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1514] via-[#0A1514]/85 to-transparent" />

        {/* content */}
        <div className="relative z-10 flex justify-between px-16 pt-20 items-start">
          {/* LEFT */}
          <div className="w-[60%]">
            <p className="text-sm text-[#9DD2BB] mb-2 tracking-wider">
              PREMIERE RELEASE
            </p>

            <h1 className="text-6xl font-bold mb-2 leading-tight">
              {movie.title}
            </h1>

            <div className="flex items-center gap-5 text-gray-300 text-sm mb-4">
              <span className="flex items-center gap-1">
                ⭐ {movie.vote_average?.toFixed(1)}
              </span>

              <span>{movie.release_date?.split("-")[0]}</span>

              <span>{movie.runtime} min</span>

              <span className="border border-white/20 px-2 py-0.5 rounded text-xs">
                4K HDR
              </span>
            </div>

            {/* TRAILER UI (DESIGN MATCH) */}
            <div className="mt-4 relative rounded-2xl overflow-hidden">
              {!playTrailer ? (
                <>
                  <img
                    src={`https://image.tmdb.org/t/p/w780${movie.backdrop_path}`}
                    className="w-full h-[500px] object-cover opacity-80"
                  />

                  <div
                    onClick={() => setPlayTrailer(true)}
                    className="absolute inset-0 flex items-center justify-center cursor-pointer group"
                  >
                    <div className="relative flex items-center justify-center">
                      {/* Outer glow ring */}
                      <div className="absolute w-20 h-20 rounded-full bg-green-400/20 blur-xl group-hover:scale-110 transition-all duration-300" />

                      {/* Glass circle */}
                      <div
                        className="w-16 h-16 flex items-center justify-center 
		bg-white/10 backdrop-blur-lg border border-white/20 
		rounded-full shadow-lg 
		group-hover:scale-110 transition-all duration-300"
                      >
                        {/* Play icon */}
                        <span className="text-white text-lg flex items-center justify-center">
                          <Play size={20} />
                        </span>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* 🎬 VIDEO */}
                  <iframe
                    className="w-full h-[500px]"
                    src={`https://www.youtube.com/embed/${trailer}?autoplay=1`}
                    title="Trailer"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  />

                  {/* ❌ CLOSE BUTTON — PASTE HERE */}
                  <button
                    onClick={() => setPlayTrailer(false)}
                    className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center 
	bg-white/10 backdrop-blur-md border border-white/20 
	rounded-full text-white 
	hover:bg-white/20 hover:scale-105 transition-all duration-200"
                  >
                    <X size={18} />
                  </button>
                </>
              )}

              <p className="text-sm text-gray-400 mt-2">
                Official Trailer: Part 1
              </p>
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="w-[340px] space-y-4 mt-2">
            <button
              onClick={() =>
                window.open(
                  `https://www.themoviedb.org/movie/${id}`,
                  "_blank",
                  "noopener,noreferrer",
                )
              }
              className="w-full bg-[#9DD2BB] text-black py-3 rounded-full hover:scale-105 transition flex items-center justify-center cursor-pointer"
            >
              <Play size={20} />
              <span className="ml-2 font-semibold">WATCH NOW</span>
            </button>

            <div className="flex gap-2">
              <button
                onClick={() => setIsFavorite(!isFavorite)}
                className={`flex-1 py-2 rounded-full border transition ${
                  isFavorite
                    ? "bg-[#9DD2BB] text-black border-[#9DD2BB]"
                    : "border-white/20 hover:bg-white/10"
                }`}
              >
                {isFavorite ? "♥ Added" : "♡ Favorites"}
              </button>
              <button className="flex-1 border border-white/20 py-2 rounded-full hover:bg-white/10 transition cursor-pointer">
                Share
              </button>
            </div>

            {/* INFO CARD */}
            <div className="bg-black/7 backdrop-blur-md p-5 rounded-2xl border border-white/10">
              <p className="text-xs mb-3 tracking-wider text-[#9DD2BB]">
                INFORMATION
              </p>

              <div className="flex justify-between text-sm mb-3">
                <span className="text-[#D9E5E3]">Release</span>
                <span>{movie.release_date}</span>
              </div>

              <div className="flex justify-between text-sm mb-4">
                <span className="text-[#D9E5E3]">Runtime</span>
                <span>{movie.runtime} min</span>
              </div>

              {/* GENRES */}
              <div className="flex flex-wrap gap-2 mb-4">
                {movie.genres?.map((g) => (
                  <span
                    key={g.id}
                    className="bg-white/10 px-3 py-1 rounded-full text-xs"
                  >
                    {g.name}
                  </span>
                ))}
              </div>

              {/* TOP CAST */}
              <div className="bg-white/5 backdrop-blur-md p-4 rounded-2xl border border-white/10 mb-3">
                <p className="text-xs text-[#9DD2BB] mb-3 tracking-wider">
                  TOP CAST
                </p>

                <div className="flex flex-col gap-3">
                  {cast.map((actor) => (
                    <div key={actor.id} className="flex items-center gap-3">
                      {/* Avatar */}
                      <img
                        src={
                          actor.profile_path
                            ? `https://image.tmdb.org/t/p/w185${actor.profile_path}`
                            : "https://via.placeholder.com/50"
                        }
                        alt={actor.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />

                      {/* Info */}
                      <div className="flex flex-col">
                        <span className="text-sm font-medium">
                          {actor.name}
                        </span>

                        <span className="text-xs text-gray-400">
                          as {actor.character}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* PRODUCTION */}
              <p className="text-xs text-[#9DD2BB] mb-1">PRODUCTION</p>
              <p className="text-sm text-[#D9E5E3]">
                {movie.production_companies?.[0]?.name || "N/A"}
              </p>
            </div>

            {/* AUDIENCE SCORE */}
            <div className="bg-white/5 backdrop-blur-md p-4 rounded-2xl border border-white/10">
              <p className="text-sm mb-2">Audience Score</p>

              <div className="w-full bg-white/10 h-2 rounded-full">
                <div
                  className="bg-[#9DD2BB] h-2 rounded-full"
                  style={{
                    width: `${movie.vote_average * 10}%`,
                  }}
                />
              </div>

              <p className="text-right mt-2 text-[#9DD2BB] font-semibold">
                {Math.round(movie.vote_average * 10)}%
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* SYNOPSIS */}
      <div className="px-16 py-16 max-w-[900px]">
        <p className="text-sm text-[#9DD2BB] mb-3 tracking-wider">SYNOPSIS</p>

        <p className="text-[#D9E5E3] leading-relaxed">{movie.overview}</p>
      </div>

      {/* RECOMMENDATION SECTION */}
      <div className="px-12 pb-16">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Because you like Sci-Fi</h2>

          <span className="text-sm text-gray-400 cursor-pointer hover:text-white transition">
            View All
          </span>
        </div>

        <div className="flex gap-5 overflow-x-auto scrollbar-hide">
          {similar.map((movie) => (
            <div key={movie.id} className="min-w-[180px] group cursor-pointer">
              {/* CARD */}
              <div className="relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 group-hover:scale-105 transition">
                <img
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w342${movie.poster_path}`
                      : "https://via.placeholder.com/300"
                  }
                  alt={movie.title}
                  className="w-full h-[260px] object-cover"
                />

                {/* RATING BADGE */}
                <div className="absolute bottom-2 right-2 bg-green-400 text-black text-xs px-2 py-1 rounded-md font-semibold">
                  {movie.vote_average?.toFixed(1)}
                </div>
              </div>

              {/* INFO */}
              <div className="mt-2">
                <p className="text-sm font-medium truncate">{movie.title}</p>

                <p className="text-xs text-gray-400 uppercase">
                  {movie.genre_ids?.length ? "Movie" : ""}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
