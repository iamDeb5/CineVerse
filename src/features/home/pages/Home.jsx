import React, { useState, useEffect } from "react";
import { fetchTrendingMovies } from "../homeAPI.js";
import Navbar from "../../../components/Navbar.jsx";
import HeroBanner from "../components/HeroBanner.jsx";
import MovieRow from "../components/MovieRow.jsx";
import RecentlyWatched from "../components/RecentlyWatched.jsx";
import FeaturedSection from "../components/FeaturedSection.jsx";

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const data = await fetchTrendingMovies();
      setMovies(data);
    };
    getMovies();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A1514] to-[#0A1514] text-white">
      <Navbar />
      <HeroBanner />
      <MovieRow title="Trending Movies" movies={movies} />
      <RecentlyWatched movies={movies} />
      <FeaturedSection movies={movies} />
    </div>
  );
};

export default Home;
