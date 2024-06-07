import { NavLink } from "react-router-dom";

const tags = [
	"movies",
	"tvShow",
	"people",
	"collections",
	"companies",
	"keywords",
];
const navLinkClass = "flex items-center justify-between p-2 hover:bg-gray-200";
function SearchTags() {
	return (
		<div className="grid max-w-[16rem]">
			<h3 className="bg-blue-400 rounded p-4">Search Results</h3>
			{tags.map(tag => {
				return (
					<NavLink
						to={tag}
						className={({ isActive }) =>
							`${isActive ? "bg-gray-200" : ""} ${navLinkClass}`
						}>
						<p>{tag}</p>
						<p>0</p>
					</NavLink>
				);
			})}
		</div>
	);
}
export default SearchTags;
