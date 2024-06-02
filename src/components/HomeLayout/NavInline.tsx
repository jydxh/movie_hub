import { Link } from "react-router-dom";
import { links } from "@/utils/links";

function NavInline() {
	return (
		<div className="hidden md:flex gap-x-8 justify-center items-center">
			{links.map(link => {
				return (
					<Link to={link.to} key={link.name}>
						{link.name}
					</Link>
				);
			})}
		</div>
	);
}
export default NavInline;
