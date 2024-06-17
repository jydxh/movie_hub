import { Season, TvBaseResponse, baseImgUrl } from "@/utils/types";
import StarIcon from "@mui/icons-material/Star";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import formateDate from "@/utils/formateDate";

function TvCard({ data }: { data: TvBaseResponse }) {
	const { poster_path, name, seasons, next_episode_to_air } = data;
	let season: Season;
	if (seasons[seasons.length - 1].air_date) {
		season = seasons[seasons.length - 1];
	} else {
		season = seasons[seasons.length - 2];
	}
	return (
		<div className="rounded-lg border shadow-lg flex gap-x-4">
			<img
				src={`${baseImgUrl}/w260_and_h390_bestv2/${poster_path}`}
				alt={name}
				className="h-[12rem] rounded-lg"
			/>
			<div>
				<p className="text-xl mt-4">{season.name}</p>
				<div className="flex gap-x-4">
					<div className="flex items-center bg-gray-700 w-[4rem] rounded justify-center gap-x-1 text-white text-sm">
						<StarIcon className="w-[1rem] h-[1rem]" />
						{season.vote_average * 10 + "%"}
					</div>
					<p className="flex items-center">
						{season.air_date?.substring(0, 4)} | {season.episode_count} Eposodes
					</p>
				</div>
				<article className="mt-4 font-thin">{season.overview}</article>
				<div className="flex items-center gap-x-4 mb-4">
					<CalendarMonthIcon />
					<p className="border-b py-2">{next_episode_to_air.name}</p>
					<p>({formateDate(next_episode_to_air.air_date)})</p>
				</div>
			</div>
		</div>
	);
}
export default TvCard;
