import React from 'react'
import { LikeOutlined } from '@ant-design/icons';
import { List, Space } from "antd";
import { Link } from 'react-router-dom';

const RecipesItem = ({ title, composition, description, complexity, likes, img }) => {
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
					<IconText icon={LikeOutlined} text={likes} key="list-vertical-like-o" />,
					<div>Сложность: {complexity === 1 ? "Легкая" : "Средняя"}</div>,
					<Link to={"/item"}>Подробнее о рецепте</Link>
				]}
				extra={
					<img
						width={190}
						alt="logo"
						src={img}
					/>
				}
			>
				<List.Item.Meta
					title={title}
					description={composition.join(", ")}
				/>
				{description}
			</List.Item>
		</>
	)
}

export default RecipesItem;
