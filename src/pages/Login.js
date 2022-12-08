import React, { useEffect } from 'react'
import { Layout, Row } from "antd"
import LoginForm from '../components/LoginForm'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'

const Login = () => {
	const { isAuth } = useSelector(state => state.auth);
	const navigate = useNavigate();

	useEffect(() => {
		if (isAuth) {
			navigate("/recipes");
		}
	}, [isAuth])

	return (
		<Layout>
			<Row justify={'center'} align='middle' className={"row"}>
				<LoginForm />
			</Row>
		</Layout>
	)
}

export default Login
