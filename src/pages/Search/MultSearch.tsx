import { useLoaderData, useLocation, useNavigate } from "react-router";
import SearchContentCard from "@/components/ui/SearchContentCard";
import {
	MultiSearchResponse,
	MovieResult,
	PersonResult,
	TVResults,
} from "@/utils/types";
import { Pagination } from "@mui/material";

function MultSearch() {
	const data = useLoaderData() as MultiSearchResponse;
	//console.log(data);
	const navigate = useNavigate();
	const { pathname, search } = useLocation();
	//console.log(pathname, search);

	const { results, page, total_pages } = data;

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
	};
	/* type guard! */
	const isMovieResult = (
		result: MovieResult | PersonResult | TVResults
	): result is MovieResult => result.media_type === "movie";
	const isPersonResult = (
		result: MovieResult | PersonResult | TVResults
	): result is PersonResult => result.media_type === "person";
	const isTVResult = (
		result: MovieResult | PersonResult | TVResults
	): result is TVResults => result.media_type === "tv";

	return (
		<>
			<div>
				{results.map(result => {
					if (isMovieResult(result)) {
						const { id, overview, poster_path, release_date, title } = result;
						return (
							<SearchContentCard
								key={id}
								overview={overview}
								poster={poster_path}
								release_date={release_date}
								title={title}
							/>
						);
					} else if (isPersonResult(result)) {
						const { id, name, known_for_department, profile_path } = result;
						return (
							<SearchContentCard
								key={id}
								overview={known_for_department}
								poster={profile_path}
								title={name}
							/>
						);
					}
					if (isTVResult(result)) {
						const { id, overview, poster_path, first_air_date, original_name } =
							result;
						return (
							<SearchContentCard
								key={id}
								overview={overview}
								poster={poster_path}
								release_date={first_air_date}
								title={original_name}
							/>
						);
					}
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
export default MultSearch;
