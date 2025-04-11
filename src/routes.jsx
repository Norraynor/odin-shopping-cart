import App from "./App";
import Home from "./Home";
import ErrorPage from "./ErrorPage";
import Shop from "./Shop";
import About from "./About";
import HomeMain from "./HomeMain";
import Checkout from "./Checkout";
import NavBar from "./NavBar";
import { Component } from "react";

const routes = [
	{
		path: "/",
		element: <Home />,
		errorElement: <ErrorPage />,
		children: [
			{ path: "/", element: <HomeMain /> },
			{ path: "about", element: <About /> },
		],
	},
	{
		path: "shop",
		element: <Shop />,
	},
	{
		path: "about",
		element: <Home />,
	},
	{
		path: "checkout",
		element: <Checkout />,
	},
	{
		Component: NavBar,
		children: [
			{ index: true, Component: Home },
			{ path: "shop", Component: Shop },
			{ path: "about", Component: About },
		],
	},
];

export default routes;
