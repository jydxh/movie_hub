import useMovieList from "@/hooks/useMovieList";

function PlayingMovie() {
	return useMovieList("Now Playing Movies");
}
export default PlayingMovie;
