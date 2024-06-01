import { Button } from "@mui/material";
import { useContext, useRef } from "react";
import { ThemeContext } from "@/feature/Theme/ThemeContextProvider";
import fetchTrendingAll from "./api/fetchTrendingAll";
import { TrendingAllResponse } from "./utils/types";

export default function App() {
	const { toggleTheme } = useContext(ThemeContext);
	const data = useRef<TrendingAllResponse | null>(null);

	const fetchData = async (): Promise<TrendingAllResponse> => {
		data.current = await fetchTrendingAll("week");
		console.log(data.current);
		return data.current;
	};

	return (
		<div className="max-w-[1280] mx-auto text-center">
			<p className="text-orange-500">hello world</p>
			<div className="flex flex-col w-[14rem] gap-y-4 mx-auto my-8 ">
				<Button variant="contained" onClick={toggleTheme}>
					toggle theme
				</Button>

				<Button
					variant="contained"
					className="w-[25rem] p-4 bg-blue-400"
					onClick={fetchData}>
					fetch data
				</Button>
			</div>
		</div>
	);
}
