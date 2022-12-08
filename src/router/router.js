import Login from "../pages/Login";
import Recipes from "../pages/Recipes";
import Detail from "../pages/Detail";

export const routeNames = {
	LOGIN: "/login",
	RECIPES: "/recipes",
	DETAIL: "/recipes/:id"
}

export const routes = [
	{
		path: routeNames.LOGIN,
		component: Login
	},
	{
		path: routeNames.RECIPES,
		component: Recipes
	},
	{
		path: routeNames.DETAIL,
		component: Detail
	},
];
