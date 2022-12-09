import React, { useState } from "react";
import { Form, Input, Button, Space } from "antd";
import { Link, } from "react-router-dom";
import Error from "./Error";
import { rules } from "../utils/rules";
import { useAppDispatch } from "../hooks/useAppDispatch"
import { useSelector } from "react-redux";
import routeNames from "../router";

const LoginForm = () => {
	const [data, setData] = useState({});
	const { isLoading, error } = useSelector(state => state.auth);
	const { login, setIsError } = useAppDispatch();

	const onChange = (field) => {
		setData({
			...data,
			[field.name]: field.value
		});

		setIsError("");
	}

	const submit = () => {
		login(data);
	}

	return (
		<Space size={[0, 20]} direction="vertical">
			{error && <Error textError={error} />}
			<Form
				name="basic"
				labelCol={{ span: 8 }}
				wrapperCol={{ span: 16 }}
				initialValues={{ remember: true }}
				onFinish={submit}
				autoComplete="off"
			>
				<Form.Item
					label="Имя"
					name="username"
					rules={[rules.required('Введите логин')]}
				>
					<Input
						name="username"
						value={data?.username ? data?.username : ""}
						onChange={e => onChange(e.target)}
					/>
				</Form.Item>
				<Form.Item
					label="Пароль"
					name="password"
					rules={[rules.required('Введите пароль')]}
				>
					<Input.Password
						name="password"
						value={data?.password ? data?.password : ""}
						onChange={e => onChange(e.target)}
						type={"password"}
					/>
				</Form.Item>
				<Form.Item wrapperCol={{ offset: 12, span: 16 }}>
					<Button type="primary" htmlType="submit" loading={isLoading}>
						Войти
					</Button>
				</Form.Item>
				<Form.Item wrapperCol={{ offset: 12, span: 16 }}>
					<Link to={routeNames.RECIPES}>Пропустить</Link>
				</Form.Item>
			</Form>
		</Space>
	)
}

export default LoginForm;
