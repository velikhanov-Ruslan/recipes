import React from 'react'
import { useSelector } from 'react-redux';
import AppRouter from './components/AppRouter';
import {useAppDispatch} from "./hooks/useAppDispatch";

const App = () => {
  const {setAuth} = useAppDispatch();
  const {isAuth} = useSelector(state => state.auth)

  return (
    <AppRouter/>
  )
}

export default App
