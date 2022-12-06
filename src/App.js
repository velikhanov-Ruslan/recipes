import { Layout } from 'antd';
import { Content } from 'antd/es/layout/layout';
import React from 'react'
import AppRouter from './components/AppRouter';
import NavBar from './components/NavBar';

const App = () => {
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
