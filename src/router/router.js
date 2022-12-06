import Login from "../pages/Login";
import Recipes from "../pages/Recipes";

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
];
