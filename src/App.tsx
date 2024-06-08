import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
	Layout,
	Home,
	Login,
	Register,
	MovieLayout,
	TvShow,
	People,
	SingleMovie,
	Search,
	MultSearch,
	MovieSearch,
	PeopleSearch,
	CollectionsSearch,
	TVshowsSearch,
	PopularMovie,
	PlayingMovie,
	UpcomingMovie,
	TopRatedMovie,
} from "./pages";

import { action as LoginAction } from "@/pages/Login";
import { action as RegisterAction } from "@/pages/Register";

import multiSearchLoader from "@/utils/multiSearchLoader";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{ index: true, element: <Home /> },
			{
				path: "movie",
				element: <MovieLayout />,
				children: [
					{ path: "popular", element: <PopularMovie /> },
					{ path: "playing", element: <PlayingMovie /> },
					{ path: "upcoming", element: <UpcomingMovie /> },
					{ path: "top_rated", element: <TopRatedMovie /> },
				],
			},
			{ path: "movie/:id", element: <SingleMovie /> },
			{ path: "tvShow", element: <TvShow /> },
			{ path: "people", element: <People /> },
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
