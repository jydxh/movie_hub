import { Credits, baseImgUrl } from "@/utils/types";
import EastIcon from "@mui/icons-material/East";
import { Divider } from "@mui/material";
import { Link } from "react-router-dom";
function CastList({ data }: { data: Credits }) {
	const { cast: casts } = data;
	return (
		<>
			<section className="p-4 mt-8">
				<h3 className="text-xl font-semibold">Top Billed Cast</h3>
				<ul className="w-full overflow-x-scroll custom-scrollbar flex gap-x-4 p-2">
					{casts
						.filter((_, index) => index <= 9)
						.map(cast => {
							const { id, name, character, profile_path } = cast;
							return (
								<li
									key={id}
									className="border border-gray-200 flex-shrink-0 rounded-lg  shadow-xl w-[9rem]">
									<img
										src={`${baseImgUrl}/w276_and_h350_face/${profile_path}`}
										alt={name}
										className="w-[9rem] rounded-t-lg"
									/>
									<div className="p-2">
										<p className="font-bold text-base">{name}</p>
										<p className="italic text-sm">{character}</p>
									</div>
								</li>
							);
						})}
					<li className="flex justify-center items-center flex-shrink-0  w-[9rem]">
						<Link to="cast" className="hover:text-gray-400 font-semibold ">
							View More
							<EastIcon />
						</Link>
					</li>
				</ul>
				<h4 className="font-semibold mt-8">
					<Link
						to="cast"
						className="hover:text-gray-400 font-semibold capitalize">
						full cast & crew
					</Link>
				</h4>
			</section>
			<Divider className="mt-2" />
		</>
	);
}
export default CastList;
