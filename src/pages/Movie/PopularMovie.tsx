import fetchMovieList from "@/api/fetchMovieList";
import { LoaderFunction } from "react-router";
import { MovieResultResponse } from "@/utils/types";

export const loader: LoaderFunction = async ({
	request,
}): Promise<MovieResultResponse | null> => {
	const url = new URL(request.url);
	const page = url.searchParams.get("page");

	try {
		if (page) {
			const res = await fetchMovieList("popular", page);
			return res;
		} else {
			const res = await fetchMovieList("popular");
			return res;
		}
	} catch (error) {
		console.log(error);
		return null;
	}
};

function PopularMovie() {
	return <div>PopularMovie</div>;
}
export default PopularMovie;
