function backgroundColor(id?: string) {
	let bgColor;
	if (!id) {
		return (bgColor = "bg-gray-400");
	}
	const idReminder = Number(id) % 10;
	bgColor =
		idReminder === 0
			? "bg-blue-400"
			: idReminder === 1
			? "bg-gray-400"
			: idReminder === 2
			? "bg-orange-400"
			: idReminder === 3
			? "bg-slate-400"
			: idReminder === 4
			? "bg-amber-400"
			: idReminder === 5
			? "bg-yellow-400"
			: idReminder === 6
			? "bg-emerald-400"
			: idReminder === 7
			? "bg-teal-400"
			: idReminder === 8
			? "bg-cyan-400"
			: "bg-sky-400";
	return bgColor;
}
export default backgroundColor;
