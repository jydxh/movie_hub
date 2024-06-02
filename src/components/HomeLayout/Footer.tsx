import footerLogo from "@/assets/TMDB_footer_logo.svg";
import { Link } from "react-router-dom";

function Footer() {
	return (
		<footer className=" bg-gradient-to-r from-sky-950 to-slate-900 p-10 text-white ">
			<div className="flex justify-center md:justify-between items-center p-4 mx-auto max-w-[1280px] gap-x-10">
				<Link to="/">
					<img src={footerLogo} alt="footerLogo" className="w-[10rem]" />
				</Link>
				<p className="md:text-2xl font-light">Modifed By Haocheng</p>
				<a className="md:text-2xl font-light" href="https://github.com/jydxh">
					github: jydxh
				</a>
			</div>
		</footer>
	);
}
export default Footer;
