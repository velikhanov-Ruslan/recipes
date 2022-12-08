import React, { useState } from 'react'
import { LikeOutlined } from '@ant-design/icons';
import { List, Space, Button } from "antd";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../hooks/useAppDispatch';

const RecipesItem = ({ title, composition, description, complexity, likes, img, id }) => {
	const IconText = ({ icon, text }) => (
		<Space>
			{React.createElement(icon)}
			{text}
		</Space>
	);

	const { isAuth } = useSelector(state => state.auth);
	const [likesCount, setLikesCount] = useState(likes);
	const [controller, setController] = useState(true);

	const setLike = () => {
		setController(prev => !prev);
		setLikesCount(prev => controller ? prev + 1 : prev - 1);
	}

	const {deleteRecipe} = useAppDispatch();

	const handleClickDeleteButton = () => {
		deleteRecipe(id);
	}

	return (
		<>
			<List.Item
				key={title}
				actions={[
					isAuth ? <Button onClick={setLike} >
						<IconText icon={LikeOutlined} text={likesCount ? likesCount : 0} key="list-vertical-like-o" />
					</Button> : null,
					<div>Сложность: {complexity === 1 ? "Легкая" : "Средняя"}</div>,
					<Link to={`/recipes/${id}`}>Подробнее о рецепте</Link>,
					isAuth ? <Button onClick={handleClickDeleteButton}>Удалить рецепт</Button> : null
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
					description={Array.isArray(composition) ? composition.join(", ") : composition}
				/>
				{description}
			</List.Item>
		</>
	)
}

export default RecipesItem;
