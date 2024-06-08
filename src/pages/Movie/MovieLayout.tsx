import SubNavbar from "@/components/ui/SubNavbar";
import { Outlet } from "react-router";

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
			<Outlet />
		</div>
	);
}
export default MovieLayout;
