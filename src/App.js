import { Layout } from 'antd';
import { Content } from 'antd/es/layout/layout';
import React, { useEffect } from 'react'
import AppRouter from './components/AppRouter';
import NavBar from './components/NavBar';
import { useAppDispatch } from './hooks/useAppDispatch';

const App = () => {
  const { setUser, setAuth } = useAppDispatch();

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setUser({ username: localStorage.getItem("username" || "") });
      setAuth(true);
    }
  }, [setUser, setAuth])

  return (
    <Layout>
      <NavBar />
      <Content >
        <AppRouter />
      </Content>
    </Layout>
  )
}

export default App
