import React from "react";
import { Input } from "antd";
const { Search } = Input;

const SearchField = ({ isLoading, onChange }) => {
  return (
    <Search onChange={onChange} placeholder="Поиск..." loading={isLoading} />
  )
}

export default SearchField;
