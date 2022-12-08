import React from "react";
import { Space, Spin } from 'antd';

const Spinner = ({ loading }) => {
	return (
		<Space style={{marginTop: "50px"}} size="large">
			<Spin size="large" spinning={loading} />
		</Space>
	)
}

export default Spinner;
