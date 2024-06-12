import { Form } from "react-router-dom";
import fetchGenres from "@/api/fetchGenres";
import { Genre } from "@/utils/types";
import SelectableButton from "./SelectableButton";
import { useEffect, useState } from "react";

// export const loader: LoaderFunction = async (): Promise<null | Genre[]> => {
// 	try {
// 		const res = await fetchGenres();
// 		return res;
// 	} catch (error) {
// 		console.log(error);
// 		return null;
// 	}
// };

export default function MovieFilter() {
	const [data, setData] = useState<Genre[]>();
	const [isLoading, setIsLoading] = useState(false);
	const [genres, setGenres] = useState<number[]>([]);
	const handleClick = (id: number) => {
		const theIndex = genres.findIndex(item => item === id);
		if (theIndex !== -1) {
			setGenres(prev => [...prev, id]);
		} else {
			setGenres(prev => {
				return prev.filter(item => item !== id);
			});
		}
	};
	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true);
			try {
				const data = await fetchGenres();
				setData(data);
			} catch (error) {
				console.log(error);
			}
			setIsLoading(false);
		};
		fetchData();
	}, []);
	return (
		<div className="border rounded shadow-xl w-full md:w-[18rem] p-4 h-full">
			<Form method="GET">
				<div>
					<label className="font-thin">Genres</label>
					{data && (
						<div className="mt-4 flex gap-4 flex-wrap">
							{data.map(item => {
								return (
									<SelectableButton
										onClick={handleClick}
										key={item.id}
										id={item.id}>
										{item.name}
									</SelectableButton>
								);
							})}
						</div>
					)}
					{isLoading && !data && <div> fetching data!</div>}
				</div>
			</Form>
		</div>
	);
}
