import { customFetch } from "../customFetch";
import { MovieDetailResponse } from "@/utils/types";
async function fetchMovieDetails({ id }: { id: string }) {
	const res = await customFetch<MovieDetailResponse>(
		`/movie/${id}?language=en-US`
	);
	return res;
}
export default fetchMovieDetails;
