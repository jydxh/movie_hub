import { useQuery } from "@tanstack/react-query";
import fetchMovieDetails from "@/api/MovieApi/fetchMovieDetails";
import { useParams } from "react-router";
import { MovieDetailResponse } from "@/utils/types";
import { baseImgUrl } from "@/utils/types";

function MovieDetailHero() {
	const { id } = useParams();

	const { data } = useQuery({
		queryKey: ["MovieDetails", id],
		queryFn: () => fetchMovieDetails({ id }),
		staleTime: 5 * 60 * 1000 /* 5 minnutes  */,
	});

	if (data) {
		const { backdrop_path, poster_path, title } = data as MovieDetailResponse;
		console.log(data);
		return (
			<>
				<div className="relative w-[100vw]">
					<div
						className="w-[100vw] h-[24rem]"
						style={{
							backgroundImage: `url(${baseImgUrl}/w1280/${backdrop_path})`,
						}}></div>
					<div className="flex">
						<div className="relative z-10">
							<img
								className="w-[16rem] h-[24rem]"
								src={`https://media.themoviedb.org/t/p/w600_and_h900_bestv2/${poster_path}`}
								alt={title}
							/>
						</div>
						<div>{title}</div>
					</div>
				</div>
			</>
		);
	}
}
export default MovieDetailHero;
