import { customFetch } from "./customFetch";
import { Genre } from "@/utils/types";
const fetchGenres = async () => {
	const res = await customFetch<{ genres: Genre[] }>(
		"/genre/movie/list?language=en"
	);
	//console.log(res.data.genres);
	return res.data.genres;
};

export default fetchGenres;
