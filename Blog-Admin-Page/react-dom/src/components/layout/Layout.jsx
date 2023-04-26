import React from 'react'
import Header from '../header/Header'
import { Outlet } from 'react-router'

function Layout() {
  return (
    <div>
         <Header />


         <Outlet />




    </div>
  )
}

export default Layout