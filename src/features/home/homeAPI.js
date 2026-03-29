import { tmdb } from "../../services/tmdb.js";

export const fetchTrendingMovies = async () => {
  const response = await tmdb.get("/trending/movie/day");
  return response.data.results;
};
