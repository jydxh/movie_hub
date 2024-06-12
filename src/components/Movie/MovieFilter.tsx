import { Form } from "react-router-dom";
import fetchGenres from "@/api/fetchGenres";
import { Genre } from "@/utils/types";
import SelectableButton from "./SelectableButton";
import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";

export default function MovieFilter() {
	const [data, setData] = useState<Genre[]>();
	const [isLoading, setIsLoading] = useState(false);
	const [genres, setGenres] = useState<number[]>([]);
	const handleClick = (id: number) => {
		if (genres.includes(id)) {
			setGenres(prev => {
				return prev.filter(item => item !== id);
			});
		} else {
			setGenres(prev => [...prev, id]);
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

	const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
		evt.preventDefault();
	};
	return (
		<div className="border rounded shadow-xl w-full md:w-[18rem] p-4 h-full">
			<Form method="GET" onSubmit={handleSubmit}>
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
				<div className="mt-8 flex justify-center">
					<Button
						disabled={genres.length === 0}
						type="submit"
						className="w-full rounded-full bg-teal-500 text-white hover:bg-teal-600 disabled:bg-slate-500">
						Search
					</Button>
				</div>
			</Form>
		</div>
	);
}
