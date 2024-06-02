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
} from "./pages";

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
		],
	},
	{
		path: "/login",
		element: <Login />,
	},
	{
		path: "/register",
		element: <Register />,
	},
]);

export default function App() {
	return (
		<RouterProvider router={router} fallbackElement={<p>Initial Load...</p>} />
	);
}
