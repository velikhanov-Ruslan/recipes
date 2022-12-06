import React, { useEffect, useState } from 'react';
import { Layout, Row, Col } from "antd";
import Listing from '../components/List';
import { Typography } from 'antd';
import api from "../utils/api";

const { Title } = Typography;

const Recipes = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        try {
            api.get("/items").then(res => setRecipes(res.data));
        } catch (error) {
            console.log(error);
        }
    }, [])

    return (
        <Layout>
            <Row align='middle' className={"row row--recipes"}>
                <Col>
                    <Title justify="center">Список рецептов</Title>
                </Col>
                <Col span={15}>
                    <Listing items={recipes} />
                </Col>
            </Row>
        </Layout>
    )
}

export default Recipes;
