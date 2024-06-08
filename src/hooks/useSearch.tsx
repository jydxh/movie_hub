import { useLoaderData } from "react-router";
import {
	MultiSearchResponse,
	MovieResult,
	PersonResult,
	TVResults,
} from "@/utils/types";
import { Pagination } from "@mui/material";
import usePagination from "@/hooks/usePagination";
import SearchResults from "@/components/Search/SearchResults";

function useSearch(mode: "multi" | "movie" | "tv" | "people") {
	const data = useLoaderData() as MultiSearchResponse;
	const { results, page, total_pages } = data;
	if (mode === "movie") {
		results.forEach(result => (result.media_type = "movie"));
	} else if (mode === "people") {
		results.forEach(result => (result.media_type = "person"));
	} else if (mode === "tv") {
		results.forEach(result => (result.media_type = "tv"));
	}
	const { handlePageChange } = usePagination();
	return (
		<>
			{mode === "movie" && <SearchResults results={results as MovieResult[]} />}
			{mode === "people" && (
				<SearchResults results={results as PersonResult[]} />
			)}
			{mode === "tv" && <SearchResults results={results as TVResults[]} />}
			{mode === "multi" && <SearchResults results={results} />}
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
export default useSearch;