import { Button } from "@mui/material";
import { useContext } from "react";
import { ThemeContext } from "@/feature/Theme/ThemeContextProvider";

export default function App() {
	const { toggleTheme } = useContext(ThemeContext);
	return (
		<div className="max-w-[1280] mx-auto text-center">
			<p>hello world</p>
			<Button variant="contained" onClick={toggleTheme}>
				toggle theme
			</Button>
		</div>
	);
}
