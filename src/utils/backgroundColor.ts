function backgroundColor(id?: string) {
	let bgColor;
	if (!id) {
		return (bgColor = "bg-gray-500");
	}
	const idReminder = Number(id) % 10;
	bgColor =
		idReminder === 0
			? "bg-blue-500"
			: idReminder === 1
			? "bg-gray-500"
			: idReminder === 2
			? "bg-orange-500"
			: idReminder === 3
			? "bg-slate-500"
			: idReminder === 4
			? "bg-amber-500"
			: idReminder === 5
			? "bg-yellow-500"
			: idReminder === 6
			? "bg-emerald-500"
			: idReminder === 7
			? "bg-teal-500"
			: idReminder === 8
			? "bg-cyan-500"
			: "bg-sky-500";
	return bgColor;
}
export default backgroundColor;
