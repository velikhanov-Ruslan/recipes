import React from 'react'
import {Layout, Row} from "antd"
import LoginForm from '../components/LoginForm'

const Login = () => {
	return (
		<Layout>
			<Row justify={'center'} align='middle' className={"row"}>
				<LoginForm/>
			</Row>
		</Layout>
		)
}

export default Login
