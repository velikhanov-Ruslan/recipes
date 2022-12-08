import React, { useEffect } from 'react';
import { Layout, Row, Col } from "antd";
import Listing from '../components/List';
import { Typography, Select } from 'antd';
import { useAppDispatch } from "../hooks/useAppDispatch";
import { useSelector } from 'react-redux';
import Spinner from "../components/Spinner";
import SearchField from "../components/SearchField";
const { Title } = Typography;

const Recipes = () => {
	const { getRecipes, searchRecipes } = useAppDispatch();
	const { recipes, isLoading } = useSelector(state => state.recipes);

	useEffect(() => {
		getRecipes();
	}, [])

	const handleInput = (e) => {
		searchRecipes(e.target.value)
	}

	return (
		<Layout>
			<Row align='middle' className={"row row--recipes"}>
				<Col>
					<Title justify="center">{recipes ? "Список рецептов" : "Не найдено"}</Title>
				</Col>
				<Col span={15}>
				<SearchField onChange={handleInput}/>
				Сортировать по:
				<Select
					defaultValue="Сложности"
					style={{ width: 120 }}
					onChange={handleChange}
					options={[
						value: "Сложности",
						""
					]}
				/>
					{
						isLoading
							? <Spinner loading={isLoading} />
							: recipes && <Listing items={recipes} />
					}
				</Col>
			</Row>
		</Layout>
	)
}

export default Recipes;
