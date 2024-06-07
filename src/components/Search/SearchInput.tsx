import SearchIcon from "@mui/icons-material/Search";
function SearchInput() {
	return (
		<div className="border-b p-2 flex items-center">
			<SearchIcon />
			<input type="search" className="bg-slate-400 px-4 py-1 w-full rounded" />
		</div>
	);
}
export default SearchInput;
