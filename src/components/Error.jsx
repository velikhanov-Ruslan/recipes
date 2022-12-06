import React from "react";
import { Alert } from "antd";

const Error = ({ textError }) => {
    return (
        <Alert closable showIcon type="error" message={textError ? textError : ""} />
    )
}

export default Error;