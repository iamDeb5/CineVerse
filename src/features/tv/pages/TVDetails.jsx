import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchTVDetails, fetchTVVideos } from "../tvAPI";
import { Play } from "lucide-react";
import { X } from "lucide-react";
import { fetchTVCredits } from "../tvAPI.js";
import { fetchSimilarTVShows } from "../tvAPI.js";

function TVDetails() {
  const { id } = useParams();

  const [show, setShow] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const [playTrailer, setPlayTrailer] = useState(false);
  const [cast, setCast] = useState([]);
  const [similar, setSimilar] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchTVDetails(id);
      setShow(data);
    };
    getData();
  }, [id]);

  useEffect(() => {
    const getVideos = async () => {
      const videos = await fetchTVVideos(id);

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
      const data = await fetchTVCredits(id);
      setCast(data.slice(0, 3));
    };
    getCredits();
  }, [id]);

  // Fetch similar shows
  useEffect(() => {
    const getSimilar = async () => {
      const data = await fetchSimilarTVShows(id);
      setSimilar(data.slice(0, 8));
    };
    getSimilar();
  }, [id]);

  if (!show) {
    return <div className="text-white p-10">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-[#0A1514] text-white">
      {/* HERO */}
      <div
        className="relative min-h-[80vh] bg-cover bg-center"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${show.backdrop_path})`,
        }}
      >
        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#071312] via-[#071312]/85 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1514] via-[#0A1514]/85 to-transparent" />

        {/* CONTENT */}
        <div className="relative z-10 flex justify-between px-16 pt-20 items-start">
          {/* LEFT SIDE */}
          <div className="w-[60%]">
            <p className="text-sm text-[#9DD2BB] mb-2 tracking-wider">
              PREMIERE RELEASE
            </p>

            <h1 className="text-6xl font-bold mb-2 leading-tight">
              {show.name}
            </h1>

            {/* META */}
            <div className="flex items-center gap-5 text-gray-300 text-sm mb-4">
              <span>⭐ {show.vote_average?.toFixed(1)}</span>
              <span>{show.first_air_date?.split("-")[0]}</span>
              <span>{show.number_of_seasons} Seasons</span>
            </div>

            {/* TRAILER */}
            <div className="mt-4 relative rounded-2xl overflow-hidden">
              {!playTrailer ? (
                <>
                  <img
                    src={`https://image.tmdb.org/t/p/w780${show.backdrop_path}`}
                    className="w-full h-[500px] object-cover opacity-80"
                  />

                  <div
                    onClick={() => setPlayTrailer(true)}
                    className="absolute inset-0 flex items-center justify-center cursor-pointer group"
                  >
                    <div className="relative flex items-center justify-center">
                      <div className="absolute w-20 h-20 rounded-full bg-green-400/20 blur-xl group-hover:scale-110 transition-all duration-300" />

                      <div
                        className="w-16 h-16 flex items-center justify-center 
											bg-white/10 backdrop-blur-lg border border-white/20 
											rounded-full shadow-lg 
											group-hover:scale-110 transition-all duration-300"
                      >
                        <span className="text-white text-lg ml-1 flex items-center justify-center">
                          <Play size={20} />
                        </span>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <iframe
                    className="w-full h-[500px]"
                    src={`https://www.youtube.com/embed/${trailer}?autoplay=1`}
                    title="Trailer"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  />

                  <button
                    onClick={() => setPlayTrailer(false)}
                    className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center 
										bg-white/10 backdrop-blur-md border border-white/20 
										rounded-full text-white 
										hover:bg-white/20 hover:scale-105 transition-all duration-200"
                  >
                    ✕
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
                  `https://www.themoviedb.org/tv/${id}`,
                  "_blank",
                  "noopener,noreferrer",
                )
              }
              className="w-full bg-[#9DD2BB] text-black py-3 rounded-full font-semibold hover:scale-105 transition-all duration-200 flex items-center justify-center cursor-pointer"
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

            <div className="bg-white/5 backdrop-blur-md p-5 rounded-2xl border border-white/10">
              <p className="text-xs text-[#9DD2BB] mb-3 tracking-wider">
                INFORMATION
              </p>

              <div className="flex justify-between text-sm mb-3">
                <span className="text-[#D9E5E3]">First Air</span>
                <span>{show.first_air_date}</span>
              </div>

              <div className="flex justify-between text-sm mb-4">
                <span className="text-[#D9E5E3]">Seasons</span>
                <span>{show.number_of_seasons}</span>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {show.genres?.map((g) => (
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

                {cast.slice(0, 4).map((actor) => (
                  <div
                    key={actor.id}
                    className="flex items-center gap-3 mb-3 last:mb-0"
                  >
                    <img
                      src={
                        actor.profile_path
                          ? `https://image.tmdb.org/t/p/w185${actor.profile_path}`
                          : "https://via.placeholder.com/50"
                      }
                      alt={actor.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />

                    <div className="flex flex-col">
                      <span className="text-sm font-medium">{actor.name}</span>
                      <span className="text-xs text-gray-400">
                        {actor.character}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-xs text-[#9DD2BB] mb-1">PRODUCTION</p>
              <p className="text-sm text-[#D9E5E3]">
                {show.production_companies?.[0]?.name || "N/A"}
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-md p-4 rounded-2xl border border-white/10">
              <p className="text-sm mb-2">Audience Score</p>

              <div className="w-full bg-white/10 h-2 rounded-full">
                <div
                  className="bg-[#9DD2BB] h-2 rounded-full"
                  style={{
                    width: `${show.vote_average * 10}%`,
                  }}
                />
              </div>

              <p className="text-right mt-2 text-[#9DD2BB] font-semibold">
                {Math.round(show.vote_average * 10)}%
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* SYNOPSIS */}
      <div className="px-16 py-16 max-w-[900px]">
        <p className="text-sm text-[#9DD2BB] mb-3 tracking-wider">SYNOPSIS</p>

        <p className="text-[#D9E5E3] leading-relaxed">{show.overview}</p>
      </div>

      {/* RECOMMENDATION SECTION */}
      <div className="px-16 pb-16">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Because you like this</h2>

          <span className="text-sm text-gray-400 cursor-pointer hover:text-white transition">
            View All
          </span>
        </div>

        <div className="flex gap-5 overflow-x-auto scrollbar-hide">
          {similar.map((item) => (
            <div key={item.id} className="min-w-[180px] group cursor-pointer">
              <div className="relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 group-hover:scale-105 transition">
                <img
                  src={
                    item.poster_path
                      ? `https://image.tmdb.org/t/p/w342${item.poster_path}`
                      : "https://via.placeholder.com/300"
                  }
                  alt={item.name}
                  className="w-full h-[260px] object-cover"
                />

                <div className="absolute bottom-2 right-2 bg-[#9DD2BB] text-black text-xs px-2 py-1 rounded-md font-semibold">
                  {item.vote_average?.toFixed(1)}
                </div>
              </div>

              <div className="mt-2">
                <p className="text-sm font-medium truncate">{item.name}</p>

                <p className="text-xs text-gray-400 uppercase">TV SHOW</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TVDetails;
