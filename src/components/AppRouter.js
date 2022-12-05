import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Navigate, Routes } from 'react-router';
import {routes} from "../router/router";

const AppRouter = () => {
	const {isAuth} = useSelector(state => state.auth);

	return (
		<Routes>
			{routes && routes.map(route => {
				return <Route
					key={`route-${route.path}`}
					element={<route.element/>}
					path={route.path}
				/>
			})}
		</Routes>
	)
}

export default AppRouter
