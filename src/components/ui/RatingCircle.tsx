function RatingCircle({ value }: { value: number }) {
	const percentage = Math.floor(value * 10);
	const degree = (percentage / 100) * 360;
	return (
		<>
			<div
				style={{
					background: `conic-gradient(${
						percentage > 70
							? "#10B981"
							: percentage >= 60
							? " orange"
							: "#EF4444 "
					} ${degree}deg, gray ${degree}deg 360deg)`,
				}}
				className={`border-2 border-gray-500 grid place-items-center rounded-full w-[2.4rem] h-[2.4rem] relative -top-[1rem] left-[1rem] z-10  `}>
				<div className=" z-20 text-xs bg-gray-500 w-[1.8rem] h-[1.8rem] rounded-full flex justify-center items-center">
					{percentage}
					<span style={{ fontSize: "6px" }}>%</span>
				</div>
			</div>
		</>
	);
}
export default RatingCircle;
