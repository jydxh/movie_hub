import backgroundColor from "@/utils/backgroundColor";
import { baseImgUrl } from "@/utils/types";
import { Link } from "react-router-dom";
import WestIcon from "@mui/icons-material/West";

function MovieCastHeader({
	id,
	img,
	title,
}: {
	img: string;
	title: string;
	id: string;
}) {
	return (
		<section className={`${backgroundColor(id)} p-4 flex gap-x-8`}>
			<img
				src={`${baseImgUrl}/w116_and_h174_face/${img}`}
				alt={title}
				className="w-[4rem]"
			/>
			<div className="flex flex-col justify-center">
				<h1 className="text-3xl font-bold text-white hover:text-gray-400">
					<Link to={`/movie/${id}`}>{title}</Link>
				</h1>
				<Link
					to={`/movie/${id}`}
					className="text-gray-300 hover:text-gray-400 flex items-center gap-x-2">
					<WestIcon /> Back to main
				</Link>
			</div>
		</section>
	);
}
export default MovieCastHeader;
