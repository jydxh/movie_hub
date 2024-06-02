import { TrendingAllResponse } from "@/utils/types";
import { customFetch } from "./customFetch";

export default async function fetchTrendingAll(dayOrWeek: string) {
	try {
		const res = await customFetch<TrendingAllResponse>(
			`/trending/all/${dayOrWeek}?language=en-US`
		);
		return res.data;
	} catch (error) {
		throw Error("failed to fetch trendingAll");
	}
}
