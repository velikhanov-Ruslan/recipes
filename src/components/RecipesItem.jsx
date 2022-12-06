import React from 'react'
import { LikeOutlined } from '@ant-design/icons';
import { List, Space } from "antd";
import { Link } from 'react-router-dom';

const RecipesItem = ({ title, description, content }) => {
	const IconText = ({ icon, text }) => (
		<Space>
			{React.createElement(icon)}
			{text}
		</Space>
	);
	return (
		<>
			<List.Item
				key={title}
				actions={[
					<IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
					<div>Сложность: низка</div>,
					<Link to={"/item"}>Подробнее о рецепте</Link>
				]}
				extra={
					<img
						width={272}
						alt="logo"
						src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
					/>
				}
			>
				<List.Item.Meta
					title={title}
					description={description}
				/>
				{content}
			</List.Item>
		</>
	)
}

export default RecipesItem;
