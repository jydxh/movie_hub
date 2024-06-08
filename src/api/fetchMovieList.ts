import { customFetch } from "./customFetch";
import { MovieResultResponse } from "@/utils/types";

async function fetchMovieList(
	mode: "now_playing" | "popular" | "top_rated" | "upcoming",
	page: string = "1"
) {
	const res = await customFetch<MovieResultResponse>(
		`/movie/${mode}?language=en-US&page=${page}`
	);
	console.log(res.data);
	return res.data;
}
export default fetchMovieList;
