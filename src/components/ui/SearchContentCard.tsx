import { baseImgUrl } from "@/utils/types";
import formateDate from "@/utils/formateDate";
import { Skeleton } from "@mui/material";
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
		<div className="w-full mt-4 md:mt-0 pe-4 shadow-lg border rounded-lg border-gray-300 flex mb-6 gap-x-6">
			<div className="flex-shrink-0">
				{poster ? (
					<img
						src={baseImgUrl + "/w500" + poster}
						alt={title}
						className="w-[8rem] h-[12rem] rounded-ss-lg object-fit"
					/>
				) : (
					<Skeleton
						variant="rectangular"
						animation={false}
						width={128}
						height={192}
					/>
				)}
			</div>
			<div className="mt-4">
				<h4>{title}</h4>
				<p className="text-gray-400 ">{formateDate(release_date)}</p>
				<article className="line-clamp-2 mt-8">{overview}</article>
			</div>
		</div>
	);
}
export default SearchContentCard;
