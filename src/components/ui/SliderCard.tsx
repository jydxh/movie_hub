import formateDate from "@/utils/formateDate";
import { baseImgUrl } from "@/utils/types";
import { TrendingAllResult, MovieResult } from "@/utils/types";
export interface SliderCardProps {
	data: TrendingAllResult[] | MovieResult[];
}

export function SliderCard({ data }: SliderCardProps) {
	return (
		<>
			{data.map(item => {
				const {
					id,
					poster_path,
					title,
					vote_average,
					release_date,
					first_air_date,
					name,
				} = item;
				return (
					<div className="w-[10rem] h-[24rem] mt-4 flex-shrink-0" key={id}>
						<img
							src={`${baseImgUrl}/original/${poster_path}`}
							alt={title}
							className="w-[10rem] rounded-md shadow-lg"
						/>
						<p className="relative -top-4 left-4  rounded-full bg-sky-800/70 w-[2.4rem] h-[2.4rem] flex justify-center items-center">
							{Math.ceil(vote_average * 10)}
						</p>
						<p className="line-clamp-2">{title || name}</p>
						<p className="mt-4 font-light text-gray-500">
							{formateDate(release_date) || formateDate(first_air_date)}
						</p>
					</div>
				);
			})}
		</>
	);
}
