import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router';
import Detail from '../pages/Detail';
import Login from '../pages/Login';
import Recipes from '../pages/Recipes';

const AppRouter = () => {
	const { isAuth } = useSelector(state => state.auth);

	return (
		<Routes>
			<Route path="/" element={isAuth ? <Recipes /> : <Login />} />
			<Route path="/login" element={<Login />} />
			<Route path="/recipes" element={<Recipes />} />
			<Route path="/recipes/:id" element={<Detail />} />
			<Route path="*" element={<Recipes />} />
		</Routes>
	)
}

export default AppRouter
