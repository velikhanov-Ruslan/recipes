import React from "react";
import { Space, Spin } from 'antd';

const Spinner = ({ loading }) => {
	return (
		<Space size="middle">
			<Spin size="large" spinning={loading} />
		</Space>
	)
}

export default Spinner;
