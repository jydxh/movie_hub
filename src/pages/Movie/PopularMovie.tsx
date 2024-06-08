import MovieListCard from "@/components/Movie/MovieListCard";
import { MovieResultResponse } from "@/utils/types";
import { Divider } from "@mui/material";
import { useLoaderData } from "react-router";

function PopularMovie() {
	const { results, total_results } = useLoaderData() as MovieResultResponse;
	return (
		<div className="md:mt-0 mt-8 w-full">
			<h2 className="font-semibold tracking-wide text-2xl mb-4">
				Popular Movies
			</h2>
			<h3 className="mb-2">Total Results: {total_results}</h3>
			<Divider />
			<div className="mt-4">
				<ul className="grid grid-cols-1 sm:grid-cols-2 md:flex md:flex-wrap gap-6">
					{results.map(result => {
						const { id, poster_path, release_date, title, vote_average } =
							result;
						return (
							<MovieListCard
								key={id}
								imgPath={poster_path}
								title={title}
								release_date={release_date}
								vote_average={vote_average}
							/>
						);
					})}
				</ul>
			</div>
		</div>
	);
}
export default PopularMovie;
