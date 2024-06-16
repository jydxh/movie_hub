import formateDate from "@/utils/formateDate";
import { Recommendations, baseImgUrl } from "@/utils/types";
import { Link } from "react-router-dom";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

function MediaRecommendation({ data }: { data: Recommendations }) {
	console.log(data);
	const { results } = data;
	if (results.length > 0) {
		return (
			<section className="mt-8 p-4">
				<h4 className="font-semibold text-xl">Recommendations</h4>
				<div className="rounded-lg overflow-x-scroll p-4 flex gap-x-4">
					{results.map(result => {
						const {
							id,
							title,
							media_type,
							vote_average,
							release_date,
							backdrop_path,
						} = result;
						return (
							<Link
								to={`/${media_type === "movie" ? "movie" : "tv_show"}/${id}`}
								key={id}
								className="flex-shrink-0 relative ">
								<div className="relative rounded-xl group ">
									<img
										src={`${baseImgUrl}/w500_and_h282_face/${backdrop_path}`}
										className="h-[10rem] rounded-xl transition-opacity duration-300 ease-in-out group-hover:opacity-80"
										alt={title}
									/>
									<div className="absolute p-2 bg-gray-300 w-full h-[2rem] rounded-b-lg top-[8.0rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></div>
									<div className="absolute top-[8.15rem] left-2 w-full text-slate-950 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex items-center justify-start gap-x-2">
										<CalendarMonthIcon />
										{formateDate(release_date)}
									</div>
								</div>

								<div className="flex justify-between px-2 pt-2">
									<p className="w-[14rem]">{title}</p>
									<p>{(vote_average * 10).toFixed(0) + "%"}</p>
								</div>
							</Link>
						);
					})}
				</div>
			</section>
		);
	} else {
		return (
			<section className="mt-8 p-4">
				<h4 className="font-semibold text-xl">Recommendations</h4>
				<p className="capitalize mt-4">no recommendations available yet</p>
			</section>
		);
	}
}
export default MediaRecommendation;
