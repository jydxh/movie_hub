import useMovieList from "@/hooks/useMovieList";

function TopRatedMovie() {
	return useMovieList("top rated movies");
}
export default TopRatedMovie;
