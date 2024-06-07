import SearchInput from "@/components/Search/SearchInput";
import SearchTags from "@/components/Search/SearchTags";
import { Outlet } from "react-router";

function Search() {
	return (
		<main>
			<SearchInput />
			<SearchTags />
			<Outlet />
		</main>
	);
}
export default Search;
