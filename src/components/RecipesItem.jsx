import React, { useState } from 'react'
import { LikeOutlined } from '@ant-design/icons';
import { List, Space, Button, Image, Modal } from "antd";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../hooks/useAppDispatch';
import CreateForm from './CreateForm';
import routeNames from '../router';

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
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleCancel = () => {
		setIsModalOpen(false);
	};

	const setLike = () => {
		setController(prev => !prev);
		setLikesCount(prev => controller ? prev + 1 : prev - 1);
	}

	const { deleteRecipe } = useAppDispatch();

	const handleClickDeleteButton = () => {
		deleteRecipe(id);
	}

	const handleUpdateRecipe = () => {
		setIsModalOpen(true)
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
					<Link to={`${routeNames.RECIPES}/${id}`}>Подробнее о рецепте</Link>,
					isAuth ? <Button onClick={handleClickDeleteButton}>Удалить рецепт</Button> : null,
					isAuth ? <Button onClick={handleUpdateRecipe}>Изменить рецепт</Button> : null
				]}
				extra={
					<Image
						width={180}
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
			<Modal
				title="Форма обновления рецепта"
				open={isModalOpen}
				onCancel={handleCancel}
				footer={[
					<Button onClick={handleCancel} key={"back"}>Отмена</Button>
				]}
			>
				<CreateForm
					closeModal={handleCancel}
					type={"update"} id={id}
					composition={composition}
				/>
			</Modal>
		</>
	)
}

export default RecipesItem;
