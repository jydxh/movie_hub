import { NavLink } from "react-router-dom";

const tags = ["movies", "tvShow", "people", "collections"];
const navLinkClass =
	"flex items-center justify-between p-2 hover:bg-gray-200 hover:text-black";
function SearchTags() {
	return (
		<div className="grid md:w-[16rem]  text-center border border-gray-300 rounded">
			<h3 className="bg-blue-400 rounded p-4">Search Results</h3>
			<div className="mt-2">
				{tags.map(tag => {
					return (
						<NavLink
							key={tag}
							to={tag}
							className={({ isActive }) =>
								`${
									isActive ? "bg-gray-200 text-black font-semibold" : ""
								} ${navLinkClass}`
							}>
							<p className="mx-auto capitalize">
								{tag === "tvShow" ? "tv Shows" : tag}
							</p>
						</NavLink>
					);
				})}
			</div>
		</div>
	);
}
export default SearchTags;
