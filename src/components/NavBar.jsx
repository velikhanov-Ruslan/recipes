import { Row, Avatar, Space, Typography, Button } from 'antd';
import { PoweroffOutlined, RollbackOutlined } from '@ant-design/icons';
import { Header } from 'antd/es/layout/layout'
import React from 'react'
import { useSelector } from 'react-redux';
import { useAppDispatch } from "../hooks/useAppDispatch";
import { useLocation, useNavigate } from "react-router-dom";
import { routeNames } from "../router/router";

const { Text } = Typography;

const NavBar = () => {
	const { isAuth, user, isLoading } = useSelector(state => state.auth);
	const { logOut } = useAppDispatch();
	const { pathname } = useLocation();
	const navigate = useNavigate();

	const handleClickLogOut = () => {
		logOut();
		navigate("/login");
	}

	const handleClickLogin = () => {
		navigate("/login");
	}

	return (
		<Header>
			<Row justify={'end'}>
				{isAuth
					?
					<Space size={[20, 0]} direction="horizontal">
						<Text style={{ color: "white" }}>{user?.username}</Text>
						<Avatar src="https://avatars.dicebear.com/api/avataaars/john.svg?background=%230000ff" />
						<Button
							type="primary"
							icon={<PoweroffOutlined />}
							loading={isLoading}
							onClick={handleClickLogOut}
						>
							Выйти
						</Button>
					</Space>
					: (pathname === routeNames.LOGIN || pathname === "/")
						? null
						: <Space>
							<Button
								type="primary"
								icon={<RollbackOutlined />}
								onClick={handleClickLogin}
							>
								Перейти к авторизации
							</Button>
						</Space>
				}
			</Row>
		</Header>
	)
}

export default NavBar
