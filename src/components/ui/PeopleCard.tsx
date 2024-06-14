import { PeopleListResult } from "@/utils/types";

function PeopleCard({ result }: { result: PeopleListResult }) {
	const { name, profile_path, known_for } = result;
	return (
		<div className="rounded-xl w-full h-[22rem]  border shadow-xl pb-2 ">
			<img
				src={`https://media.themoviedb.org/t/p/w470_and_h470_face${profile_path}`}
				alt={name}
				className="block rounded-t-xl"
			/>
			<p className="px-2 pt-1 text-lg font-medium">{name}</p>
			<ul className="px-2 line-clamp-2 ">
				{known_for.map((item, index) => {
					return (
						<li key={item.id} className="inline text-sm flex-shrink-0">
							{`${item.name || item.title}${
								index < known_for.length - 2 ? "," : ""
							}${index == known_for.length - 2 ? ", and " : ""}`}{" "}
						</li>
					);
				})}
			</ul>
		</div>
	);
}
export default PeopleCard;
