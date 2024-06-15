import { customFetch } from "../customFetch";
import { MovieDetailResponse } from "@/utils/types";
async function fetchMovieDetails({ id = "271110" }: { id?: string }) {
	const res = await customFetch<MovieDetailResponse>(
		`/movie/${id}?language=en-US`
	);
	return res.data;
}
export default fetchMovieDetails;
