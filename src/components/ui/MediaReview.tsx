import { Reviews } from "@/utils/types";
import { Link } from "react-router-dom";
import MediaReviewCard from "./MediaReviewCard";
function MediaReview({ data, id }: { data: Reviews; id?: string }) {
	console.log(data);
	console.log("id", id);

	console.log(data);

	if (data) {
		return (
			<section className="mt-4 p-4 ">
				<div className="flex justify-start items-end gap-x-20">
					<h3 className="font-semibold text-xl">Social</h3>
					<p className="font-semibold">
						Reviews <span className="font-light">0</span>
					</p>
				</div>
				{data.results
					.filter((_, index) => index === data.results.length - 1)
					.map(result => (
						<MediaReviewCard data={result} key={id} />
					))}

				<div
					className={
						data.results.length > 1
							? "block mt-8 capitalize font-bold hover:text-gray-400"
							: "hidden"
					}>
					<Link to={`/movie/${id}/reviews`}> read all reviews</Link>
				</div>
			</section>
		);
	} else {
		return (
			<section className="mt-4 p-4 ">
				<div className="flex justify-start items-end gap-x-20">
					<h3 className="font-semibold text-xl">Social</h3>
					<p className="font-semibold">
						Reviews <span className="font-light">0</span>
					</p>
				</div>
				<div className="mt-4 p-4 ">
					{" "}
					We don't have any reviews yet. Would you like to write one?
				</div>
			</section>
		);
	}
}
export default MediaReview;
