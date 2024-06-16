import formateDate from "@/utils/formateDate";
import { Reviews, baseImgUrl } from "@/utils/types";
import convertTxtIntoPara from "@/utils/convertTxtIntoPara";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export interface MediaReviewCardProps {
	data: Reviews;
	id?: string;
}

function MediaReviewCard({ data, id }: MediaReviewCardProps) {
	const { results } = data;
	const latestReview = results[results.length - 1];
	const { author, content, updated_at, url, author_details } = latestReview;
	return (
		<section className="mt-4 p-4 ">
			<div className="flex justify-start items-end gap-x-20">
				<h3 className="font-semibold text-xl">Social</h3>
				<p className="font-semibold">
					Reviews <span className="font-light">{data.total_results}</span>
				</p>
			</div>
			<div className="w-full border border-gray-200 shadow-lg mt-4 p-8 rounded-lg">
				<div className="flex items-center justify-start gap-x-4">
					<img
						src={`${baseImgUrl}/w90_and_h90_face/${author_details.avatar_path}`}
						alt={author}
						className="rounded-full border-2 w-[3.8rem] h-[3.8rem]"
					/>
					<div className="flex flex-col justify-center">
						<h5 className="font-bold text-xl">A review by {author}</h5>
						<p className="font-light text-sm">
							Written by <span className="font-bold">{author}</span> on{" "}
							{formateDate(updated_at)}
						</p>
					</div>
				</div>
				<article
					dangerouslySetInnerHTML={{
						__html: convertTxtIntoPara(content),
					}}
				/>
				{/* <p>{content}</p> */}
				<Button size="small" variant="text">
					<a href={url}>read the rest</a>
				</Button>
			</div>

			<div
				className={
					results.length > 1
						? "block mt-8 capitalize font-bold hover:text-gray-400"
						: "hidden"
				}>
				<Link to={`/movie/${id}/reviews`}> read all reviews</Link>
			</div>
		</section>
	);
}
export default MediaReviewCard;
