import React from "react";
import {List } from 'antd';
import RecipesItem from "./RecipesItem";

const Listing =(items) => {
    const data = Array.from({
        length: 10,
      }).map((_, i) => ({
        href: 'https://ant.design',
        title: `крабовый салат ${i}`,
        description:
          'Салат из крабовых палочек с кукурузой, рисом и вареными яйцами - вкусная и очень популярная закуска. Рецепт крабового салата с кукурузой прост в исполнении - салат не требует сложных ингредиентов и готовится достаточно быстро.',
        content:
          'крабовые палочки, кукуруза консервированная, рис, рис отварной, яйца, соль, майонез, зелень',
      }));

    return (
        <List
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 3,
        }}
        dataSource={data}
        renderItem={(item) => (
            <RecipesItem {...item}/>
        )}
      />
    )
}

export default Listing;
