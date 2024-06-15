import { useQuery } from "@tanstack/react-query";
import fetchMovieDetails from "@/api/MovieApi/fetchMovieDetails";
import { useParams } from "react-router";
import { MovieDetailResponse } from "@/utils/types";
import { baseImgUrl } from "@/utils/types";
import backgroundColor from "@/utils/backgroundColor";
function MovieDetailHero() {
	const { id } = useParams();
	const bgColor = backgroundColor(id);
	console.log(bgColor);
	const { data } = useQuery({
		queryKey: ["MovieDetails", id],
		queryFn: () => fetchMovieDetails({ id }),
		staleTime: 5 * 60 * 1000 /* 5 minnutes  */,
	});

	if (data && id) {
		const { backdrop_path, poster_path, title } = data as MovieDetailResponse;
		console.log(data);
		return (
			<>
				<div className="relative">
					<div
						className="h-[36rem] bg-"
						style={{
							backgroundImage: `url(${baseImgUrl}/w1920_and_h800_multi_faces/${backdrop_path})`,
							backgroundPosition: "",
							backgroundRepeat: "repeat-x",
						}}></div>
					<div
						className={`${bgColor} w-full h-[36rem] opacity-70 absolute top-0 left-0`}></div>
					<div className="absolute top-0 left-0 p-8">
						<div className="md:flex ">
							<div className="relative">
								<img
									className="w-[18.6rem] h-[28.4rem] rounded-lg"
									src={`https://media.themoviedb.org/t/p/w600_and_h900_bestv2/${poster_path}`}
									alt={title}
								/>
							</div>
							<div>{title}</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}
export default MovieDetailHero;
