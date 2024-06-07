import SearchInput from "@/components/Search/SearchInput";
import SearchTags from "@/components/Search/SearchTags";
import { LoaderFunction, Outlet, useLoaderData } from "react-router";
import fetchMultiSearch from "@/api/fetchMultiSearch";
import { MultiSearchResponse } from "@/utils/types";
import { useLayoutEffect } from "react";

export const loader: LoaderFunction = async ({
	request,
}): Promise<MultiSearchResponse | null> => {
	const url = new URL(request.url);
	const query = url.searchParams.get("query")!;

	try {
		const data = await fetchMultiSearch(query);
		console.log(data);
		return data;
	} catch (error) {
		console.log(error);
		return null;
	}
};

function Search() {
	return (
		<main>
			<SearchInput />
			<div className="grid grid-col-1 md:flex items-start gap-x-8 p-4">
				<div>
					<SearchTags />
				</div>
				<div>
					<Outlet />
				</div>
			</div>
		</main>
	);
}
export default Search;
