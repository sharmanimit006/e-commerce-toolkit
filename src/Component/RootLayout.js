import React from 'react'
import NavBar from './NavBarPanel'
import { Outlet } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from '../Store/store';

const RootLayout = () => {
  return (
    <>
    <Provider store={store}>
    <NavBar/>

    <main>
        <Outlet />
        </main>
        </Provider>
        </>
    
  )
}

export default RootLayout