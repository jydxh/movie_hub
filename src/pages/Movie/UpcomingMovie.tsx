import useMovieList from "@/hooks/useMovieList";

function UpcomingMovie() {
	return useMovieList("upcoming movies");
}
export default UpcomingMovie;
