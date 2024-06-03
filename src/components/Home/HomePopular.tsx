import { useState } from "react";
import Slider_Button from "@/components/ui/Slider_Button";
import { SliderCard } from "@/components/ui/SliderCard";
import useApiFetch from "@/hooks/useApiFetch";
import { MovieResult } from "@/utils/types";
import fetchHomePopular from "@/api/fetchHomePopular";

const title = "What's Popular";
const options = [
	{ title: "streaming", searchParam: "1" },
	{ title: "on TV", searchParam: "2" },
	{ title: "for rent", searchParam: "3" },
	{ title: "In theatres", searchParam: "4" },
];

function HomePopular() {
	const [selectedOption, setSelectedOption] = useState(options[0]);

	const { data, isLoading, error } = useApiFetch<MovieResult[]>(
		selectedOption,
		fetchHomePopular
	);

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
				{data !== null ? (
					<SliderCard data={data} />
				) : error ? (
					"load page failed"
				) : (
					"fetching..."
				)}
			</div>
		</section>
	);
}
export default HomePopular;