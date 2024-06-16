import { Credits, baseImgUrl, Cast } from "@/utils/types";
import { Link } from "react-router-dom";
import MaleAvatar from "@/assets/man.jpg";
import FemaleAvatar from "@/assets/woman.jpg";

const imgClass = "rounded-lg w-[4.6rem]";

function PeopleCard({
	mode,
	credits,
}: {
	mode: "cast" | "crew";
	credits: Credits;
}) {
	return (
		<>
			{credits[mode].map(item => {
				const { cast_id, profile_path, gender, name, character, id, job } =
					item;
				return (
					<li className="mb-4" key={cast_id || id}>
						<Link to={`/people/${cast_id || id}`}>
							<div className="flex gap-x-8">
								{profile_path ? (
									<img
										className={imgClass}
										src={`${baseImgUrl}/w132_and_h132_face/${profile_path}`}
										alt={name}
									/>
								) : (
									<img
										className={imgClass}
										src={gender == 1 ? FemaleAvatar : MaleAvatar}
										alt={name}
									/>
								)}
								<div className="flex flex-col justify-center">
									<p className="font-bold">{name}</p>
									<p className="text-sm">{character || job}</p>
								</div>
							</div>
						</Link>
					</li>
				);
			})}
		</>
	);
}

function MovieCastList({ credits }: { credits: Credits }) {
	return (
		<section className="grid grid-cols-2 p-4 mt-4">
			<div>
				<h2 className="text-xl font-semibold">
					Cast{" "}
					<span className="text-gray-500 font-thin">{credits.cast.length}</span>
				</h2>
				<ul className="mt-6">
					<PeopleCard mode="cast" credits={credits} />
				</ul>
			</div>

			<div>
				<h2 className="text-xl font-semibold">
					Crew{" "}
					<span className="text-gray-500 font-thin">{credits.crew.length}</span>
				</h2>
				<ul className="mt-6">
					<PeopleCard mode="crew" credits={credits} />
				</ul>
			</div>
		</section>
	);
}
export default MovieCastList;
