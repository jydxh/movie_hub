import fetchMultiSearch from "@/api/fetchMultiSearch";
import SearchContentCard from "@/components/ui/SearchContentCard";
import { MultiSearchResponse, MovieResult } from "@/utils/types";
import {
	LoaderFunction,
	useLoaderData,
	useNavigate,
	useLocation,
} from "react-router";
import { Pagination } from "@mui/material";

export const loader: LoaderFunction = async ({
	request,
}): Promise<MultiSearchResponse | null> => {
	const url = new URL(request.url);
	const serachQuery = url.searchParams.get("query")!;
	const page = url.searchParams.get("page");

	try {
		if (page) {
			const res = await fetchMultiSearch(serachQuery, page, "movie");
			console.log(res);
			return res;
		} else {
			const res = await fetchMultiSearch(serachQuery, "1", "movie");
			console.log(res);
			return res;
		}
	} catch (error) {
		console.log(error);
		return null;
	}
};

function MovieSearch() {
	const { page, total_pages, results } = useLoaderData() as MultiSearchResponse;

	const navigate = useNavigate();
	const { pathname, search } = useLocation();
	const handlePageChange = (
		evt: React.ChangeEvent<unknown>,
		page: number
	): void => {
		const params = new URLSearchParams(search);
		if (params.has("page")) {
			params.set("page", page.toString());
		} else {
			params.append("page", page.toString());
		}

		navigate(pathname + "?" + params.toString());
		window.scrollTo(0, 0); // scroll to the top of the page
	};

	return (
		<>
			<div>
				{(results as MovieResult[]).map(result => {
					const { poster_path, title, release_date, overview, id } = result;
					return (
						<SearchContentCard
							key={id}
							poster={poster_path}
							title={title}
							release_date={release_date}
							overview={overview}
						/>
					);
				})}
			</div>
			<div className="flex justify-center">
				<Pagination
					page={page}
					count={total_pages}
					variant="outlined"
					shape="rounded"
					onChange={handlePageChange}
				/>
			</div>
		</>
	);
}
export default MovieSearch;
