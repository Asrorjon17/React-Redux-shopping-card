import React from "react";
import { Navigate } from "react-router-dom";
import Users from "../views/Users/List";
// import Home from "../containers/Home";
import Dashboard from "../pages/Dashboard";
import Sayidbar from "../components/Sayidbar";
import Setting from "../pages/Setting";
import User from "../pages/User";
import Preferences from "../pages/Preferences";
import Maps from "../pages/Maps/maps";
import Home from "../pages/Home";

export const routes = [
	{
		children: [
			{ index: true, element: <Dashboard /> },
			{ path: "/users", element: <Users /> },
			{ path: "/setting", element: <Setting /> },
			{ path: "/user", element: <User /> },
			{ path: "/preferences", element: <Preferences /> },
			{ path: "/maps", element: <Maps /> },
			{ path: "/home", element: <Home /> },
		],
	},
];
