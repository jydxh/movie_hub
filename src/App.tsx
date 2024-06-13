import {
	//	createBrowserRouter,
	createHashRouter,
	RouterProvider,
} from "react-router-dom";
import {
	Layout,
	Home,
	Login,
	Register,
	MovieLayout,
	TvLayout,
	People,
	SingleMovie,
	Search,
	MultSearch,
	MovieSearch,
	PeopleSearch,
	CollectionsSearch,
	TVshowsSearch,
	SingleTv,
	SinglePerson,
} from "./pages";

import { action as LoginAction } from "@/pages/Login";
import { action as RegisterAction } from "@/pages/Register";

import multiSearchLoader from "@/utils/multiSearchLoader";
import movieListsLoader from "./utils/movieListsLoader";
import PopularMovieWrapper from "./routes/PopularMovieWrapper";
import PlayingMovieWrapper from "./routes/PlayingMovieWrapper";
import UpcomingMovieWrapper from "./routes/UpcomingMovieWrapper";
import TopRatedMovieWrapper from "./routes/TopRatedMovieWrapper";
import ArrivingTvWrapper from "./routes/ArrivingTvWrapper";
import OnTvWrapper from "./routes/OnTvWrapper";
import PopularTvWrapper from "./routes/PopularTvWrapper";
import TopRatedTvWrapper from "./routes/TopRatedTvWrapper";

//const router = createBrowserRouter([
const router = createHashRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{ index: true, element: <Home /> },
			{
				path: "movie",
				element: <MovieLayout />,
				children: [
					{
						path: "popular",
						element: <PopularMovieWrapper />,
						loader: movieListsLoader("popular"),
					},
					{
						path: "playing",
						element: <PlayingMovieWrapper />,
						loader: movieListsLoader("now_playing"),
					},
					{
						path: "upcoming",
						element: <UpcomingMovieWrapper />,
						loader: movieListsLoader("upcoming"),
					},
					{
						path: "top_rated",
						element: <TopRatedMovieWrapper />,
						loader: movieListsLoader("top_rated"),
					},
				],
			},
			{ path: "movie/:id", element: <SingleMovie /> },
			{
				path: "tv_show",
				element: <TvLayout />,
				children: [
					{ path: "popular", element: <PopularTvWrapper /> },
					{ path: "arriving", element: <ArrivingTvWrapper /> },
					{ path: "on_Tv", element: <OnTvWrapper /> },
					{ path: "top_rated", element: <TopRatedTvWrapper /> },
				],
			},
			{ path: "tvShow/:id", element: <SingleTv /> },
			{ path: "people", element: <People /> },
			{ path: "people/:id", element: <SinglePerson /> },
			{
				path: "search",
				element: <Search />,
				children: [
					{
						index: true,
						element: <MultSearch />,
						loader: multiSearchLoader("multi"),
					},
					{
						path: "movies",
						element: <MovieSearch />,
						loader: multiSearchLoader("movie"),
					},
					{
						path: "tvShow",
						element: <TVshowsSearch />,
						loader: multiSearchLoader("tv"),
					},
					{
						path: "people",
						element: <PeopleSearch />,
						loader: multiSearchLoader("person"),
					},
					{
						path: "collections",
						element: <CollectionsSearch />,
						loader: multiSearchLoader("collection"),
					},
				],
			},
		],
	},
	{
		path: "/login",
		element: <Login />,
		action: LoginAction,
	},
	{
		path: "/register",
		element: <Register />,
		action: RegisterAction,
	},
]);

export default function App() {
	return (
		<RouterProvider router={router} fallbackElement={<p>Initial Load...</p>} />
	);
}
