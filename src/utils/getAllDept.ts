import { Cast } from "./types";

function getAllDept(inputArray: Cast[]) {
	const newArray = [] as string[];
	inputArray.forEach(item => {
		const { known_for_department } = item;
		if (!newArray.includes(known_for_department)) {
			newArray.push(known_for_department);
		} else {
			return;
		}
	});
	return newArray;
}
export default getAllDept;
