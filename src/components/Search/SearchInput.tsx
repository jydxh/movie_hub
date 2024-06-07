import SearchIcon from "@mui/icons-material/Search";
function SearchInput() {
	return (
		<div className="border-b p-2 flex items-center gap-x-2">
			<SearchIcon />
			<input
				type="search"
				name="query"
				placeholder="Seach for a movie, tv show, person"
				className="border border-gray-400 px-4 py-1 w-full rounded italic"
			/>
		</div>
	);
}
export default SearchInput;
