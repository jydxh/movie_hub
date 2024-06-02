interface Slider_ButtonProps {
	options: string[];
	selectedOption: string;
	setSelectedOption: (op: string) => void;
}

const buttonClass =
	"px-4 rounded-full py-1 transition  duration-500 ease-in-out";

function Slider_Button({
	options,
	selectedOption,
	setSelectedOption,
}: Slider_ButtonProps) {
	const handleClick = (op: string) => {
		setSelectedOption(op);
	};
	return (
		<div className="rounded-full border  ">
			{options.map(op => {
				return (
					<button
						onClick={() => handleClick(op)}
						key={op}
						className={`${buttonClass} ${
							op === selectedOption ? "bg-sky-600/80 " : ""
						} `}>
						{op}
					</button>
				);
			})}
		</div>
	);
}
export default Slider_Button;
