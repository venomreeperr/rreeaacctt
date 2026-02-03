import React from 'react'
import Header from '../Header/Header.jsx'
import Footer from '../Footer/footer.jsx'
import { Outlet } from 'react-router-dom'
function Layout() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout   