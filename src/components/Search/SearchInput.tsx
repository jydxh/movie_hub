import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router";
import { Button } from "@mui/material";

import searchKeywordQuery from "@/api/searchKeywordQuery";
import { useQuery } from "@tanstack/react-query";
import fetchTrendingAll from "@/api/fetchTrendingAll";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { SearchKeywordResponse } from "@/utils/types";

function SearchInput() {
	const { pathname, search } = useLocation();
	const navigate = useNavigate();
	const params = new URLSearchParams(search);
	const value = params.get("query") || "";
	const [inputValue, setInputValue] = useState(value);
	const [keywordsData, setKeyWordsData] = useState<
		undefined | SearchKeywordResponse
	>();
	const [showKeyWord, setShowKeyWord] = useState(false);
	const searchKeywordRef = useRef(value);
	const { data } = useQuery({
		queryKey: ["searchKeyword", inputValue],
		queryFn: async () => fetchTrendingAll("day"),
		enabled: inputValue === "", // only fetch when inital input is empty
	});

	// logic here: when user focus in the Input, the suggestion will fetch the trending all('day'), and show the name in the UI, and with the user keep typing, the useEffect will debounced every key stroke and wait for 0.5s to fetch the keywords data from the api, and if user click one of the options, the content will be automatically add as the inputValue and then do the handleSubmit programmly
	// also, for better UX, the url query value should be two-way bind with the input value;
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
	const handleSetSearch = (
		evt: React.MouseEvent<HTMLLIElement, MouseEvent>
	) => {
		//console.log(evt.currentTarget.innerText);
		const serachTerm = evt.currentTarget.innerText;
		setInputValue(serachTerm);
		searchKeywordRef.current = serachTerm;
		navigate(`/search?query=${searchKeywordRef.current}`);
	};

	useEffect(() => {
		const timer = setTimeout(async () => {
			const res = await searchKeywordQuery({ query: inputValue || "" });
			//	console.log(res);
			setKeyWordsData(res);
		}, 500);
		return () => clearTimeout(timer);
	}, [inputValue]);

	return (
		<div className="relative">
			<div className="border-b p-2 flex items-center gap-x-2">
				<SearchIcon />
				<input
					autoComplete="off"
					onFocus={() => {
						setShowKeyWord(true);
					}}
					onBlur={() => {
						// add 100ms delay to make sure searchKeywordRef can get the value
						setTimeout(() => {
							setShowKeyWord(false);
						}, 100);
					}}
					onChange={evt => {
						setInputValue(evt.currentTarget.value);
					}}
					onKeyDown={handleKeyDown}
					value={inputValue}
					type="search"
					name="query"
					placeholder="Seach for a movie, tv show, person"
					className="border border-gray-400 bg-gray-500 text-white px-4 py-1 w-full rounded italic"
				/>
				<Button onClick={handleSubmit}>Search</Button>
			</div>
			<div className={`${showKeyWord ? "block" : "hidden"} p-4`}>
				{data && (
					<>
						<p className="font-bold text-xl border-b p-1">
							<TrendingUpIcon /> Trending
						</p>
						<ul>
							{data.map(item => (
								<li
									onMouseDown={handleSetSearch}
									key={item.id}
									className="border-b p-1 hover:bg-gray-400 cursor-pointer">
									<ManageSearchIcon />
									<span className="ps-2">
										{item.media_type === "movie" ? item.title : item.name}
									</span>
								</li>
							))}
						</ul>
					</>
				)}
				{keywordsData && (
					<ul>
						{keywordsData.results.map(result => (
							<li
								onMouseDown={handleSetSearch}
								key={result.id}
								className="border-b p-1 hover:bg-gray-400 cursor-pointer">
								<ManageSearchIcon />
								<span className="ps-2">{result.name}</span>
							</li>
						))}
					</ul>
				)}
			</div>
		</div>
	);
}
export default SearchInput;
