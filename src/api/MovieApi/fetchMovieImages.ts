import { customFetch } from "@/api/customFetch";
import { MovieImages } from "@/utils/types";

async function fetchMovieDetails({ id = "271110" }: { id?: string }) {
	const res = await customFetch<MovieImages>(`/movie/${id}/images`);
	return res.data;
}
export default fetchMovieDetails;
