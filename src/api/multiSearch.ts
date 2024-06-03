import { customFetch } from "./customFetch";
import { SearchResponse } from "@/utils/types";
async function multiSearch(query: string, page: number = 1) {
	const res = await customFetch<SearchResponse>(
		`/search/multi?query=${query}&include_adult=false&language=en-US&page=${page}`
	);
	return res.data;
}
export default multiSearch;
