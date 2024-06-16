import MovieCastHeader from "@/components/Movie/MovieCastHeader";
import { useLocation } from "react-router";
import { useQuery } from "@tanstack/react-query";
import fetchMovieCustom from "@/api/MovieApi/fetchMovieCustom";
import fetchMovieDetails from "@/api/MovieApi/fetchMovieDetails";
import MovieCastList from "@/components/Movie/MovieCastList";
import { Credits } from "@/utils/types";

function MovieCast() {
	const { pathname } = useLocation();
	const id = pathname.split("/")[2];
	const fetchMul = async (id: string) => {
		const [credits, movie] = await Promise.all([
			fetchMovieCustom({ id, mode: "credits" }),
			fetchMovieDetails({ id }),
		]);
		return { credits, movie };
	};
	const { data, error, isPending, isError } = useQuery({
		queryKey: ["MovieCast", id],
		queryFn: () => fetchMul(id),
		staleTime: 5 * 60 * 1000 /* 5 minnutes  */,
	});

	if (isError) {
		return <div className="mx-auto text-xl text-center">{error.message}</div>;
	}
	if (isPending) {
		return <div className="mx-auto text-xl text-center">...loading...</div>;
	}

	if (data) {
		console.log(data);
		const credits = data.credits as Credits;
		return (
			<>
				<MovieCastHeader
					id={id}
					img={data.movie.poster_path}
					title={data.movie.title}
				/>
				<MovieCastList credits={credits} />
			</>
		);
	}
}
export default MovieCast;