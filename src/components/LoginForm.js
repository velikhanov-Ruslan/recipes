import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import { Link, } from "react-router-dom";
import {rules} from "../utils/rules";

const LoginForm = () => {
    
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const submit = (e) => {
        console.log(e);
    }


    return (
        <Form
        name="basic"
        labelCol={{span: 8}}
        wrapperCol={{span: 16}}
        initialValues={{remember: true}}
        onFinish={submit}
        autoComplete="off"
    >
        <Form.Item
            label="Имя"
            name="username"
            rules={[rules.required('Введите логин')]}
        >
            <Input
                value={userName}
                onChange={e => setUserName(e.target.value)}
            />
        </Form.Item>

        <Form.Item
            label="Пароль"
            name="password"
            rules={[rules.required('Введите пароль')]}
        >
            <Input.Password
                value={password}
                onChange={e => setPassword(e.target.value)}
                type={password}
            />
        </Form.Item>

        <Form.Item wrapperCol={{offset: 12, span: 16}}>
            <Button type="primary" htmlType="submit" >
                Войти
            </Button>
        </Form.Item>

        <Form.Item wrapperCol={{offset: 12, span: 16}}>
                <Link to={"/recipes"}>Пропустить</Link>
        </Form.Item>
    </Form>

    )
}

export default LoginForm;