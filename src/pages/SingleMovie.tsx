import MovieDetailHero from "@/components/Movie/MovieDetailHero";
import CastList from "@/components/ui/CastList";
import MediaReview from "@/components/ui/MediaReview";
import MediaPoster from "@/components/ui/MediaPoster";
import MediaRecommendation from "@/components/ui/MediaRecommendation";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { Skeleton } from "@mui/material";
import fetchMovieDetails from "@/api/MovieApi/fetchMovieDetails";
import { Divider } from "@mui/material";
function SingleMovie() {
	const { id } = useParams();
	const { data, error, isPending, isError } = useQuery({
		queryKey: ["MovieDetails", id],
		queryFn: () => fetchMovieDetails({ id }),
		staleTime: 5 * 60 * 1000 /* 5 minnutes  */,
	});
	if (isPending) {
		return (
			<div className="mx-auto text-center w-full">
				<Skeleton variant="text" sx={{ fontSize: "1rem" }} />
				<Skeleton variant="circular" width={40} height={40} />
				<Skeleton variant="rectangular" width={210} height={60} />
				<Skeleton variant="rounded" width={210} height={60} />
			</div>
		);
	} else if (isError) {
		return <p className="text-center text-xl">Error: {error.message}</p>;
	} else if (data) {
		console.log(data);
		return (
			<>
				<MovieDetailHero data={data} />
				<CastList data={data.credits} />
				<Divider className="mt-2" />
				<MediaReview data={data.reviews} />
				<Divider className="mt-2" />
				<MediaPoster />
				<Divider className="mt-2" />
				<MediaRecommendation data={data.recommendations} />
			</>
		);
	}
}
export default SingleMovie;
