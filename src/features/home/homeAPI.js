import { tmdb } from "../../services/tmdb.js";

export const fetchTrendingMovies = async () => {
	const response = await tmdb.get("/trending/movie/day");
	return response.data.results;
};

export const searchMulti = async (query) => {
	try {
		const response = await tmdb.get("/search/multi", {
			params: {
				query: query,
			},
		});

		return response.data.results;
	} catch (error) {
		console.error("Search error:", error);
		return [];
	}
};
