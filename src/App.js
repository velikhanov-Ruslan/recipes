import { Layout } from 'antd';
import { Content } from 'antd/es/layout/layout';
import React from 'react'
import { useSelector } from 'react-redux';
import AppRouter from './components/AppRouter';
import NavBar from './components/NavBar';
import { useAppDispatch } from "./hooks/useAppDispatch";

const App = () => {
  const { setAuth } = useAppDispatch();
  const { isAuth } = useSelector(state => state.auth)

  return (
    <Layout>
      <NavBar />
      <Content>
        <AppRouter />
      </Content>
    </Layout>
  )
}

export default App
