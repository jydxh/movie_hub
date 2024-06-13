import useMovieList from "@/hooks/useMovieList";
import { useLocation } from "react-router";

function PopularMovie() {
	const { search } = useLocation();
	console.log("serach from page", search);
	return useMovieList("Popular Movies");
}
export default PopularMovie;
