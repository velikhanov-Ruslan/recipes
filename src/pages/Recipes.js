import React from 'react';
import List from "../components/List";
import {Layout, Row} from "antd";

const Recipes = () => {
    return (
        <Layout>
            <Row justify={'center'} align='middle' className={"row"}>
                <List/>
            </Row>
        </Layout>
    )
}

export default Recipes;