import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
	Layout,
	Home,
	Login,
	Register,
	Movie,
	TvShow,
	People,
	SingleMovie,
	Search,
	MultSearch,
	MovieSearch,
	PeopleSearch,
	KeywordsSearch,
	CollectionsSearch,
	CompaniesSearch,
	TVshowsSearch,
} from "./pages";

import { action as LoginAction } from "@/pages/Login";
import { action as RegisterAction } from "@/pages/Register";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{ index: true, element: <Home /> },
			{
				path: "movie",
				element: <Movie />,
			},
			{ path: "movie/:id", element: <SingleMovie /> },
			{ path: "tvShow", element: <TvShow /> },
			{ path: "people", element: <People /> },
			{
				path: "search",
				element: <Search />,
				children: [
					{ index: true, element: <MultSearch /> },
					{ path: "movies", element: <MovieSearch /> },
					{ path: "people", element: <PeopleSearch /> },
					{ path: "keywords", element: <KeywordsSearch /> },
					{ path: "collections", element: <CollectionsSearch /> },
					{ path: "companies", element: <CompaniesSearch /> },
					{ path: "tvShow", element: <TVshowsSearch /> },
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
