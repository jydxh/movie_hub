import MovieDetailHero from "@/components/Movie/MovieDetailHero";
import CastList from "@/components/ui/CastList";
import MediaReview from "@/components/ui/MediaReview";
import MediaPoster from "@/components/ui/MediaPoster";
import MediaRecommendation from "@/components/ui/MediaRecommendation";
function SingleMovie() {
	return (
		<>
			<MovieDetailHero />
			<CastList />
			<MediaReview />
			<MediaPoster />
			<MediaRecommendation />
		</>
	);
}
export default SingleMovie;
