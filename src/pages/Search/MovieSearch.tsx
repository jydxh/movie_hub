import SearchContentCard from "@/components/ui/SearchContentCard";
import { MultiSearchResponse, MovieResult } from "@/utils/types";
import { useLoaderData } from "react-router";
import { Pagination } from "@mui/material";
import usePagination from "@/hooks/usePagination";

function MovieSearch() {
	const { page, total_pages, results } = useLoaderData() as MultiSearchResponse;

	const { handlePageChange } = usePagination();

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
