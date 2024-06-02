import { useCallback, useEffect, useRef, useState } from "react";
import Slider_Button from "./Slider_Button";
import fetchTrendingAll from "@/api/fetchTrendingAll";
import { SliderCard } from "./SliderCard";
import { TrendingAllResult } from "@/utils/types";

export interface SelectedOption {
	title: string;
	searchParam: "day" | "week";
}
interface SliderProps {
	title: string;
	options: SelectedOption[];
}

function SlidersWrapper({ title, options }: SliderProps) {
	const [selectedOption, setSelectedOption] = useState(options[0]);
	const [isLoading, setIsLoading] = useState(false);

	const results = useRef<TrendingAllResult[] | null>(null);

	const fetchData = useCallback(async () => {
		setIsLoading(true);
		try {
			const data = await fetchTrendingAll(selectedOption["searchParam"]);
			console.log(data);
			results.current = data.results;
		} catch (error) {
			console.error(error);
			throw error;
		}
		setIsLoading(false);
	}, [selectedOption]);

	useEffect(() => {
		fetchData();
	}, [fetchData]);

	return (
		<section className="max-w-[1400px] mx-auto p-8">
			<div className="flex gap-x-2 md:gap-x-6 items-center">
				<h4 className="capitalize font-bold text-xl">{title}</h4>
				<Slider_Button
					isLoading={isLoading}
					options={options}
					selectedOption={selectedOption}
					setSelectedOption={setSelectedOption}
				/>
			</div>

			<div className="max-w-[1400px] overflow-x-scroll flex justify-start items-center custom-scrollbar   gap-x-6">
				{results.current !== null ? (
					<SliderCard data={results.current} />
				) : (
					"fetching..."
				)}
			</div>
		</section>
	);
}
export default SlidersWrapper;
