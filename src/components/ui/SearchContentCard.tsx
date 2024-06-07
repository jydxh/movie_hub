import { baseImgUrl } from "@/utils/types";
import formateDate from "@/utils/formateDate";
type SearchContentProps = {
	poster: string | null;
	title: string;
	release_date?: string;
	overview: string;
};

function SearchContentCard({
	poster,
	title,
	release_date,
	overview,
}: SearchContentProps) {
	return (
		<div className="w-full pe-4 shadow-lg border border-gray-300">
			<div>
				<img
					src={baseImgUrl + "/original" + poster}
					alt={title}
					className="w-[4rem] h-[8rem]"
				/>
			</div>
			<div>
				<h4>{title}</h4>
				<p className="text-gray-400">{formateDate(release_date)}</p>
				<article>{overview}</article>
			</div>
		</div>
	);
}
export default SearchContentCard;
