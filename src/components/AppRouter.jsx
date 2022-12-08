import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router';
import Detail from '../pages/Detail';
import Login from '../pages/Login';
import Recipes from '../pages/Recipes';
import routeNames from '../router';

const AppRouter = () => {
	const { isAuth } = useSelector(state => state.auth);

	return (
		<Routes>
			<Route path="/" element={isAuth ? <Recipes /> : <Login />} />
			<Route path={routeNames.LOGIN} element={<Login />} />
			<Route path={routeNames.RECIPES} element={<Recipes />} />
			<Route path={`${routeNames.RECIPES}/:id`} element={<Detail />} />
			<Route path="*" element={<Recipes />} />
		</Routes>
	)
}

export default AppRouter
