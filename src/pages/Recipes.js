import React, { useEffect, useState } from 'react';
import { Layout, Row, Col } from "antd";
import Listing from '../components/List';
import { Typography } from 'antd';

const { Title } = Typography;

const Recipes = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        try {
            const dba = fetch('https://638dca13aefc455fb2ac04c7.mockapi.io/items')
                .then(res => res.json())
                .then(data => setRecipes(data));
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
                <Listing items={recipes}/>
                </Col>
            </Row>
        </Layout>
    )
}

export default Recipes;
