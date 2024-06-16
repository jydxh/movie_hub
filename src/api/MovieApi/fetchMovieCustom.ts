import { customFetch } from "@/api/customFetch";
import { Credits, MovieImages } from "@/utils/types";

async function fetchMovieCustom({
	id = "271110",
	mode,
}: {
	id?: string;
	mode: "credits" | "images";
}) {
	const res = await customFetch<Credits | MovieImages>(`/movie/${id}/${mode}`);
	return res.data;
}
export default fetchMovieCustom;
