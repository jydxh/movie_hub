import { useState } from "react";
import Slider_Button from "./Slider_Button";

interface SliderProps {
	title: string;
	options: string[];
}

function Sliders({ title, options }: SliderProps) {
	const [selectedOption, setSelectedOption] = useState(options[0]);
	return (
		<section className="max-w-[1400px] mx-auto p-8">
			<div className="flex gap-x-2 items-center">
				<h4 className="capitalize">{title}</h4>
				<Slider_Button
					options={options}
					selectedOption={selectedOption}
					setSelectedOption={setSelectedOption}
				/>
			</div>
		</section>
	);
}
export default Sliders;
