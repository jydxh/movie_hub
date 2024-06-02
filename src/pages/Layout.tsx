import Logo from "@/assets/TMDB_logo.svg";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import NavInline from "@/components/HomeLayout/NavInline";
import NavList from "@/components/HomeLayout/NavList";
import ThemeToggle from "@/components/HomeLayout/ThemeToggle";
import Footer from "@/components/HomeLayout/Footer";
import { Button } from "@mui/material";

function Layout() {
	return (
		<>
			<header className="bg-gradient-to-r from-sky-950 to-slate-900 px-6 text-white ">
				<div className="mx-auto flex justify-between items-center max-w-[1280px] py-4">
					<nav className="py-2 h-[36px] flex gap-x-8 justify-center items-center  font-semibold capitalize">
						<Link to="/">
							<img src={Logo} alt="logo" className="w-[10rem]   " />
						</Link>
						<NavInline />
						<div className="md:hidden relative -start-8 ">
							<NavList />
						</div>
					</nav>

					<div className="flex gap-x-1 items-center">
						<ThemeToggle />
						<Button>
							<Link to="/login">Login</Link>
						</Button>
						<Button>
							<Link to="/register"> Register</Link>
						</Button>
					</div>
				</div>
			</header>
			<main>
				<Outlet />
			</main>
			<Footer />
		</>
	);
}
export default Layout;
