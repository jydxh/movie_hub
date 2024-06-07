import { useLoaderData } from "react-router";
import SearchContentCard from "@/components/ui/SearchContentCard";
import {
	MultiSearchResponse,
	MovieResult,
	PersonResult,
	TVResults,
} from "@/utils/types";

function MultSearch() {
	const data = useLoaderData() as MultiSearchResponse;
	console.log(data);
	const { results } = data;
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
		</>
	);
}
export default MultSearch;
