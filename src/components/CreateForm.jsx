import React, { useState } from 'react';
import { Form, Space, Input, Button } from 'antd';
import { rules } from '../utils/rules';
import { useSelector } from 'react-redux';
import { useAppDispatch } from "../hooks/useAppDispatch";
import Error from "./Error";

const { TextArea } = Input;

const CreateForm = ({ closeModal, type, id }) => {
	const [data, setData] = useState({});
	const { isLoading, error } = useSelector(state => state.auth);
	const { createRecipe, setIsError, updateRecipe } = useAppDispatch();

	const onChange = (field) => {
		setData({
			...data,
			[field.name]: field.value
		});
		setIsError("");
	}

	const submit = (formData) => {
		if (type === "update") {
			updateRecipe(id, formData);
		} else {
			console.log(formData);
			createRecipe(formData);
			closeModal();
		}
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
					label="Наименование"
					name="title"
					rules={[rules.required('Поле обязательно для заполнения')]}
				>
					<Input
						name="title"
						value={data?.title ? data?.title : ""}
						onChange={e => onChange(e.target)}
					/>
				</Form.Item>
				<Form.Item
					label="Описание"
					name="description"
					rules={[rules.required('Поле обязательно для заполнения')]}
				>
					<Input
						name="description"
						value={data?.description ? data?.description : ""}
						onChange={e => onChange(e.target)}
					/>
				</Form.Item>
				<Form.Item
					label="Фото"
					name="img"
				>
					<Input
						name="img"
						type='file'
						onChange={e => onChange(e.target)}
					/>
				</Form.Item>
				<Form.Item
					label="Сложность"
					name="complexity"
					rules={[rules.required('Поле обязательно для заполнения')]}
				>
					<Input
						name="complexity"
						value={data?.complexity ? data?.complexity : ""}
						onChange={e => onChange(e.target)}
						type={"text"}
						placeholder={"1 - легкий, 2 - средний"}
					/>
				</Form.Item>
				<Form.Item
					label="Ингредиенты"
					name="composition"
					rules={[rules.required('Поле обязательно для заполнения')]}
				>
					<TextArea
						name="composition"
						value={data?.composition ? [...data?.composition] : ""}
						onChange={e => onChange(e.target)}
						type={"text"}
					></TextArea>
				</Form.Item>
				<Form.Item
					label="Доп ингредиент"
					name="items"
				>
					<TextArea
						name="items"
						value={data?.composition ? [...data?.composition] : ""}
						onChange={e => onChange(e.target)}
						type={"text"}
					></TextArea>
				</Form.Item>
				<Form.Item
					label="Рецепт:"
					name="cooking"
					rules={[rules.required('Поле обязательно для заполнения')]}
				>
					<TextArea
						name="cooking"
						value={data?.cooking ? data?.cooking : ""}
						onChange={e => onChange(e.target)}
						type={"text"}
					></TextArea>
				</Form.Item>
				<Form.Item wrapperCol={{ offset: 12, span: 16 }}>
					<Button type="primary" htmlType="submit" loading={isLoading}>
						Создать
					</Button>
				</Form.Item>
			</Form>
		</Space>

	)
}

export default CreateForm;
