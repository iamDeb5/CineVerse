import { tmdb } from "../../services/tmdb";

export const fetchTVDetails = async (id) => {
	try {
		const res = await tmdb.get(`/tv/${id}`);
		return res.data;
	} catch (err) {
		console.error("TV fetch error:", err);
		return null;
	}
};

export const fetchTVVideos = async (id) => {
	try {
		const res = await tmdb.get(`/tv/${id}/videos`);
		return res.data.results;
	} catch (err) {
		console.error("TV video error:", err);
		return [];
	}
};

export const fetchTVCredits = async (id) => {
	try {
		const response = await tmdb.get(`/tv/${id}/credits`);
		return response.data.cast;
	} catch (error) {
		console.error("Credits error:", error);
		return [];
	}
};

export const fetchSimilarTVShows = async (id) => {
	try {
		const response = await tmdb.get(`/tv/${id}/similar`);
		return response.data.results;
	} catch (error) {
		console.error("Similar TV shows error:", error);
		return [];
	}
};
