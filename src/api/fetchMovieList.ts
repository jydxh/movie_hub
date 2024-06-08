import { customFetch } from "./customFetch";

async function fetchMovieList(
	mode: "now_playing" | "popular" | "top_rated" | "upcoming",
	page: string = "1"
) {
	const res = await customFetch(`/movie/${mode}?language=en-US&page=${page}`);
	return res.data;
}
export default fetchMovieList;
