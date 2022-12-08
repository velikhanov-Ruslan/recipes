import React, { useEffect, useState } from 'react';
import { Layout, Row, Col, Modal, Button } from "antd";
import Listing from '../components/List';
import { Typography, Select } from 'antd';
import { useAppDispatch } from "../hooks/useAppDispatch";
import { useSelector } from 'react-redux';
import Spinner from "../components/Spinner";
import SearchField from "../components/SearchField";
import CreateForm from "../components/CreateForm";

const { Title } = Typography;

const Recipes = () => {
	const { getRecipes, searchRecipes, sortRecipes } = useAppDispatch();
	const { recipes, isLoading } = useSelector(state => state.recipes);
	const { isAuth } = useSelector(state => state.auth);
	const [isModalOpen, setIsModalOpen] = useState(false);

	useEffect(() => {
		getRecipes();
	}, [])

	const handleInput = (e) => {
		searchRecipes(e.target.value)
	}

	const handleChange = (value) => {
		sortRecipes(value)
	}

	const handleCancel = () => {
		setIsModalOpen(false);
	};

	return (
		<Layout>
			<Modal
				title="Форма создания рецепта"
				open={isModalOpen}
				onCancel={handleCancel}
				footer={[
					<Button onClick={handleCancel} key={"back"}>Отмена</Button>
				]}
			>
				<CreateForm closeModal={handleCancel} />
			</Modal>
			<Row align='middle' className={"row row--recipes"}>
				<Col>
					<Title justify="center">{recipes ? "Список рецептов" : "Не найдено"}</Title>
				</Col>
				<Col span={15}>
					<SearchField onChange={handleInput} />
					Сортировать по:
					<Select
						defaultValue="Сложности"
						style={{ width: 190, marginTop: "20px" }}
						onChange={handleChange}
						options={[
							{
								value: "complexity",
								label: 'Сложности ASC',
							},
							{
								value: "-complexity",
								label: 'Сложности DESC',
							}
						]}
					/>
					{isAuth && <Button onClick={() => setIsModalOpen(!isModalOpen)}>Создать рецепт</Button>}
					{!isLoading && recipes && <Listing items={recipes} />}
				</Col>
				<Col>
					{isLoading && <Spinner loading={isLoading} />}
				</Col>
			</Row>
		</Layout>
	)
}

export default Recipes;
