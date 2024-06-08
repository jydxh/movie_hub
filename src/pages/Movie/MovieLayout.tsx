import SubNavbar from "@/components/ui/SubNavbar";

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
		</div>
	);
}
export default MovieLayout;
