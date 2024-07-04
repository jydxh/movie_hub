import axios from "axios";
//import "dotenv/config";

const baseURL = "https://api.themoviedb.org/3";
export const customFetch = axios.create({
	baseURL,
	headers: {
		accept: "application/json",
		Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
	},
});
