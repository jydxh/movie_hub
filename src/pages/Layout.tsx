import Logo from "@/assets/TMDB_logo.svg";
import { Outlet, useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import NavInline from "@/components/HomeLayout/NavInline";
import NavList from "@/components/HomeLayout/NavList";
import ThemeToggle from "@/components/HomeLayout/ThemeToggle";
import Footer from "@/components/HomeLayout/Footer";
import { Button } from "@mui/material";
import { store } from "@/store";
import { logout } from "@/feature/User/userSlice";

function Layout() {
	const username = store.getState().user.username;

	const { pathname } = useLocation(); // use location to get the current location url info and destruct the pathname
	const navigate = useNavigate(); // programmaly nav to the path, so to update the ui
	const handlelogout = () => {
		store.dispatch(logout());
		navigate(pathname);
	};
	return (
		<>
			<header className="bg-gradient-to-r from-sky-950 to-slate-900 text-white min-w-[615px]">
				<div
					className={`mx-auto flex justify-between items-center max-w-[1400px] py-4 ${
						pathname === "/" && " min-w-[615px]"
					}`}>
					<nav className="py-2 h-[36px] flex gap-x-8 justify-center items-center  font-semibold capitalize">
						<Link to="/">
							<img src={Logo} alt="logo" className="w-[10rem]" />
						</Link>
						<NavInline />
						<div className="md:hidden relative -start-8 ">
							<NavList />
						</div>
					</nav>

					<div className="flex gap-x-1 items-center">
						<ThemeToggle />
						{username ? (
							<>
								<p>Welcome {username}</p>
								<Button className="capitalize" onClick={handlelogout}>
									Logout
								</Button>
							</>
						) : (
							<>
								<Button>
									<Link to="/login">Login</Link>
								</Button>
								<Button>
									<Link to="/register"> Register</Link>
								</Button>
							</>
						)}
					</div>
				</div>
			</header>

			<main className="max-w-[1400px] mx-auto ">
				<Outlet />
			</main>
			<Footer />
		</>
	);
}
export default Layout;
