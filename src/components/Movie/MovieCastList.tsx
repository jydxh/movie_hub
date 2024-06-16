import { Credits, baseImgUrl, Cast } from "@/utils/types";
import { Link } from "react-router-dom";
import MaleAvatar from "@/assets/man.jpg";
import FemaleAvatar from "@/assets/woman.jpg";
import getAllDept from "@/utils/getAllDept";
import { Divider } from "@mui/material";

const imgClass = "rounded-lg w-[4.6rem]";

function PeopleCard({ item }: { item: Cast }) {
	const { cast_id, profile_path, gender, name, character, id, job } = item;
	return (
		<>
			<li className="mb-4">
				<Link to={`/people/${cast_id || id}`}>
					<div className="md:flex md:gap-x-4 lg:gap-x-8">
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
						<div className="mt-2 md:mt-0 flex flex-col justify-center">
							<p className="font-bold md:text-base text-sm">{name}</p>
							<p className="md:text-sm text-xs">{character || job}</p>
						</div>
					</div>
				</Link>
			</li>
		</>
	);
}

function MovieCastList({ credits }: { credits: Credits }) {
	const depArray = getAllDept(credits.crew);
	depArray.sort((a, b) => a.localeCompare(b)).shift(); // to get the sorted department Array

	return (
		<section className="grid grid-cols-3 p-1 md:p-4 mt-4">
			<div>
				<h2 className="text-xl font-semibold">
					Cast{" "}
					<span className="text-gray-500 font-thin">{credits.cast.length}</span>
				</h2>
				<ul className="mt-6">
					{credits.cast.map(item => (
						<PeopleCard key={item.cast_id} item={item} />
					))}
				</ul>
			</div>
			<div className="flex justify-center -mx-10">
				<Divider orientation="vertical" />
			</div>

			<div>
				<h2 className="text-xl font-semibold">
					Crew{" "}
					<span className="text-gray-500 font-thin">{credits.crew.length}</span>
				</h2>
				<ul className="mt-6">
					{depArray.map((dep, index) => {
						const filteredCrew = credits.crew.filter(
							item => item.known_for_department === dep
						);

						filteredCrew.sort((a, b) => a.job!.localeCompare(b.job!));
						return (
							<li key={index + Math.random()}>
								<h4 className="font-bold mb-2">{dep}</h4>
								{filteredCrew.map(item => (
									<ul key={item.credit_id}>
										<PeopleCard item={item} />
									</ul>
								))}
							</li>
						);
					})}
				</ul>
			</div>
		</section>
	);
}
export default MovieCastList;
