import { Row, Avatar } from 'antd'
import { Header } from 'antd/es/layout/layout'
import React from 'react'
import { useSelector } from 'react-redux'

const NavBar = () => {
	const {isAuth} = useSelector(state => state.auth);
	const user = 'руслан'
	return (
		<Header>
			<Row justify={'end'}>
				{isAuth
					? <div style={{color: "white"}}>{user} <Avatar src="https://joeschmoe.io/api/v1/random" /> </div>
					: <div style={{color: "white"}}>{user}</div>
				}
			</Row>
		</Header>
	)
}

export default NavBar
