import { tmdb } from "../../services/tmdb";

export const fetchMovieDetails = async (id) => {
	try {
		const response = await tmdb.get(`/movie/${id}`);
		return response.data;
	} catch (error) {
		console.error("Movie details error:", error);
		return null;
	}
};

export const fetchMovieVideos = async (id) => {
	try {
		const response = await tmdb.get(`/movie/${id}/videos`);
		return response.data.results;
	} catch (error) {
		console.error("Video fetch error:", error);
		return [];
	}
};

export const fetchMovieCredits = async (id) => {
	try {
		const response = await tmdb.get(`/movie/${id}/credits`);
		return response.data.cast;
	} catch (error) {
		console.error("Credits error:", error);
		return [];
	}
};

export const fetchSimilarMovies = async (id) => {
	try {
		const response = await tmdb.get(`/movie/${id}/similar`);
		return response.data.results;
	} catch (error) {
		console.error("Similar movies error:", error);
		return [];
	}
};
