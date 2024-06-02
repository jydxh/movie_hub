import { useState, useEffect, useCallback } from "react";
import fetchTrendingAll from "@/api/fetchTrendingAll";
import { TrendingAllResult } from "@/utils/types";
import { SelectedOption } from "@/components/ui/SlidersWrapper";

function useFetchTrending(selectedOption: SelectedOption) {
	const [data, setData] = useState<TrendingAllResult[] | null>(null);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<null | unknown>(null);

	const fetchData = useCallback(async () => {
		setIsLoading(true);
		try {
			const data = await fetchTrendingAll(selectedOption.searchParam);
			console.log(data);
			setData(data.results);
		} catch (error) {
			console.error(error);
			setError(error);
		}
		setIsLoading(false);
	}, [selectedOption]);

	useEffect(() => {
		fetchData();
	}, [fetchData]);

	return { data, isLoading, error };
}
export default useFetchTrending;
