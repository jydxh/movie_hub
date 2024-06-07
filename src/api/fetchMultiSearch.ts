import { customFetch } from "./customFetch";
import { MultiSearchResponse } from "@/utils/types";
async function fetchMultiSearch(query: string): Promise<MultiSearchResponse> {
	const res = await customFetch.get<MultiSearchResponse>(
		`/search/multi?query=${query}&include_adult=false&language=en-US&page=1'`
	);
	console.log(res.data);
	return res.data;
}
export default fetchMultiSearch;
