import { Form } from "react-router-dom";
import { Button } from "@mui/material";

function SearchInput() {
	return (
		<Form className="w-full mt-10">
			<div className="w-full flex">
				<input
					type="text"
					className="rounded-full w-full py-2 ps-4 outline-none text-black"
					placeholder="Search for a movie, tv show,person..."
				/>
				<Button className="bg-teal-500 text-white hover:text-black rounded-full p-2 w-[8rem]  capitalize  text-lg relative -left-[102px]">
					Search
				</Button>
			</div>
		</Form>
	);
}
export default SearchInput;
