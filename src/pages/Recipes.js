import React from 'react';
import { Layout, Row } from "antd";
import Listing from '../components/List';
import { Typography } from 'antd';

const { Title } = Typography;

const Recipes = () => {
    return (
        <Layout>
            <Row align='middle' className={"row row--recipes"}>
                <Title>Список рецептов</Title>
                <Listing />
            </Row>
        </Layout>
    )
}

export default Recipes;
