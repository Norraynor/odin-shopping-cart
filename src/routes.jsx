import App from "./App";
import Home from "./Home";
import ErrorPage from "./ErrorPage";
import Shop from "./Shop";

const routes = [
	{
		path: "/",
		element: <App />,
		errorElement: <ErrorPage />,
	},
	{
		path: "shop",
		element: <Shop />,
	},
	{
		path: "about",
		element: <Home />,
	},
];

export default routes;
