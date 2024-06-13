import { Genre } from "@/utils/types";
import { customFetch } from "./customFetch";

async function fetchTVGenres() {
	const res = await customFetch<{ genres: Genre[] }>(
		"/genre/tv/list?language=en"
	);
	return res.data;
}
export default fetchTVGenres;
