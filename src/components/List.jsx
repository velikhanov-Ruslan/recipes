import React from "react";
import { List } from 'antd';
import RecipesItem from "./RecipesItem";

const Listing = ({ items, updateReciep }) => {

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
      dataSource={items}
      renderItem={(item) => (
        <RecipesItem {...item} />
      )}
    />
  )
}

export default Listing;
