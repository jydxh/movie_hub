import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { Button } from "@mui/material";
function SearchInput() {
	const { pathname, search } = useLocation();
	const navigate = useNavigate();
	const params = new URLSearchParams(search);
	const value = params.get("query") || undefined;

	const [inputValue, setInputValue] = useState(value);
	const handleKeyDown = (evt: React.KeyboardEvent<HTMLInputElement>) => {
		if (evt.key === "Enter") {
			const query = evt.currentTarget.value;
			params.set("query", query);
			params.set("page", "1");
			navigate(`${pathname}?${params.toString()}`);
		}
	};
	const handleSubmit = () => {
		params.set("query", inputValue || "");
		params.set("page", "1");
		navigate(`${pathname}?${params.toString()}`);
	};
	return (
		<div className="border-b p-2 flex items-center gap-x-2">
			<SearchIcon />
			<input
				onChange={evt => {
					setInputValue(evt.currentTarget.value);
				}}
				onKeyDown={handleKeyDown}
				value={inputValue}
				type="search"
				name="query"
				placeholder="Seach for a movie, tv show, person"
				className="border border-gray-400 bg-slate-600 text-white px-4 py-1 w-full rounded italic"
			/>
			<Button onClick={handleSubmit}>Search</Button>
		</div>
	);
}
export default SearchInput;
