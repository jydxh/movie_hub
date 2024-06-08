import SubNavbar from "@/components/ui/SubNavbar";
import { Outlet } from "react-router";
import MovieFilter from "@/components/Movie/MovieFilter";

const movieSubList = [
	{ to: "popular", label: "popular" },
	{ to: "playing", label: "now playing" },
	{ to: "upcoming", label: "upcoming" },
	{ to: "top_rated", label: "top rated" },
];

function MovieLayout() {
	return (
		<div>
			<SubNavbar list={movieSubList} />
			<div className="grid grid-cols-1 md:flex md:gap-x-8 p-8">
				<MovieFilter />
				<Outlet />
			</div>
		</div>
	);
}
export default MovieLayout;
