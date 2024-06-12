import React, { useState } from "react";

function SelectableButton({
	children,
	onClick,
	id,
}: {
	children: React.ReactNode;
	onClick: (id: number) => void;
	id: number;
}) {
	const [selected, setSelected] = useState(false);
	return (
		<button
			type="button"
			className={`${
				selected ? "bg-teal-500 border-none" : ""
			} hover:bg-teal-500 hover:border-none rounded-full border px-3 py-1`}
			onClick={() => {
				setSelected(prev => !prev);
				onClick(id);
			}}>
			{children}
		</button>
	);
}
export default SelectableButton;
