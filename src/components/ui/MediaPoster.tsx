import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import fetchMovieImages from "@/api/MovieApi/fetchMovieImages";
function MediaPoster() {
	const { id } = useParams();
	const { data, error, isPending, isError } = useQuery({
		queryKey: ["MovieImages", id],
		queryFn: () => fetchMovieImages({ id }),
		staleTime: 5 * 60 * 1000 /* 5 minnutes  */,
	});
	if (isError) {
		<p className="mx-auto text-center text-xl">Error: {error.message}</p>;
	}
	if (isPending) {
		<p className="mx-auto text-center text-xl">...Loading...</p>;
	}
	if (data) {
		console.log(data);
		return <div>MediaPoster</div>;
	}
}
export default MediaPoster;
