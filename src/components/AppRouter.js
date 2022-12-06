import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router';
import Login from '../pages/Login';
import Recipes from '../pages/Recipes';
import { routeNames, routes } from "../router/router";

const AppRouter = () => {
	const { isAuth } = useSelector(state => state.auth);

	return (
		isAuth
			?
			<Routes>
				{routes && routes.map(route => {
					return <Route
						key={`route-${route.path}`}
						path="/"
						element={<Recipes />}
					/>
				})}
				<Route path="*" element={<Recipes/>} />
			</Routes>
			:
			<Routes>
				{routes && routes.map(route => {
					return <Route
						key={`route-${route.path}`}
						path="/"
						element={<Login />}
					/>
				})}
				<Route path={routeNames.RECIPES} element={<Recipes />} />
				<Route path="*" element={<Login />} />
			</Routes>
	)
}

export default AppRouter
