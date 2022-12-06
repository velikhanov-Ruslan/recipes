import React, { useEffect, useState } from 'react';
import { Layout, Row } from "antd";
import Listing from '../components/List';
import { Typography } from 'antd';
import {db} from "../firebase-config";
import {collection, getDocs} from "firebase/firestore"

const { Title } = Typography;

const Recipes = () => {
    const [recipes, setRecipes] = useState();
    const recipesCollectionRef = collection(db, "recipes")

    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(recipesCollectionRef);
            setRecipes(data.docs.map(doc => ({...doc.data(), id: doc.id})));
            console.log(data);
        }

        getUsers()
    }, [])

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
